const { defineConfig } = require("cypress");
const fs = require('fs');
module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  downloadsFolder   : 'cypress/downloads',
  fixturesFolder    : 'cypress/fixtures',
   //Screenshots
  screenshotsFolder       : 'cypress/screenshots',
  screenshotOnRunFailure  : true,  //Whether Cypress will take a screenshot when a test fails during cypress run.
  defaultCommandTimeout: 5000,
  chromeWebSecurity: false,
  viewportHeight  : 800,   //Default height in pixels for the application under tests' viewport. 
  viewportWidth   : 1200,  //Default width in pixels for the application under tests' viewport.
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
          // a custom task to read a file
      on('task', {
        readFile(filePath) {
          return new Promise((resolve, reject) => {
            fs.readFile(filePath, 'utf8', (err, data) => {
              if (err) {
                reject(err);
              } else {
                resolve(data);
              }
            });
          });
        }
      });
    },
  },
  env:{
    URL: 'http://localhost:3000/task'
  }
});

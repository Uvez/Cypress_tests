## Setup 🛠️

### Pre-requisites

* Install NodeJS and NPM package manager.
* GIT Bash terminal (for Windows)

### Setup from Scratch
* `npm init` to setup node project with package.json
* `npm install --save-dev serve` to install serve as dev dependency. It is used to serve our task.html file as a website.
* `npm install --save-dev concurrently` to install concurrently as dev dependency. It is used to run npm commands concurrently.
* `npm install --save-dev cypress` to install cypress as dev dependency. It will install Cypress in the system.
* `npx cypress open` to open the cypress test runner and choose `E2E Testing` which will create cypress config, support, and fixture folders.
* If cypress does not open, gives you error message such as "No version of Cypress is installed in:". Use below command to install cypress once again.
         `npx cypress install --force`
  
* `npm install --save-dev cypress-file-upload` to install cypress-file-upload as dev dependency. It is used for file upload element.
* `npm install --save-dev cypress-iframe` to install cypress-iframe as dev dependency. It is used to detect iframe elements.
* `npm install --save-dev cypress-mochawesome-reporter` to install cypress-mochawesome-reporter as dev dependency. It is used for test reporting.


## Configuration ⚙️
Project configs are defined under `cypress.config.js`
Test data are stored under `cypress/fixtures/testData.json`


## Running `task.html` as localhost and update the localhost in env file ##
To run `task.html` as host.
Follow the below steps 
* Run the following command in cmd where `task.html` is stored in the directory.
    `serve`

* Verify and check the localhost e.g which port it is being executed.
    `e.g http://localhost:3000/task`

* to stop the server - Use `CTRL + C`

* Update the localhost URL into cypress.config.js in env as below.
  
  ![image](https://github.com/Uvez/Cypress_tests/assets/4579657/77f0c624-377e-427c-8316-f8e21aba89ca)

## Running tests
To execute your Cypress Runner and your `task.html` file as localhost. 
 Run below command :
    `npm run start`
  It will open Cypress Runner and execute your `task.html` file as localhost. In cypress Runner, execute `practiceTest.cy.js` in `Cypress/e2e` folder 

To execute your script in headless mode and your `task.html` file as localhost. 
Run below command
    `npm run test:practiceTest`
  It will run your script in headless mode and execute your `task.html` file as localhost in your system.

To execute your script in headless mode and your `task.html` file as localhost. 
Run below command :
    `npm run test:chrome`
It will run your script in headless mode in chrome and execute your `task.html` file as localhost

To execute your script in headless mode and your `task.html` file as localhost. 
Run below command
    `npm run test:edge`
 It will run your script in headless mode in edge and execute your `task.html` file as localhost

## Test Reporting 📑
 * This framework uses [cypress-mochawesome-reporter](https://www.npmjs.com/package/cypress-mochawesome-reporter) to generate `index.html` test reports.
* Add the following options to `cypress.config.js`

  //cypress-mochawesome-reporter
  `reporter: 'cypress-mochawesome-reporter',`
  `require('cypress-mochawesome-reporter/plugin')(on);`  




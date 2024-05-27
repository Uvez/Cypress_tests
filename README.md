## Setup 🛠️

### Pre-requisites

* Install NodeJS and NPM package manager.
* Code Editor of your choice e.g. Visual Studio Code
* GIT Bash terminal (for Windows)

### Setup from Scratch
* `npm init` to setup node project with package.json
* 'npm install --save-dev serve' to install serve as dev dependency. It is used to serve our task.html file as a Website
* 'npm install --save-dev concurrently' to install concurrently as dev dependency. It is used to run npm commands cocurrently
* 'npm install --save-dev cypress' to install cypress as dev dependency. Install Cypress in the system
* `npx cypress open` to open the cypress test runner and choose `E2E Testing` which will create cypress config, support and fixture folders.
* 'npm install --save-dev cypress-file-upload' to install cypress-file-upload as dev dependency. It is used for file upload element
* 'npm install --save-dev cypress-iframe' to install cypress-iframe as dev dependency. It is used to detect iframe elements
* 'npm install --save-dev cypress-mochawesome-reporter' to install cypress-mochawesome-reporter as dev dependency. It is used for reporting.


## Configuration ⚙️
Project configs are defined under 'cypress.config.js'
Test data are stored under 'cypress/fixtures/testData.json'


## Running task.task.html as localhost and update the localhost in env file
To run 'task.html' as host.
Follow the below steps 
* Run the following command in cmd
    serve

* Verify and check the localhost e.g which port it is been executed
    e.g http://localhost:3000/task

* Update the URL into cypress.config.js in env.

## Running tests

* To execute your cypress runner and your task.html file as localhost. run below command
    npm run start
It will open cypress runner and execute your task.html file as localhost. In cypress Runner, execute practiceTest.cy.js in e2e folder 

* To execute your script in headless mode and your task.html file as localhost. run below command
    npm run test:practiceTest
It will run your script in headless mode and execute your task.html file as localhost

* To execute your script in headless mode and your task.html file as localhost. run below command
    npm run test:chrome
It will run your script in headless mode in chrome and execute your task.html file as localhost

* To execute your script in headless mode and your task.html file as localhost. run below command
    npm run test:edge
It will run your script in headless mode in edge and execute your task.html file as localhost

## Test Reporting 📑
 * This framework uses [cypress-mochawesome-reporter](https://www.npmjs.com/package/cypress-mochawesome-reporter) to generate index.html test reports.
* Add the following options to `cypress.config.js`
   //cypress-mochawesome-reporter
  reporter: 'cypress-mochawesome-reporter',    




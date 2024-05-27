// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import 'cypress-iframe'
Cypress.Commands.add('getIframe', () => {
    return cy
        .get('#courses-iframe')
        .its('0').should('be.visible')      
        .then(cy.wrap)
    })

Cypress.Commands.add('selectFromDropdown',(selector,value)=>{
    cy.get(selector).select(value)
})

Cypress.Commands.add('VerifyAlertMessage',(expectedtext)=>{
    cy.on('window:confirm', (txt) => {
        expect(txt).to.contains(expectedtext); 
})
})

Cypress.Commands.add('closeAlertMessage',()=>{
    const originalAlert = window.alert
    window.alert = function(message){
        console.log('Alert message:',message)
        setTimeout(function(){
            window.alert = originalAlert
        },2000)
    }

})
   
        
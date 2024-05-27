import 'cypress-iframe'

describe('template spec', () => {


  beforeEach(function () {
    cy.visit('http://localhost:3000/task')
  })

  it('dropdown', () => {
    cy.get('#dropdown-class-example').select('Option2').click
    
  })

  it('upload a file', () => {
    //cy.upload_file('eg-logo.jpg', 'image/jpg', 'input[type=file]');
    cy.fixture('eg-logo.jpg').as('jpg')
    cy.get('input[type="file"]').selectFile('@jpg', { action: 'drag-drop' })
    cy.reload(true)
    
  })

it('Multiple files to be uploaded', () => {
  
  
})

it.only('New Tab', () => {


    cy.get('#opentab').invoke('attr','target','_blank').click()
    cy.request('https://www.easygenerator.com/en/').its('status').should('eq', 200);

  
})

it('Mouse Over click on top', () => {

  cy.get('.btn.btn-primary.hover-btn').click()
  cy.contains('Mouse Hover').trigger('Mouseover')
  cy.contains('Top').trigger('Mouseover')
  cy.contains('Top').click()
  //cy.contains('Reload').click()
  
  
})

it('Mouse Over click on reload', () => {

  cy.get('.btn.btn-primary.hover-btn').click()
  cy.contains('Mouse Hover').trigger('Mouseover')
  cy.contains('Reload').trigger('Mouseover')
  cy.contains('Reload').click()
  //cy.contains('Reload').click()
  
})

it('Alert button', () => {
cy.get('#name').type('Test')
//cy.fixture('alert-text.txt').as('txt')
//readtextFile('alert-text.txt').then((filecontent)=>{
//expect(filecontent).to.contains('Hello from easy geneartor')
//})
cy.get('#alertbtn').click()
  cy.on('window:confirm', (txt) => {
    expect(txt).to.contains('share this practice page and share your knowledge.');
  })
})
it('Confirm button', () => {

  cy.get('#name').type('Test')
  //cy.fixture('alert-text.txt').as('txt')
  //readtextFile('alert-text.txt').then((filecontent)=>{
  //expect(filecontent).to.contains('Hello from easy geneartor')
  //})
  cy.get('#confirmbtn').click()
  cy.on('window:confirm', (txt) => {
  expect(txt).to.contains('Are you sure you want to confirm?'); 
})
})

it('Click on show button', () => {
  
  cy.get('#show-textbox').click()
  cy.get('.inputs.displayed-class').should('be.visible')
  //cy.get('input[type="text"][name="show-hide"]').should('be.visble').type('Test')
  
})

it('Click on hide button', () => {
        cy.get('#hide-textbox').click()
        cy.get('.inputs.displayed-class').should('not.be.visible')
      
})

it('Verify Iframe', () => {

  //cy.get('#courses-iframe').then((iframedata)=>{
    //const idata = iframedata.contents().find('body')
    //cy.wrap(idata).find('.menu-item-137250').eq(0).should('be.visible')
    //cy.wrap(idata).find('.cta').eq(0).should('be.visible')
    //a[href="https://www.easygenerator.com/en/why-easygenerator/"]
    //.menu-item-137250
    cy.frameLoaded('#courses-iframe')
    cy.iframe().find('.menu-item-137250').eq(0).should('have.text','Why Easygenerator')


 // })

})





})

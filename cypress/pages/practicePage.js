import 'cypress-iframe'
class practicePage{

    weblocators = {

        dropdown: '#dropdown-class-example',
        opentab:"#opentab",
        modaltext:"#name",
        alertBtn:"#alertbtn",
        confirmBtn:"#confirmbtn",
        hidetextBtn:"#hide-textbox",
        showtextBtn:"#show-textbox",
        fileBtn:'input[type="file"][name="img"]',
        textfield:'.inputs.displayed-class',
        mouseHoverBtn:'.btn.btn-primary.hover-btn',
        homeBtn:'.btn.btn-primary',
        iframeWindow:'#courses-iframe',
        menuItem:'.menu-item-137250',
        IframeEmailId:'#input_161_6',
        IframeElement:'.text-side>a',
        IFrameHeading:'.heading',
        homepageElement:'.wrapper>h1'

    }

    //Use for Opening URL
    openURL(){

        cy.visit(Cypress.env('URL'))
    }
    getDropdownvalue(expectedvalue){
        try{
            cy.get(this.weblocators.dropdown).find(':selected').contains(expectedvalue)
        }
        catch(error){
            cy.log(error)
        }
    }

    verifydropDownvalues(expectedvalues)
    {
        try
        {
            cy.get(this.weblocators.dropdown).find('option').then(options => {
                expect(options).to.have.length.at.least(expectedvalues.length)
                for(let i=0;i<expectedvalues.length;i++)
                {
                    expect(options[i]).to.have.text(expectedvalues[i])
                }

            })
        }
        catch(error){
            cy.log(error)
        }
    }
    verifyuploadFile(filename)
    {
        try{
            cy.fixture(filename).as('file')
            cy.get(this.weblocators.fileBtn).selectFile('@file', { action: 'drag-drop' })
            cy.reload(true)
        }
        catch(error){
            cy.log(error)
        }
    }

    verifyNewTab(expectedURL)
    {
        try{
            cy.get(this.weblocators.opentab).invoke('attr','target','_blank').click()
            cy.request(expectedURL).its('status').should('eq', 200);
        }
        catch(error){
            cy.log(error)
        }
    }

    clickNewTab()
    {
        cy.get(this.weblocators.opentab).click()
    }

    enterandverifyModalText(modeltext){
        try {
            cy.get(this.weblocators.modaltext).should('be.visible')
            cy.get(this.weblocators.modaltext).type(modeltext)
        } catch (error) {
            cy.log(error) 
        }
        
    }
    clickalertButton(expectedtext){
        try {
            cy.get(this.weblocators.alertBtn).click()
            cy.on('window:confirm', (txt) => {
            expect(txt).to.contains(expectedtext); 
             }) 
        } catch (error) {
            cy.log(error) 
        }
       
    }
    clickconfirmButton(expectedtext){
        try{
        cy.get(this.weblocators.confirmBtn).click()
        cy.on('window:confirm', (txt) => {
            expect(txt).to.contains(expectedtext); 
    }) 
        }catch(error){
            cy.log(error)
        }  
    }

    clickandverifyhideButton(){
        try {
            cy.get(this.weblocators.hidetextBtn).click()
            cy.get(this.weblocators.textfield).should('not.be.visible')
        } catch (error) {
            cy.log(error)
        }
     
    }
    clickandverifyshowButton(){
        try {
            cy.get(this.weblocators.showtextBtn).click()
            cy.get(this.weblocators.textfield).should('be.visible')
        }catch (error) {
            cy.log(error)
        }      
    }

    verifymouseHoverTopButton(){
        try{
            cy.get(this.weblocators.mouseHoverBtn).click()
            cy.contains('Mouse Hover').trigger('Mouseover')
            cy.contains('Top').trigger('Mouseover').click()
            cy.get(this.weblocators.homeBtn).eq(0).should('be.visible')
        }catch (error) {
            cy.log(error)
        }   
    }

    verifymouseHoverReloadButton(){
        try {
            cy.get(this.weblocators.mouseHoverBtn).click()
            cy.contains('Mouse Hover').trigger('Mouseover')
            cy.contains('Reload').trigger('Mouseover').click()
            cy.get(this.weblocators.homeBtn).eq(0).should('be.visible')
        } catch (error) {
            cy.log(error)
        }
        
    }

    getandverifyIframeElements(expectedtext,actionname){
        try {
            cy.frameLoaded(this.weblocators.iframeWindow).should('be.visible')
            switch(actionname){
                case "Verify":{
                    cy.iframe().find(this.weblocators.menuItem).eq(0).should('have.text',expectedtext);
                    break;
                }
                case "Enter":{
                        cy.iframe().find(this.weblocators.IframeEmailId).type(expectedtext);
                        break;
                }
                case "Inside":{
                        cy.wait(1000)
                        cy.iframe().find(this.weblocators.IframeElement).should('be.visible')
                        cy.iframe().find(this.weblocators.IframeElement).click()
                        cy.wait(4000)
                        cy.iframe().find(this.weblocators.IFrameHeading).should('be.visible')
                        cy.iframe().find(this.weblocators.IFrameHeading).should('have.text',expectedtext)
                        break;
                }
                case "Outside":{
                        cy.go('back');
                        //cy.get(this.weblocators.homeBtn).click
                        cy.reload(true)
                        cy.get(this.weblocators.dropdown).select(expectedtext).click
                        //cy.get(this.weblocators.homeBtn).contains(expectedtext)
                        break;
                }
                default: {
                    cy.iframe().should('be.visible')
                    break;
                }
            }
        } catch (error) {
            console.log(error)
        }
            
    }

    
}

export default new practicePage()

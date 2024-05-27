import {default as practObj} from "../pages/practicePage"
import practiceData from "../fixtures/testData.json"
import 'cypress-iframe'

        describe('Verify Dropdownfield in the webpage',()=>{

                    beforeEach(() => {
                        practObj.openURL()
                    })
                
                    it('Verify the dropdown value with default option', () => {
                        practObj.getDropdownvalue(practiceData.dropdownlistvalues[0])
                        
                    })

                    it('Verify the dropdown value with different value', () => {
                        cy.selectFromDropdown(practObj.weblocators.dropdown,practiceData.dropdownlistvalues[2])  
                        practObj.getDropdownvalue(practiceData.dropdownlistvalues[2])
                        
                    })

                    it('Verify the all dropdown options', () => {
                        practObj.verifydropDownvalues(practiceData.dropdownlistvalues)
                    })
                    
        })

        describe('Verify New tab and upload a file in the webpage',()=>{

                    beforeEach(() => {
                        practObj.openURL()
                    })

                    it('Verify New tab is loaded', () => {
                        practObj.verifyNewTab(practiceData.EasyURL)
                    })

                    it('Verify upload a file and verify in JPG', () => {
                        practObj.verifyuploadFile(practiceData.filename_jpg)
                    })

                    it('Verify upload a file and verify in PNG', () => {
                        practObj.verifyuploadFile(practiceData.filename_png)
                    })

        })
        describe('Verify Modal window in the webpage',()=>{


                    beforeEach(() => {
                        practObj.openURL()
                    })

                    it('Should verify confirm modal', () => {
                        practObj.enterandverifyModalText(practiceData.Textfieldname)
                        practObj.clickconfirmButton(practiceData.ConfirmModalMessage)
                        
                    })

                    it('Should verify alert modal', () => {
                        practObj.enterandverifyModalText(practiceData.Textfieldname)
                        practObj.clickalertButton(practiceData.AlertModalMessage)
                        
                    })

        })

        describe('Verify file contents from text file',()=>{

                    beforeEach(() => {
                        practObj.openURL()
                    })
                    it('Should verify the file contents of text file', () => {
                        cy.task('readFile',practiceData.alertFilePath).then(filecontent=>{
                        expect(filecontent).to.not.be.empty
                        expect(filecontent).to.contain(practiceData.textFilecontents)
                        //alert(practiceData.textFilecontents)
                        //cy.VerifyAlertMessage(practiceData.textFilecontents)
                        //cy.reload(true)
                        })
                    })

        })

        describe('Verify Hide and show button in the webpage',()=>{

                        beforeEach(() => {
                            practObj.openURL()
                        })
                        it('Verify Hide button', () => {
                            practObj.clickandverifyhideButton()
                        })

                        it('Verify Show button', () => {
                            practObj.clickandverifyshowButton()
                        })


        })
            
        describe('Verify Mousehover in the webpage',()=>{
                    beforeEach(() => {
                        practObj.openURL()
                    })
                    it('Verify Mouse Hover Top button', () => {
                        practObj.verifymouseHoverTopButton()
                    })

                    it('Verify Mouse Hover Reload button', () => {
                        practObj.verifymouseHoverReloadButton()
                    })


        })   
            
        describe('Verify Iframe in the webpage',()=>{

                    beforeEach(() => {
                        practObj.openURL()
                    })
                    it('Verify Iframe presence in the page', () => {
                        practObj.getandverifyIframeElements(practiceData.IframeText,"Verify")
                    })

                    it('Verify Iframe presence and interact with the page', () => {
                        practObj.getandverifyIframeElements(practiceData.IframeemailId,"Interact")
                    })

                    it('Verify Iframe presence and interact inside in the page', () => {
                        practObj.getandverifyIframeElements(practiceData.Iframewindowtext,"Inside")
                    })

                    //it.skip('Should interact with elements interact outside the frame', () => {
                        //practObj.getandverifyIframeElements(practiceData.dropdownlistvalues[0],"Outside")
                    //})


        })   
            


           
    

            

        

        
        

   

/// <reference types="cypress"/>

describe('SmartDeposit', () => 
{
    it('Open SmartDeposit', () =>
    {
        cy.visit('http://localhost:5002/login')
        cy.wait(3000)
        cy.get("#UserName").clear().type("administrator")
        cy.get("#Password").clear().type("administrator")
        cy.get("#signInButton").click()
        cy.get("#ChooseAppdeposit").click()
        cy.wait(3000)
       
        
    })
    it('Testing picture uploading', () => {
        cy.fixture('Needlers 76950.pdf').then(fileContent => {
            cy.get("#UploadedFileBtn > mosaic-icon > .icon").click().attachFile({
                fileContent: fileContent.toString(),
                fileName: 'Needlers 76950.pdf',
                mimeType: 'application/pdf',
               

                
            });
        });
    });

})
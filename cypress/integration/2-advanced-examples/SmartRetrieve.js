/// <reference types="cypress"/>

describe('SmartRetrieve', () => 
{
    it('Open SmartRetrieve', () =>
    {
        cy.visit('http://localhost:5002/login')
        cy.wait(3000)
        cy.get("#UserName").clear().type("administrator")
        cy.get("#Password").clear().type("administrator")
        cy.get("#signInButton").click()
        cy.get("#ChooseAppretrieve").click()
        cy.wait(3000)
       
        
    })
})
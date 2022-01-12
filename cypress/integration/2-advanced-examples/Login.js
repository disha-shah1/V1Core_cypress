/// <reference types="cypress"/>

describe('Login', () => 
{
    it('Login_positive', () =>
    {
      cy.visit('http://localhost:5002/login')
      cy.wait(3000)
      cy.get("#UserName").clear().type("administrator")
      cy.get("#Password").clear().type("administrator")
      cy.get("#signInButton").click()
      cy.wait(5000)
      cy.get(".mc-btn__div").contains("Logged in as administrator").click()
      cy.wait(3000)
      cy.contains('Log out').click()
      cy.wait(3000)
      
    })
    it('Login_Negative', () =>
    {
      cy.visit('http://localhost:5002/login')
      cy.wait(3000)
      cy.get("#UserName").type("administrator1")
      cy.get("#Password").type("administrator")
      cy.get("#signInButton").click()
      
      
    })

  })
  
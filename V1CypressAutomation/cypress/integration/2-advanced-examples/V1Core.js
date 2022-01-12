/// <reference types="cypress"/>
import LoginPage from "../PageFiles/LoginPage";
import DepositPage from "../PageFiles/DepositPage";
import RetrievePage from "../PageFiles/RetrievePage";
import LogoutPage from "../PageFiles/LogoutPage";
//import cypress from "cypress";

describe('Login', () => 
{
   // const lp = new LoginPage()
   
  /* before(() => {
    const lp = new LoginPage()
        lp.login('administrator','administrator')
    
  }) */

  beforeEach('keep using the session', function () {
    
    cy.loginViaUISession(Cypress.env("username"), Cypress.env("password"))
    cy.visit('http://localhost:5002/portal')
  })

    /* it('Loginq', () =>
    {
        cy.loginViaUISession(Cypress.env("username"), Cypress.env("password"))
        cy.visit('http://localhost:5002/portal')
        //const lp = new LoginPage()
        //lp.login('administrator','administrator')
        //lp.submit()
        //return this
        
    }) */
    it('depost', () =>
    {
        const dp = new DepositPage()
        dp.SingleDeposit('abc')
        dp.MultiDeposit('abc')
        return this
    })
    it('Retrieve', () =>
    {
        const sr = new RetrievePage()
        sr.selectRetrieve()
        sr.QuickSearch('adm')
        //sr.try('abc','administrator')
        sr.AdvancedSearch('abc','administrator')
        sr.createSavedSearch('abcSearch')
        sr.updatesearch()
        sr.deleteSearch()
    }
    )

    after('logout', function() {
      // Steps which need to be executed after each of the tests which finished execution
      const lg = new LogoutPage()
      lg.logout()
    
    });
    

})
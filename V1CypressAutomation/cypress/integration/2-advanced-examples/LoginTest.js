/// <reference types="cypress"/>
import LoginPage from "../PageFiles/LoginPage";
import DepositPage from "../PageFiles/DepositPage";
import RetrievePage from "../PageFiles/RetrievePage";
//import cypress from "cypress";

describe('Login', () => 
{
   // const lp = new LoginPage()
   
  before(() => {
    const lp = new LoginPage()
        lp.login('administrator','administrator')
    
    //Cypress.Cookies.preserveOnce('session_id', 'remember_token')
    /* cypress.Cookies.defaults({
        preserve: ['v1','abc']
    }) */
    cy.visit('http://localhost:5002/login')
  })

  beforeEach('keep using the session', function () {
    //Cypress.Cookies.preserveOnce("V1_PortalCookie")
    Cypress.Cookies.defaults({
        preserve: ['V1_PortalCookie','abc']
    })
  })

    /* it('Loginq', () =>
    {
        const lp = new LoginPage()
        lp.login('administrator','administrator')
        //lp.submit()
        //return this
        
    }) */
    it('depost', () =>
    {
        const dp = new DepositPage()
        dp.SingleDeposit()
        //dp.MultiDeposit()
        return this
    })
    it('Retrieve', () =>
    {
        const sr = new RetrievePage()
        sr.selectRetrieve()
       // sr.QuickSearch('adm')
        //sr.AdvancedSearch('mon','administrator')
    }
    )

})
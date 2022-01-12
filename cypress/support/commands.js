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
import 'cypress-file-upload';


Cypress.Commands.add("loginViaUI", (username, password) => {
    cy.visit('http://localhost:5002/login')
      cy.wait(1000)
      cy.get("#UserName").clear().type(username)
      cy.get("#Password").clear().type(password)
      cy.get("#signInButton").click()
      cy.wait(3000)
     /*  cy.get(".mc-btn__div").contains("Logged in as administrator").click()
      cy.wait(3000)
      cy.contains('Log out').click()
      cy.wait(3000) */
})

Cypress.Commands.add("loginViaAPI", (uname, pwd) => {
    cy.request({
        method: "POST",
        url: Cypress("baseUrl") + "/login",
        body: {
            username: uname,
            password: pwd
        }
    }).then(res => {
        expect(res.status).to.eq(200)
        window.localStorage.setItem("token", JSON.stringify(res.body))
    })
})

Cypress.Commands.add("loginViaUISession", (username, password) => {
    cy.session([username, password], () => {
        cy.visit('http://localhost:5002/login')
      cy.wait(3000)
      cy.get("#UserName").clear().type(username)
      cy.get("#Password").clear().type(password)
      cy.get("#signInButton").click()
      cy.wait(5000)
      /* cy.get(".mc-btn__div").contains("Logged in as administrator").click()
      cy.wait(3000)
      cy.contains('Log out').click()
      cy.wait(3000) */
    },
        {
            validate() {
                cy.visit("http://localhost:5002/portal")
               //cy.get("#home").should("be.enabled")
            }
        }
    )
})

Cypress.Commands.add("loginViaAPISession", (uname, pwd) => {
    cy.session([uname, pwd], () => {
        cy.request({
            method: "POST",
            url: Cypress.env("apiserver") + "/login",
            body: {
                username: uname,
                password: pwd
            }
        }).then(res => {
            expect(res.status).to.eq(200)
            window.localStorage.setItem("token", JSON.stringify(res.body))
        })
    },
        {
            validate() {
                cy.visit("/home")
                cy.get("#home").should("be.enabled")
            }
        }
    )

})

// Access element whose parent is hidden
Cypress.Commands.add('isVisible', {
    prevSubject: true
  }, (subject) => {
    const isVisible = (elem) => !!(
      elem.offsetWidth ||
      elem.offsetHeight ||
      elem.getClientRects().length
    )
    expect(isVisible(subject[0])).to.be.true
  })

  Cypress.Commands.add('Logout', function() {
    cy.contains('Logged in as ').click()
        cy.contains('Log out').click()
  })
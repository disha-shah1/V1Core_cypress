require('cypress-plugin-tab');
require('cypress-xpath')
class RetrievePage
{

    selectRetrieve()
    {
       cy.wait(1000)
       cy.visit('http://localhost:5002/retrieve')
       cy.wait(3000)
       /* cy.get('body > mosaic-page > div > mosaic-container > a > mosaic-app-name').click()
       cy.wait(500)
       cy.get('#ChooseAppretrieve').click() */
      
    }
  
    QuickSearch(QuickSearchValue)
    {
       
       cy.xpath('//*[@id="srch-term-input"]').click().should('be.visible').type(QuickSearchValue, { force: true })
       cy.wait(5000)
      // cy.tab().click()
       cy.get('#btnPerformSearch > button').click({force: true})
       cy.wait(3000)
       cy.go('back')
    }
    try(){
      cy.get('#retrieveTableSelect').select('abc')
      cy.get('#searchValue0').type('admini')
      cy.wait(1000)
      //cy.get('#btnSaveSearch\ btnSaveSearch\  > button > div.mc-btn__div.ng-binding').click()
      cy.xpath('//*[@id="btnSaveSearch btnSaveSearch "]/button').click()
    }

    AdvancedSearch(DocType,SearchValue)
    {
        //cy.get('#btnRetrieveHome').click()
      cy.get('#retrieveTableSelect').select(DocType)
       cy.get('#searchValue0').type(SearchValue)
       cy.wait(1000)
       //cy.get('#btnShowResults\ btnShowResults\  > button > div').click()
       cy.contains('Show results').should('be.visible').click()
    }
    createSavedSearch(searchName)
    {
       cy.wait(1000)
      //cy.get('#btnSaveSearch\ btnSaveSearch\  > .mc-btn__buttonA').click()
      cy.contains('Save search').click()
       cy.get('#searchName').type(searchName)
       cy.get('#autoRunSearch').check()
       //cy.contains('Save').click()
       cy.get('body > div.mc-dialog.mc-dialog-slide.modal.ng-isolate-scope.in > div > div > div > mosaic-button-group > mosaic-button:nth-child(2) > button').click()
       cy.contains('Refine search').click()
       //cy.get('.product').should('have.text', 'Tutorialspoint');
       cy.get('#savedSearches > mosaic-table > table > tbody > tr > td > a > span.to-the-left.retrievelist.ng-binding').should('have.text', ' abcSearch');
       
    }

    updatesearch()
    {
      cy.wait(500)
      cy.get('#savedSearches > mosaic-table > table > tbody > tr > td > div > mosaic-button:nth-child(2)').click()
      cy.wait(100)
      cy.xpath('//*[@id="btnSaveSearch btnSaveSearch "]/button').click()
    
      //cy.get('h1.sr-only.ng-binding').invoke('display','block')
      //cy.contains('Save search').should('be.visible')
      //cy.contains('Save search').click({force: true})
     //cy.get('#btnSaveSearch\ btnSaveSearch\  > .mc-btn__button > .mc-btn__icon > .ng-scope > .icon').click({force: true})
      cy.wait(500)
      cy.get('body > div.mc-dialog.mc-dialog-slide.modal.ng-isolate-scope.in > div > div > div > mosaic-button-group > mosaic-button:nth-child(2) > button').click()

    }
    deleteSearch()
    {
       cy.get('#savedSearches > mosaic-table > table > tbody > tr > td > div > mosaic-button:nth-child(3) > button').click()
       cy.xpath('//button[contains(text(),"OK")]').click()
       //cy.contains('OK').click()
    }
    


}
export default RetrievePage

//module.exports = new RetrievePage();
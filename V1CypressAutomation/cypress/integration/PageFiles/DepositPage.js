class DepositPage
{

    SingleDeposit(docType)
    {
        cy.get("#ChooseAppdeposit").click()
        cy.wait(5000)
        cy.get("canvas")
        const imgfile = '75140.pdf';
        cy.get("#selectDocumentComponent > div").invoke('attr','type','file').attachFile(imgfile,{subjectType: 'drag-n-drop'})
       
        cy.get('#depositTableSelect').select(docType)
        cy.wait(18000)
        cy.get('#btnDepositDocument').click({force: true})
        //cy.get('body > mosaic-page > div > mosaic-container > a > mosaic-app-name').click()
        
    }


    /* SingleDeposit1(docType)
    {
        cy.get("#ChooseAppdeposit").click()
        cy.wait(5000)
        const imgfile = '75140.pdf';
        cy.get("#selectDocumentComponent > div").invoke('attr','type','file').attachFile(imgfile,{subjectType: 'drag-n-drop'}).as('logo')
       
        .then(function(el){
            return Cypress.Blob.base64StringToBlob(this.logo, 'image/png')
      .then(blob => 
        {
            el[0].files[0] = blob  
            el[0].dispatchEvent(new Event('change', {bubbles: true}))
        }
       

        cy.get('#depositTableSelect').select(docType)
        cy.wait(18000)
        cy.get('#btnDepositDocument').click({force: true})
        //cy.get('body > mosaic-page > div > mosaic-container > a > mosaic-app-name').click()
        
    }
} */

    MultiDeposit(docType)
    {
        
        //cy.get("#ChooseAppdeposit").click()
        cy.wait(5000)
        const imgfile = '75140.pdf';
        const imgfile1 = 'Needlers76950.pdf'
        cy.get('#depositTableSelect').select(docType)
        cy.get("#selectDocumentComponent > div").invoke('attr','type','file').attachFile(imgfile,{subjectType: 'drag-n-drop'})
        
        cy.get("#selectDocumentComponent > div").invoke('attr','type','file').attachFile(imgfile1,{subjectType: 'drag-n-drop'})
        //cy.get("#selectDocumentComponent > div").invoke('attr','type','file').attachFile(imgfile,imgfile1,{subjectType: 'drag-n-drop'})
        
      
        cy.wait(18000)
        
        cy.get('#btnDepositAllDocument').click()
        cy.wait(5000)
    }
    /* {
        cy.get("#ChooseAppdeposit").click()
        const imgfile = 'Needlers76950.pdf';
        cy.get("#UploadedFileBtn").invoke('attr','type','file')
        //cy.get("#UploadedFileBtn").attachFile(imgfile);
        cy.get("#UploadedFileBtn").attachFile(imgfile,{subjectType: 'drag-n-drop'})
        cy.get('#depositTableSelect').select('test123')
        cy.wait(5000)
        cy.get('#btnDepositDocument').click()
         return this
    } */



}
export default DepositPage
//module.exports = new DepositPage();
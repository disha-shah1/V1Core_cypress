class LoginPage

{
    login(uname,pwd)
    {
        cy.visit('http://localhost:5002/login')
       const a = cy.get("#UserName").clear().type(uname)
       const b = cy.get("#Password").clear().type(pwd)
       const s = cy.get("#signInButton").click()
        return this
    }
    /* submit()
    {
        
        return this
    } */
    /* SelectApp(AppName)
    {
        cy.get(‘[data-testid^=”list-item-”]’)
        const app = cy.get(‘[data-testid^=”dropdown-”]’)
        const homeclick = cy.get('body > mosaic-page > mosaic-container.mc-container--top.mc-container--fixed.mc-container--navbar.mc-container > a').click()
        const select = cy.get("#dropdown-ajsEFHc9 > div.mc-btn__icon.mc-btn__icon--toggle > svg > use").select(AppName)
        return this
    } */
    
}
export default LoginPage

//module.exports = new LoginPage();
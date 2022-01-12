import LoginPage from "./LoginPage"

class LogoutPage{


    logout()
    {
        cy.contains('Logged in as ').click()
        cy.contains('Log out').click()
    }
}
export default LogoutPage
export class LoginPage{
    loginPage_username = '#uname'
    loginPage_password = '#pwd'
    loginPage_submit = '[type="submit"]'
    navigate(url){
        cy.visit(url)
    }
    enterUsername(username){
        cy.get(this.loginPage_username).type('test')

    }
    enterPassword(password){
        cy.get(this.loginPage_password).type('test')
    }
    clickLogin(){
        cy.get(this.loginPage_submit).click()
    }
}
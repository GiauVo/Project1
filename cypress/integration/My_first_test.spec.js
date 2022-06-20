//<reference types="cypress"/>
describe('First Test <home>', () => { //home is suite name 
    it('google test', function(){
        cy.visit("https://google.com")
        cy.get('.gLFyf').type('Automation Step by Step{enter}')
        cy.wait(6000)
        cy.contains('Video').click()
    })

})

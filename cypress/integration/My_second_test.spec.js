// <reference types="cypress"/>
describe('Second Test <smoke>', () => { //two suites smoke
    it('google test <smoke>', function(){
        cy.visit("https://example.cypress.io")
        cy.contains('get').click()
        cy.get('#query-btn', {timeout: 6000})
          .should('contain','Button')
          .should('have.class','query-btn')
          .should('be.visible')
          .should('be.enabled')
        
          cy.get('#query-btn').invoke('attr','id')
             .should('equal','query-btn')

          cy.get('#query-btn')
            .should('contain','Button')
            .and('have.class','query-btn')

        //Explicit Assertions
        expect(true).to.be.true
        var name = 'test1'
        expect(name).to.be.equal('test')

        assert.equal(4,4,'Not equal')
        assert.strictEqual(4,'4','Not equal')

    })
})

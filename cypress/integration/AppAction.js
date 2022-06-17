it('Login app action', function () {
    cy.visit('http://localhost:3000/')
    cy.window().then(({ app }) => {
        app.loggedIn.active = true
    }
    )
})
describe('profile project navigation', () => {
  it('moves between the home and about pages', () => {
    cy.visit('/')

    cy.contains('h1', /build each product area as its own feature/i).should('be.visible')

    cy.contains('a', /view example feature/i).click()

    cy.location('pathname').should('eq', '/about')
    cy.contains('h1', /about feature/i).should('be.visible')

    cy.contains('a', /back home/i).click()

    cy.location('pathname').should('eq', '/')
    cy.contains('h1', /build each product area as its own feature/i).should('be.visible')
  })
})

describe('profile project navigation', () => {
  it('moves between the home and about pages', () => {
    cy.visit('/');

    cy.contains('Conhecer nossa liderança')
      .click();

    cy.url().should('include', '/about');

    cy.contains('About feature')
      .should('be.visible');

    cy.contains('Back Home')
      .click();

    cy.url().should('eq', Cypress.config('baseUrl') + '/');

    cy.contains('Conheça nossa liderança')
      .should('be.visible');
  });
});

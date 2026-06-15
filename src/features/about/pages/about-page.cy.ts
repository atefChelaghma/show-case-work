describe('About Page', () => {
    beforeEach(() => {
        cy.visit('/about');
    });

    it('shows page content', () => {
        cy.contains('About feature').should('be.visible');
    });

    it('links back home', () => {
        cy.contains('Back Home').click();
        cy.url().should('eq', `${Cypress.config('baseUrl')}/`);
    });
});

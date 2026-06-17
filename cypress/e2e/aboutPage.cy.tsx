describe('AboutPage', () => {
     beforeEach(() => {
        cy.visit('/about');
    });
    it('navigates home', () => {
        

        cy.contains('Back Home').click();

        cy.contains('Conheça nossa liderança')
  .should('be.visible');
    });
});
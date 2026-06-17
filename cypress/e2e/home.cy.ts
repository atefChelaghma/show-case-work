describe('Home Page', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    it('renders hero content', () => {
        cy.contains('h1', 'Conheça nossa liderança')
            .should('be.visible');

        cy.contains(
            'Os líderes da Meta guiam nossa empresa à medida que a realidade mista e a IA evoluem'
        ).should('be.visible');
    });

    it('renders hero image', () => {
        cy.get('img[alt="Person image"]')
            .should('be.visible')
            .and('have.attr', 'src')
            .and('include', 'pexels');
    });

    it('renders action buttons', () => {
        cy.contains('Conhecer nossa liderança')
            .should('be.visible');

        cy.contains('button', 'Contact us')
            .should('be.visible');
    });

    it('navigates to about page', () => {
        cy.contains('Conhecer nossa liderança')
            .click();

        cy.url().should('include', '/about');

        cy.contains('About feature')
            .should('be.visible');
    });

    it('allows clicking contact us button', () => {
        cy.contains('button', 'Contact us')
            .click();
    });
});


import { HeroSection } from './HeroSection';
import { Button } from '@mui/material';
import { mount } from 'cypress/react';

describe('HeroSection', () => {
    const props = {
        title: 'Welcome to Vivo Travel',
        description: 'Find the best travel deals.',
        image: {
            src: '/images/hero.jpg',
            alt: 'Travel hero image',
        },
    };

    it('renders title and description', () => {
        mount(<HeroSection {...props} />);

        cy.contains('h1', props.title).should('be.visible');
        cy.contains(props.description).should('be.visible');
    });

    it('renders image with correct attributes', () => {
        mount(<HeroSection {...props} />);

        cy.get(`img[alt="${props.image.alt}"]`)
            .should('be.visible')
            .and('have.attr', 'src')
            .and('include', props.image.src);
    });

    it('renders actions when provided', () => {
        const onClick = cy.stub().as('buttonClick');

        mount(
            <HeroSection
                {...props}
                actions={<Button onClick={onClick}>Learn More</Button>}
            />,
        );

        cy.contains('Learn More').should('be.visible').click();

        cy.get('@buttonClick').should('have.been.calledOnce');
    });

    it('does not render actions when actions prop is not provided', () => {
        mount(<HeroSection {...props} />);

        cy.contains('Learn More').should('not.exist');
    });
});

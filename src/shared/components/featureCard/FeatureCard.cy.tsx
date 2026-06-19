import { mount } from 'cypress/react';
import { FeatureCard } from './FeatureCard';

describe('FeatureCard Component', () => {
    const baseProps = {
        title: 'Ultra-narrow bezels',
        mainImage: '/images/card-image.jpg',
        imageTitle: 'Live from space album cover',
    };

    it('renders core card content', () => {
        mount(<FeatureCard {...baseProps} />);

        cy.contains('h3', baseProps.title).should('be.visible');

        cy.get(`img[src="${baseProps.mainImage}"]`)
            .should('be.visible')
            .and('have.attr', 'title', baseProps.imageTitle);
    });

    it('renders category when provided', () => {
        mount(<FeatureCard {...baseProps} category="Hardware" />);

        cy.contains('span', 'Hardware').should('be.visible');
    });

    it('does not render category when omitted', () => {
        mount(<FeatureCard {...baseProps} />);

        cy.contains('Hardware').should('not.exist');
    });

    it('does not render avatars when the array is empty', () => {
        mount(<FeatureCard {...baseProps} avatars={[]} />);

        cy.get('img[alt="Remy Sharp"]').should('not.exist');
    });

    it('does not render avatars when the prop is completely omitted', () => {
        mount(<FeatureCard {...baseProps} />);

        cy.get('img[alt="Remy Sharp"]').should('not.exist');
    });
});

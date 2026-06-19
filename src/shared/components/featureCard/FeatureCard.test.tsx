import { cleanup, screen } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';

import { renderWithProviders } from '../../../test/render';
import { FeatureCard } from './FeatureCard';

describe('FeatureCard', () => {
    afterEach(() => {
        cleanup();
    });

    const baseProps = {
        title: 'Ultra-narrow bezels',
        mainImage: '/card-image.jpg',
        imageTitle: 'Live from space album cover',
    };

    const mockAvatars = [
        { id: 'usr_1', alt: 'Remy Sharp', src: '/avatar1.jpg' },
        { id: 'usr_2', alt: 'Cindy Baker', src: '/avatar2.jpg' },
    ];

    it('renders core card content', () => {
        renderWithProviders(<FeatureCard {...baseProps} />);

        expect(
            screen.getByRole('heading', {
                name: /ultra-narrow bezels/i,
            }),
        ).toBeInTheDocument();

        const image = screen.getByRole('img', {
            name: /live from space album cover/i,
        });
        expect(image).toBeInTheDocument();
        expect(image).toHaveAttribute('src', '/card-image.jpg');
    });

    it('renders category when provided', () => {
        renderWithProviders(<FeatureCard {...baseProps} category="Hardware" />);

        expect(screen.getByText('Hardware')).toBeInTheDocument();
    });

    it('does not render category when omitted', () => {
        renderWithProviders(<FeatureCard {...baseProps} />);

        expect(screen.queryByText('Hardware')).not.toBeInTheDocument();
    });

    it('renders avatars when provided', () => {
        renderWithProviders(
            <FeatureCard {...baseProps} avatars={mockAvatars} />,
        );

        expect(screen.getByAltText('Remy Sharp')).toBeInTheDocument();
        expect(screen.getByAltText('Cindy Baker')).toBeInTheDocument();
    });

    it('does not render avatars when array is empty', () => {
        renderWithProviders(<FeatureCard {...baseProps} avatars={[]} />);

        expect(screen.queryByAltText('Remy Sharp')).not.toBeInTheDocument();
    });

    it('does not render avatars when omitted completely', () => {
        renderWithProviders(<FeatureCard {...baseProps} />);

        expect(screen.queryByAltText('Remy Sharp')).not.toBeInTheDocument();
    });
});

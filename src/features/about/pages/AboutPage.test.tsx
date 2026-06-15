import { screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { renderWithProviders } from '../../../test/render';
import { AboutPage } from './AboutPage';

describe('AboutPage', () => {
    it('renders its route-level content', () => {
        renderWithProviders(<AboutPage />, { route: '/about' });

        expect(
            screen.getByRole('heading', { name: /about feature/i }),
        ).toBeInTheDocument();
        expect(
            screen.getByRole('link', { name: /back home/i }),
        ).toHaveAttribute('href', '/');
    });
});

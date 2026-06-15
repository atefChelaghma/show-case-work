import { screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { renderWithProviders } from '../../../test/render';
import { HomePage } from './HomePage';

describe('HomePage', () => {
    it('shows the feature-based architecture guidance', () => {
        renderWithProviders(<HomePage />);

        expect(
            screen.getByText('Conhecer nossa liderança'),
        ).toBeInTheDocument();
        expect(
            screen.getByRole('img', { name: /Person image/i }),
        ).toBeInTheDocument();
    });
});

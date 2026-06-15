import { screen } from '@testing-library/react';
import { Route, Routes } from 'react-router';
import { describe, expect, it } from 'vitest';
import { renderWithProviders } from '../../test/render';
import { AppLayout } from './AppLayout';

describe('AppLayout', () => {
    it('renders shared navigation and nested page content', () => {
        renderWithProviders(
            <Routes>
                <Route element={<AppLayout />}>
                    <Route index element={<h1>Nested page</h1>} />
                </Route>
            </Routes>,
        );

        expect(screen.getByText('Profile Project')).toBeInTheDocument();
        expect(screen.getByRole('link', { name: /home/i })).toHaveAttribute(
            'href',
            '/',
        );
        expect(screen.getByRole('link', { name: /about/i })).toHaveAttribute(
            'href',
            '/about',
        );
        expect(
            screen.getByRole('heading', { name: /nested page/i }),
        ).toBeInTheDocument();
    });
});

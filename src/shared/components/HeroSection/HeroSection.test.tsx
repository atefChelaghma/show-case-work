import { cleanup, screen } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';

import { renderWithProviders } from '../../../test/render';
import { HeroSection } from './HeroSection';
import { Button } from '@mui/material';
import { Link } from 'react-router';
import { ROUTES } from '../../../app/router/routes';

describe('HeroSection', () => {
    afterEach(() => {
        cleanup();
    });
    const props = {
        title: 'Meet our leadership',
        description: 'Our leadership team helps drive innovation and growth.',
        image: {
            src: '/hero-image.jpg',
            alt: 'Leadership team',
        },
    };

    it('renders hero content', () => {
        renderWithProviders(<HeroSection {...props} />);

        expect(
            screen.getByRole('heading', {
                name: /meet our leadership/i,
            }),
        ).toBeInTheDocument();

        expect(
            screen.getByText(
                /our leadership team helps drive innovation and growth/i,
            ),
        ).toBeInTheDocument();

        expect(
            screen.getByRole('img', {
                name: /leadership team/i,
            }),
        ).toBeInTheDocument();
    });

    it('renders primary action', () => {
        renderWithProviders(
            <HeroSection
                {...props}
                actions={
                    <Button
                        component={Link}
                        to={ROUTES.about.path}
                        variant="contained"
                    >
                        learn more
                    </Button>
                }
            />,
        );

        expect(screen.getByText('learn more')).toBeInTheDocument();
    });

    it('renders secondary action', () => {
        renderWithProviders(
            <HeroSection
                {...props}
                actions={
                    <Button
                        component="button"
                        variant="contained"
                        onClick={vi.fn()}
                    >
                        Contact us
                    </Button>
                }
            />,
        );

        expect(
            screen.getByRole('button', {
                name: /contact us/i,
            }),
        ).toBeInTheDocument();
    });

    it('renders both actions', () => {
        renderWithProviders(
            <HeroSection
                {...props}
                actions={
                    <>
                        <Button
                            component="button"
                            variant="contained"
                            onClick={vi.fn()}
                        >
                            Learn more
                        </Button>

                        <Button
                            component="button"
                            variant="contained"
                            onClick={vi.fn()}
                        >
                            Contact us
                        </Button>
                    </>
                }
            />,
        );

        expect(
            screen.getByRole('button', {
                name: /learn more/i,
            }),
        ).toBeInTheDocument();

        expect(screen.getByText('Contact us')).toBeInTheDocument();
    });

    it('does not render actions when not provided', () => {
        renderWithProviders(<HeroSection {...props} />);

        expect(screen.queryAllByRole('button')).toHaveLength(0);
    });
});

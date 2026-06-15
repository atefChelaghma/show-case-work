import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { render, type RenderOptions } from '@testing-library/react';
import type { ReactElement } from 'react';
import { MemoryRouter } from 'react-router';
import { theme } from '../shared/theme/theme';

type AppRenderOptions = RenderOptions & {
    route?: string;
};

export function renderWithProviders(
    ui: ReactElement,
    { route = '/', ...renderOptions }: AppRenderOptions = {},
) {
    return render(
        <MemoryRouter initialEntries={[route]}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                {ui}
            </ThemeProvider>
        </MemoryRouter>,
        renderOptions,
    );
}

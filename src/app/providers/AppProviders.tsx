import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { RouterProvider } from 'react-router';
import { router } from '../router/router';
import { theme } from '../../shared/theme/theme';
import { ReduxProvider } from './ReduxProvider';

export function AppProviders() {
    return (
        <ThemeProvider theme={theme}>
            <ReduxProvider>
                <CssBaseline />
                <RouterProvider router={router} />
            </ReduxProvider>
        </ThemeProvider>
    );
}

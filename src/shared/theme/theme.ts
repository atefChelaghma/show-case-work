import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#2563eb',
        },
        secondary: {
            main: '#0f766e',
        },
        background: {
            default: '#f8fafc',
            paper: '#ffffff',
        },
        text: {
            primary: '#111827',
            secondary: '#4b5563',
        },
    },
    shape: {
        borderRadius: 8,
    },
    typography: {
        fontFamily:
            'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
        h1: {
            fontWeight: 700,
            letterSpacing: 0,
        },
        h2: {
            fontWeight: 700,
            letterSpacing: 0,
        },
        button: {
            fontWeight: 700,
            textTransform: 'none',
        },
    },
    components: {
        MuiButton: {
            defaultProps: {
                disableElevation: true,
            },
            styleOverrides: {
                root: {
                    borderRadius: 8,
                },
            },
        },
        MuiPaper: {
            styleOverrides: {
                root: {
                    backgroundImage: 'none',
                },
            },
        },
    },
});

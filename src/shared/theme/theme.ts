import { createTheme } from '@mui/material/styles';
import { CSSProperties } from 'react';

declare module '@mui/material/styles' {
    interface Mixins {
        flexColumnCenter: CSSProperties;
        flexRowCenter: CSSProperties;
    }
}

export const theme = createTheme({
    palette: {
        mode: 'light',
        primary: { main: '#2563eb' },
        secondary: { main: '#0f766e' },
        background: { default: '#f8fafc', paper: '#ffffff' },
        text: { primary: '#111827', secondary: '#4b5563' },
    },
    shape: {
        borderRadius: 8,
    },
    typography: {
        fontFamily: 'Inter, system-ui, -apple-system, sans-serif',

        h1: {
            fontWeight: 800,
            lineHeight: 1.1,
            fontSize: '3.5rem',
            letterSpacing: '-0.02em',
            '@media (max-width:600px)': {
                fontSize: '1rem',
            },
        },
        h2: {
            fontWeight: 700,
            lineHeight: 1.2,
            fontSize: '2.5rem',
            letterSpacing: '-0.01em',
            '@media (max-width:600px)': {
                fontSize: '.8rem',
            },
        },
        h3: {
            fontWeight: 700,
            lineHeight: 1.25,
            fontSize: '2rem',
        },
        h4: {
            fontWeight: 600,
            lineHeight: 1.3,
            fontSize: '1.5rem',
        },
        h5: {
            fontWeight: 600,
            lineHeight: 1.4,
            fontSize: '1.25rem',
        },
        h6: {
            fontWeight: 600,
            lineHeight: 1.4,
            fontSize: '1rem',
        },
        subtitle1: {
            fontWeight: 400,
            lineHeight: 1.6,
            fontSize: '1.25rem',
            color: '#4b5563',
            '@media (max-width:600px)': {
                fontSize: '.8rem',
            },
        },
        subtitle2: {
            fontWeight: 500,
            lineHeight: 1.5,
            fontSize: '0.875rem',
        },
        body1: {
            fontWeight: 400,
            lineHeight: 1.6,
            fontSize: '1rem',
        },

        body2: {
            fontWeight: 400,
            lineHeight: 1.5,
            fontSize: '0.875rem',
        },

        button: {
            fontWeight: 600,
            textTransform: 'none',
        },
    },
    components: {
        MuiButton: {
            defaultProps: { disableElevation: true },
            styleOverrides: { root: { borderRadius: 8 } },
        },
        MuiPaper: {
            styleOverrides: { root: { backgroundImage: 'none' } },
        },
    },
    mixins: {
        flexColumnCenter: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-between',
        },
        flexRowCenter: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
        },
    },
});

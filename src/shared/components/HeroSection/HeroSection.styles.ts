import { SxProps, Theme } from '@mui/material';

export const styles: Record<string, SxProps<Theme>> = {
    root: {
        width: '100%',
        py: {
            xs: 6,
            md: 10,
            lg: 14,
        },
    },

    container: {
        display: 'flex',

        flexDirection: {
            xs: 'column',
            md: 'row',
        },

        alignItems: 'center',

        justifyContent: 'space-between',

        gap: {
            xs: 5,
            md: 8,
            lg: 12,
        },
    },

    content: {
        flex: 1,

        maxWidth: {
            md: 560,
        },

        order: {
            xs: 1,
            md: 1,
        },
    },

    title: {
        mb: 3,

        fontWeight: 600,

        lineHeight: 1.1,

        fontSize: {
            xs: '2.25rem',
            sm: '2.75rem',
            md: '3.5rem',
        },
    },

    description: {
        mb: 4,

        color: 'text.secondary',

        lineHeight: 1.6,

        fontSize: {
            xs: '1.1rem',
            md: '1.25rem',
        },
    },

    actions: {
        display: 'flex',

        flexWrap: 'wrap',

        gap: 2,
    },

    imageWrapper: {
        flex: 1,

        width: '100%',

        display: 'flex',

        justifyContent: 'center',

        order: {
            xs: 2,
            md: 2,
        },
    },

    image: {
        width: '100%',
        height: '500px',

        maxWidth: {
            xs: 450,
            md: 650,
        },

        borderRadius: '32px',

        objectFit: 'cover',

        display: 'block',
    },
};

import { styled, Box, Typography } from '@mui/material';
import { TypographyProps } from '@mui/material/Typography';

export const HeroRoot = styled('section')(({ theme }) => ({
    width: '100%',
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(6),

    [theme.breakpoints.up('md')]: {
        paddingTop: theme.spacing(10),
        paddingBottom: theme.spacing(10),
    },
    [theme.breakpoints.up('lg')]: {
        paddingTop: theme.spacing(14),
        paddingBottom: theme.spacing(14),
    },
}));

export const HeroLayout = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: theme.spacing(5),

    [theme.breakpoints.up('md')]: {
        flexDirection: 'row',
        gap: theme.spacing(8),
    },
    [theme.breakpoints.up('lg')]: {
        gap: theme.spacing(12),
    },
}));

export const HeroContent = styled(Box)(({ theme }) => ({
    flex: 1,
    order: 1,
    [theme.breakpoints.up('md')]: {
        maxWidth: 560,
    },
}));

export const HeroTitle = styled(Typography)<TypographyProps>(({ theme }) => ({
    marginBottom: theme.spacing(3),
    fontWeight: 600,
    lineHeight: 1.1,
    fontSize: '2.25rem',

    [theme.breakpoints.up('sm')]: {
        fontSize: '2.75rem',
    },
    [theme.breakpoints.up('md')]: {
        fontSize: '3.5rem',
    },
}));

export const HeroDescription = styled(Typography)(({ theme }) => ({
    marginBottom: theme.spacing(4),
    color: theme.palette.text.secondary,
    lineHeight: 1.6,
    fontSize: '1.1rem',

    [theme.breakpoints.up('md')]: {
        fontSize: '1.25rem',
    },
}));

export const HeroActions = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexWrap: 'wrap',
    gap: theme.spacing(2),
}));

export const HeroImageWrapper = styled(Box)(() => ({
    flex: 1,
    order: 2,
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
}));

export const HeroImage = styled('img')(({ theme }) => ({
    display: 'block',
    width: '100%',
    height: '500px',
    maxWidth: 450,
    objectFit: 'cover',
    borderRadius: '32px',

    [theme.breakpoints.up('md')]: {
        maxWidth: 650,
    },
}));

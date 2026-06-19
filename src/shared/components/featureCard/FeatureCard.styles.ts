import CardMedia, { CardMediaProps } from '@mui/material/CardMedia';
import Avatar, { AvatarProps } from '@mui/material/Avatar';
import Typography, { TypographyProps } from '@mui/material/Typography';
import { styled, Card, Box, Stack } from '@mui/material';

export const CardRootStyle = styled(Card)(() => ({
    display: 'flex',
    flexDirection: 'column',
    width: 'fit-content',
}));

export const CardImage = styled(CardMedia)<CardMediaProps>(() => ({
    width: '395px',
    height: '140px',
}));

export const AvatarStyled = styled(Avatar)<AvatarProps>(({ theme }) => ({
    border: `2px solid ${theme.palette.common.black || 'black'}`,
}));

export const ContentWrapper = styled(Box)(({ theme }) => ({
    padding: theme.spacing(1.5),
}));

export const CategoryText = styled(Typography)<TypographyProps>(() => ({
    textTransform: 'uppercase',
    fontWeight: 600,
}));

export const AvatarContainer = styled(Stack)(({ theme }) => ({
    marginTop: theme.spacing(1),
}));

import RouteIcon from '@mui/icons-material/Route';
import { Button, Paper, Stack, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router';
import { ROUTES } from '../../../app/router/routes';

export function AboutPage() {
    return (
        <Paper
            elevation={0}
            sx={{ border: 1, borderColor: 'divider', p: { xs: 3, md: 5 } }}
        >
            <Stack spacing={2.5}>
                <RouteIcon color="primary" fontSize="large" />
                <Typography component="h1" variant="h3">
                    About feature
                </Typography>
                <Typography color="text.secondary" variant="h6">
                    This feature owns its page under src/features/about. If it
                    grows, add local folders beside pages, like components,
                    hooks, api, and types.
                </Typography>
                <Button
                    component={RouterLink}
                    sx={{ alignSelf: 'flex-start' }}
                    to={ROUTES.home.path}
                    variant="contained"
                >
                    Back Home
                </Button>
            </Stack>
        </Paper>
    );
}

import { Button, Container, Paper, Stack, Typography } from '@mui/material';
import {
    isRouteErrorResponse,
    Link as RouterLink,
    useRouteError,
} from 'react-router';
import { ROUTES } from '../../../app/router/routes';

export function NotFoundPage() {
    const error = useRouteError();
    const status = isRouteErrorResponse(error) ? error.status : 404;

    return (
        <Container maxWidth="sm" sx={{ py: 8 }}>
            <Paper
                elevation={0}
                sx={{ border: 1, borderColor: 'divider', p: { xs: 3, md: 5 } }}
            >
                <Stack spacing={2.5}>
                    <Typography
                        color="primary"
                        component="p"
                        variant="overline"
                    >
                        Error {status}
                    </Typography>
                    <Typography component="h1" variant="h4">
                        Page not found
                    </Typography>
                    <Typography color="text.secondary">
                        The route you opened does not exist in this app.
                    </Typography>
                    <Button
                        component={RouterLink}
                        sx={{ alignSelf: 'flex-start' }}
                        to={ROUTES.home.path}
                        variant="contained"
                    >
                        Go Home
                    </Button>
                </Stack>
            </Paper>
        </Container>
    );
}

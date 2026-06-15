import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import {
    AppBar,
    Box,
    Button,
    Chip,
    Container,
    Stack,
    Toolbar,
    Typography,
} from '@mui/material';
import { NavLink, Outlet } from 'react-router';
import { navigationRoutes } from '../../app/router/routes';

export function AppLayout() {
    return (
        <Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
            <AppBar
                color="transparent"
                elevation={0}
                position="static"
                sx={{
                    borderBottom: 1,
                    borderColor: 'divider',
                    bgcolor: 'background.paper',
                }}
            >
                <Toolbar sx={{ gap: 2 }}>
                    <AutoAwesomeIcon color="primary" />
                    <Typography
                        component="div"
                        sx={{ flexGrow: 1, fontWeight: 700 }}
                    >
                        Profile Project
                    </Typography>
                    <Stack
                        component="nav"
                        direction="row"
                        spacing={1}
                        sx={{ display: { xs: 'none', sm: 'flex' } }}
                    >
                        {navigationRoutes.map((route) => (
                            <Button
                                component={NavLink}
                                key={route.path}
                                sx={{
                                    '&.active': {
                                        bgcolor: 'primary.main',
                                        color: 'primary.contrastText',
                                    },
                                }}
                                to={route.path}
                                variant="text"
                            >
                                {route.label}
                            </Button>
                        ))}
                    </Stack>
                    <Chip
                        color="primary"
                        label="Feature based"
                        size="small"
                        variant="outlined"
                    />
                </Toolbar>
            </AppBar>

            <Container
                component="main"
                maxWidth="lg"
                sx={{ py: { xs: 5, md: 8 } }}
            >
                <Outlet />
            </Container>
        </Box>
    );
}

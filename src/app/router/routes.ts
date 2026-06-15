export const ROUTES = {
    home: {
        label: 'Home',
        path: '/',
    },
    about: {
        label: 'About',
        path: '/about',
        segment: 'about',
    },
} as const;

export const navigationRoutes = [ROUTES.home, ROUTES.about] as const;

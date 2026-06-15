import { createBrowserRouter } from 'react-router';
import App from '../App';
import { AboutPage } from '../../features/about/pages/AboutPage';
import { HomePage } from '../../features/home/pages/HomePage';
import { NotFoundPage } from '../../features/system/pages/NotFoundPage';
import { ROUTES } from './routes';

export const router = createBrowserRouter([
    {
        path: ROUTES.home.path,
        element: <App />,
        errorElement: <NotFoundPage />,
        children: [
            {
                index: true,
                element: <HomePage />,
            },
            {
                path: ROUTES.about.segment,
                element: <AboutPage />,
            },
        ],
    },
]);

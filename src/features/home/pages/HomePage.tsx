import { Button } from '@mui/material';
import { Link as RouterLink } from 'react-router';
import { ROUTES } from '../../../app/router/routes';
import { HeroSection } from '../../../shared/components/HeroSection';

export function HomePage() {
    return (
        <HeroSection
            title="Conheça nossa liderança"
            description="Os líderes da Meta guiam nossa empresa à medida que a realidade mista e a IA evoluem, ajudando a criar a próxima etapa na evolução da conexão digital."
            image={{
                src: 'https://images.pexels.com/photos/18426834/pexels-photo-18426834.jpeg?_gl=1*1fxzd4c*_ga*Njc4NjAyMDk0LjE3ODE1NTQxNjc.*_ga_8JE65Q40S6*czE3ODE1NTQxNjYkbzEkZzEkdDE3ODE1NTQyMDQkajIyJGwwJGgw',
                alt: 'Person image',
            }}
            actions={
                <>
                    <Button
                        component={RouterLink}
                        to={ROUTES.about.path}
                        variant="contained"
                    >
                        Conhecer nossa liderança
                    </Button>
                    <Button
                        component="button"
                        variant="contained"
                        onClick={() => console.log('hell')}
                    >
                        Contact us
                    </Button>
                </>
            }
        />
    );
}

import {
    Box,
    Button,
    Container,
    CircularProgress,
    Typography,
} from '@mui/material';
import { Link as RouterLink } from 'react-router';
import { ROUTES } from '../../../app/router/routes';
import { HeroSection } from '../../../shared/components/heroSection';
import { FeatureCard } from '../../../shared/components/featureCard';
import { useGetCardsQuery } from '../api/cardsApi';

export function HomePage() {
    const { data: cards, isLoading, isError } = useGetCardsQuery();
    return (
        <>
            <HeroSection
                title="Conheça nossa liderança"
                description="Os líderes da Meta guiam nossa empresa à medida que a realidade mista e a IA evoluem..."
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

            <Container maxWidth="xl" sx={{ py: { xs: 6, md: 10 } }}>
                {isLoading && (
                    <Box>
                        <CircularProgress />
                    </Box>
                )}

                {isError && (
                    <Typography variant="h6" color="error">
                        Erro ao carregar os dados.
                    </Typography>
                )}

                {cards && (
                    <Box>
                        {cards.map((card) => (
                            <FeatureCard
                                key={card.id}
                                title={card.title}
                                category={card.category}
                                mainImage={card.mainImage}
                                imageTitle={card.imageTitle}
                                avatars={card.avatars}
                            />
                        ))}
                    </Box>
                )}
            </Container>
        </>
    );
}

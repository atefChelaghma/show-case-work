import { Box, Container, Typography } from '@mui/material';

import { styles } from './HeroSection.styles';
import { HeroSectionProps } from './HeroSection.types';

export const HeroSection = ({
    title,
    description,
    image,
    actions,
}: HeroSectionProps) => {
    return (
        <Box component="section" sx={styles.root}>
            <Container maxWidth="xl">
                <Box sx={styles.container}>
                    <Box sx={styles.content}>
                        <Typography component="h1" sx={styles.title}>
                            {title}
                        </Typography>

                        <Typography sx={styles.description}>
                            {description}
                        </Typography>

                        {actions && <Box sx={styles.actions}>{actions}</Box>}
                    </Box>

                    <Box sx={styles.imageWrapper}>
                        <Box
                            component="img"
                            src={image.src}
                            alt={image.alt}
                            sx={styles.image}
                        />
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

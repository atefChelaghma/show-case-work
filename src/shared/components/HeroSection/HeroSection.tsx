import { Container } from '@mui/material';
import { HeroSectionProps } from './HeroSection.types';
import {
    HeroRoot,
    HeroLayout,
    HeroContent,
    HeroTitle,
    HeroDescription,
    HeroActions,
    HeroImageWrapper,
    HeroImage,
} from './HeroSection.styles';

export const HeroSection = ({
    title,
    description,
    image,
    actions,
}: HeroSectionProps) => {
    return (
        <HeroRoot>
            <Container maxWidth="xl">
                <HeroLayout>
                    <HeroContent>
                        <HeroTitle component="h1">{title}</HeroTitle>

                        <HeroDescription>{description}</HeroDescription>

                        {actions && <HeroActions>{actions}</HeroActions>}
                    </HeroContent>

                    <HeroImageWrapper>
                        <HeroImage src={image.src} alt={image.alt} />
                    </HeroImageWrapper>
                </HeroLayout>
            </Container>
        </HeroRoot>
    );
};

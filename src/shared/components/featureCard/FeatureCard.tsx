import React from 'react';
import { Typography } from '@mui/material';
import {
    CardRootStyle,
    CardImage,
    AvatarStyled,
    ContentWrapper,
    CategoryText,
    AvatarContainer,
} from './FeatureCard.styles';
import { FeatureCardProps } from './index';

export const FeatureCard: React.FC<FeatureCardProps> = ({
    mainImage,
    imageTitle = 'Card cover image',
    category,
    title,
    avatars = [],
}) => {
    return (
        <CardRootStyle>
            <CardImage component="img" image={mainImage} title={imageTitle} />

            <ContentWrapper>
                {category && (
                    <CategoryText
                        variant="caption"
                        component="span"
                        color="text.secondary"
                    >
                        {category}
                    </CategoryText>
                )}

                <Typography variant="subtitle1" component="h3" gutterBottom>
                    {title}
                </Typography>

                {avatars.length > 0 && (
                    <AvatarContainer direction="row" spacing={1}>
                        {avatars.map((avatar) => (
                            <AvatarStyled
                                key={avatar.id}
                                alt={avatar.alt}
                                src={avatar.src}
                            />
                        ))}
                    </AvatarContainer>
                )}
            </ContentWrapper>
        </CardRootStyle>
    );
};

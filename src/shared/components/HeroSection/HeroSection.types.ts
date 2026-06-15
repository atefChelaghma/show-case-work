import type { ReactNode } from 'react';

export interface HeroImage {
    src: string;
    alt: string;
}

export interface HeroSectionProps {
    title: string;
    description: string;
    image: HeroImage;
    actions?: ReactNode;
}

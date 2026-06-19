export interface AvatarItem {
    id: string;
    alt: string;
    src: string;
}

export interface FeatureCardProps {
    mainImage: string;
    imageTitle?: string;
    category?: string;
    title: string;
    avatars?: AvatarItem[];
}

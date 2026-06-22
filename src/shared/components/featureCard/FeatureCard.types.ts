import { z } from 'zod';

export const AvatarItemSchema = z.object({
    id: z.uuid(),
    alt: z.string().min(1),
    src: z.url(),
});

export const FeatureCardPropsSchema = z.object({
    mainImage: z.string(),
    imageTitle: z.string().optional(),
    category: z.string().optional(),
    title: z.string(),
    avatars: z.array(AvatarItemSchema).optional(),
});

export type AvatarItem = z.infer<typeof AvatarItemSchema>;
export type FeatureCardProps = z.infer<typeof FeatureCardPropsSchema>;

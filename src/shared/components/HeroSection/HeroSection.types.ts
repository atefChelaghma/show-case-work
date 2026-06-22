import type { ReactNode } from 'react';
import { z } from 'zod';

export const HeroImageSchema = z.object({
    src: z.url(),
    alt: z.string().min(1),
});

export const HeroSectionPropsSchema = z.object({
    title: z.string(),
    description: z.string(),
    image: HeroImageSchema,
    actions: z.custom<ReactNode>().optional(),
});

export type HeroImage = z.infer<typeof HeroImageSchema>;
export type HeroSectionProps = z.infer<typeof HeroSectionPropsSchema>;

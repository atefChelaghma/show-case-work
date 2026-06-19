import type { Meta, StoryObj } from '@storybook/react-vite';
import { FeatureCard } from './FeatureCard';

const mockAvatars = [
    {
        id: 'usr_001',
        alt: 'Remy Sharp',
        src: 'https://images.pexels.com/photos/28321733/pexels-photo-28321733.jpeg',
    },
    {
        id: 'usr_002',
        alt: 'Cindy Baker',
        src: 'https://www.rocketseat.com.br/_next/static/media/andre-noel-avatar.04c659f9.webp',
    },
    {
        id: 'usr_003',
        alt: 'Travis Howard',
        src: 'https://images.pexels.com/photos/28321733/pexels-photo-28321733.jpeg',
    },
];

const meta: Meta<typeof FeatureCard> = {
    title: 'Shared/FeatureCard',
    component: FeatureCard,
    tags: ['autodocs'],
    argTypes: {
        mainImage: { control: 'text' },
        category: { control: 'text' },
        title: { control: 'text' },
    },
    decorators: [
        (Story) => (
            <div
                style={{
                    padding: '2rem',
                    display: 'flex',
                    justifyContent: 'center',
                    backgroundColor: '#f5f5f5',
                }}
            >
                <Story />
            </div>
        ),
    ],
};

export default meta;

type Story = StoryObj<typeof FeatureCard>;

export const Default: Story = {
    args: {
        category: 'Example',
        title: 'Ultra-narrow bezels',
        mainImage:
            'https://images.pexels.com/photos/34776659/pexels-photo-34776659.jpeg',
        imageTitle: 'Live from space album cover',
        avatars: mockAvatars,
    },
};

export const WithoutCategory: Story = {
    args: {
        title: 'AMOLED display with vibrant colors',
        mainImage: 'https://picsum.photos/400/140',
        imageTitle: 'Watch display',
        avatars: mockAvatars.slice(0, 2),
    },
};

export const WithoutAvatars: Story = {
    args: {
        category: 'Hardware',
        title: 'Aerospace-grade titanium chassis',
        mainImage: 'https://picsum.photos/400/141',
        imageTitle: 'Titanium chassis',
        avatars: [],
    },
};

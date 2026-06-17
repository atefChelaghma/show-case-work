import { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from '@mui/material';
import { HeroSection } from './HeroSection';

const meta: Meta<typeof HeroSection> = {
    title: 'Shared/HeroSection',
    component: HeroSection,
};

export default meta;

type Story = StoryObj<typeof HeroSection>;

export const Default: Story = {
    args: {
        title: 'Welcome to Vivo Travel',
        description: 'Find the best travel deals.',
        image: {
            src: 'https://picsum.photos/800/400',
            alt: 'Travel image',
        },
        actions: <Button variant="contained">Learn More</Button>,
    },
};

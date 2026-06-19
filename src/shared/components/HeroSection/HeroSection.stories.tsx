import { Meta, StoryObj } from '@storybook/react-vite';
import { Button, Stack } from '@mui/material';
import { HeroSection } from './HeroSection';

const meta: Meta<typeof HeroSection> = {
    title: 'Shared/HeroSection',
    component: HeroSection,
    tags: ['autodocs'],

    parameters: {
        layout: 'fullscreen',
    },

    argTypes: {
        title: {
            control: 'text',
            description: 'The main heading of the hero section',
        },
        description: {
            control: 'text',
            description: 'Supporting text below the title',
        },
        actions: { control: { disable: true } },
    },
};

export default meta;

type Story = StoryObj<typeof HeroSection>;

export const Default: Story = {
    args: {
        title: 'Welcome to Vivo Travel',
        description:
            'Find the best travel deals and explore the world with our exclusive packages curated just for you.',
        image: {
            src: 'https://images.pexels.com/photos/1285625/pexels-photo-1285625.jpeg',
            alt: 'Tropical beach travel destination',
        },
        actions: (
            <Button variant="contained" size="large">
                Learn More
            </Button>
        ),
    },
};

export const MultipleActions: Story = {
    args: {
        title: 'Your Next Adventure Awaits',
        description:
            'Book your flights, hotels, and car rentals all in one place. Join thousands of happy travelers today.',
        image: {
            src: 'https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg',
            alt: 'Person standing on a mountain peak',
        },
        actions: (
            <Stack direction="row" spacing={2}>
                <Button variant="contained" size="large">
                    Book Now
                </Button>
                <Button
                    variant="outlined"
                    size="large"
                    sx={{ bgcolor: 'background.paper' }}
                >
                    View Deals
                </Button>
            </Stack>
        ),
    },
};

export const WithoutActions: Story = {
    args: {
        title: 'A New Way to Travel',
        description:
            'Discover hidden gems and local favorites. Just scroll down to start exploring our interactive map.',
        image: {
            src: 'https://images.pexels.com/photos/3155666/pexels-photo-3155666.jpeg',
            alt: 'Traveler looking at a map',
        },
    },
};

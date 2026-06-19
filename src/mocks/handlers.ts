import { http, HttpResponse } from 'msw';

const MOCK_CARDS = [
    {
        id: 'card-1',
        title: 'Inovação em IA',
        category: 'Tecnologia',
        mainImage:
            'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg',
        imageTitle: 'Inovação em IA',
        avatars: [
            {
                id: 'usr_1',
                alt: 'User 1',
                src: 'https://images.pexels.com/photos/28321733/pexels-photo-28321733.jpeg',
            },
        ],
    },
    {
        id: 'card-2',
        title: 'Realidade Mista',
        category: 'Produto',
        mainImage:
            'https://images.pexels.com/photos/8728380/pexels-photo-8728380.jpeg',
        imageTitle: 'Realidade Mista',
        avatars: [
            {
                id: 'usr_2',
                alt: 'User 2',
                src: 'https://www.rocketseat.com.br/_next/static/media/andre-noel-avatar.04c659f9.webp',
            },
            {
                id: 'usr_3',
                alt: 'User 3',
                src: 'https://images.pexels.com/photos/28321733/pexels-photo-28321733.jpeg',
            },
        ],
    },
];

export const handlers = [
    http.get('/api/cards', () => {
        return HttpResponse.json(MOCK_CARDS);
    }),
];

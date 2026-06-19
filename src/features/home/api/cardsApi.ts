import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { FeatureCardProps } from '../../../shared/components/featureCard/FeatureCard.types';

export interface CardData extends FeatureCardProps {
    id: string;
}

export const cardsApi = createApi({
    reducerPath: 'cardsApi',
    baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
    endpoints: (builder) => ({
        getCards: builder.query<CardData[], void>({
            query: () => '/cards',
        }),
    }),
});

export const { useGetCardsQuery } = cardsApi;

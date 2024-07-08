import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3500',
  }) /* TODO: add to .env for deployment*/,
  tagTypes: ['Note', 'User'],
  endpoints: (builder) => ({}),
});

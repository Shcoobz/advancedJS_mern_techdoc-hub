import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { CONFIG, HTTP_STATUS_CODES, ROUTE } from '../../config/constants';
import {
  getToken,
  prepareRequestHeaders,
  refreshToken,
} from '../../../service/tokenService';

export const baseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_API_BASE_URL,
  credentials: CONFIG.CREDENTIALS,
  prepareHeaders: (headers, { getState }) => {
    const token = getToken(getState());

    return prepareRequestHeaders(headers, token);
  },
});

async function baseQueryWithReauth(args, api, extraOptions) {
  let result = await baseQuery(args, api, extraOptions);

  if (result?.error?.status === HTTP_STATUS_CODES.CLIENT.ERROR.FORBIDDEN) {
    const refreshResult = await refreshToken(api, extraOptions);

    if (!refreshResult) {
      return await baseQuery(args, api, extraOptions);
    }

    return refreshResult;
  }

  return result;
}

export const apiSlice = createApi({
  baseQuery: baseQueryWithReauth,
  tagTypes: CONFIG.TAG_TYPES,

  endpoints: (builder) => ({
    placeholder: builder.query({
      query: () => ROUTE.PLACEHOLDER,
    }),
  }),
});

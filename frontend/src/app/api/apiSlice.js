import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { CONFIG, HTTP_STATUS_CODES, PATH } from '../../config/constants.js';
import {
  getToken,
  prepareRequestHeaders,
  refreshToken,
} from '../../service/tokenService.js';

/**
 * @function baseQuery
 * @description Configures the base query with base URL, credentials, and headers.
 */
export const baseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_API_BASE_URL,
  credentials: CONFIG.credentials,
  prepareHeaders: (headers, { getState }) => {
    const token = getToken(getState());

    return prepareRequestHeaders(headers, token);
  },
});

/**
 * @function baseQueryWithReauth
 * @description Handles token reauthorization if the initial request is forbidden.
 */
async function baseQueryWithReauth(args, api, extraOptions) {
  let result = await baseQuery(args, api, extraOptions);

  if (result?.error?.status === HTTP_STATUS_CODES.CLIENT.ERROR.forbidden) {
    const refreshResult = await refreshToken(api, extraOptions);

    if (!refreshResult) {
      return await baseQuery(args, api, extraOptions);
    }

    return refreshResult;
  }

  return result;
}

/**
 * @constant apiSlice
 * @description Creates an API slice with reauthorization and predefined endpoints.
 */
export const apiSlice = createApi({
  baseQuery: baseQueryWithReauth,
  tagTypes: CONFIG.tagTypes,

  endpoints: (builder) => ({
    placeholder: builder.query({
      query: () => PATH.placeholder,
    }),
  }),
});

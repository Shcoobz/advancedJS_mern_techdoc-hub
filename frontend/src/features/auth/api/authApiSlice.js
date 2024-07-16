import { apiSlice } from '../../../app/api/apiSlice.js';
import { CONFIG, PATH } from '../../../config/constants.js';
import {
  handleLogoutQueryStarted,
  handleRefreshQueryStarted,
} from '../../../service/authService.js';

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: PATH.AUTH.baseUrl,
        method: CONFIG.HTTP_METHOD.post,
        body: { ...credentials },
      }),
    }),

    sendLogout: builder.mutation({
      query: () => ({
        url: PATH.AUTH.logout,
        method: CONFIG.HTTP_METHOD.post,
      }),
      onQueryStarted: handleLogoutQueryStarted,
    }),

    refresh: builder.mutation({
      query: () => ({
        url: PATH.AUTH.refresh,
        method: CONFIG.HTTP_METHOD.get,
      }),

      onQueryStarted: handleRefreshQueryStarted,
    }),
  }),
});

export const { useLoginMutation, useSendLogoutMutation, useRefreshMutation } =
  authApiSlice;

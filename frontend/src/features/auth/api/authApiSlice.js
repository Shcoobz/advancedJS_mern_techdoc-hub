import { apiSlice } from '../../../app/api/apiSlice.js';
import { CONFIG, PATH } from '../../../config/constants.js';
import {
  handleLogoutQueryStarted,
  handleRefreshQueryStarted,
} from '../../../service/authService.js';

/**
 * @constant authApiSlice
 * @description API slice for authentication-related endpoints.
 */
export const authApiSlice = apiSlice.injectEndpoints({
  /**
   * @function endpoints
   * @description Defines API endpoints for authentication.
   */
  endpoints: (builder) => ({
    /**
     * @function login
     * @description Endpoint for user login, sending credentials to the server.
     */
    login: builder.mutation({
      query: (credentials) => ({
        url: PATH.AUTH.baseUrl,
        method: CONFIG.HTTP_METHOD.post,
        body: { ...credentials },
      }),
    }),

    /**
     * @function sendLogout
     * @description Endpoint for logging out the user, triggering a logout query.
     */
    sendLogout: builder.mutation({
      query: () => ({
        url: PATH.AUTH.logout,
        method: CONFIG.HTTP_METHOD.post,
      }),
      onQueryStarted: handleLogoutQueryStarted,
    }),

    /**
     * @function refresh
     * @description Endpoint for refreshing the authentication token.
     */
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

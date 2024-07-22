import { baseQuery } from '../app/api/apiSlice';
import { CONFIG, HTTP_STATUS_CODES, MSG, PATH } from '../config/constants';
import { setCredentials } from '../features/auth/state/authSlice';

/**
 * @function getToken
 * @desc Selects the authentication token from the Redux state.
 */
export const getToken = (state) => state.auth.token;

/**
 * @function prepareRequestHeaders
 * @desc Prepares request headers by setting the authorization token if available.
 */
export const prepareRequestHeaders = (headers, token) => {
  if (token) {
    headers.set(CONFIG.HEADER.name, CONFIG.HEADER.getAuthScheme(token));
  }

  return headers;
};

/**
 * @function refreshToken
 * @desc Attempts to refresh the authentication token and updates credentials in the Redux store.
 */
export async function refreshToken(api, extraOptions) {
  const refreshResult = await baseQuery(PATH.AUTH.refresh, api, extraOptions);

  if (refreshResult?.data) {
    api.dispatch(setCredentials({ ...refreshResult.data }));

    return null;
  }

  if (refreshResult?.error?.status === HTTP_STATUS_CODES.CLIENT.ERROR.forbidden) {
    refreshResult.error.data.message = MSG.API.ERROR.loginExpired;
  }

  return refreshResult;
}

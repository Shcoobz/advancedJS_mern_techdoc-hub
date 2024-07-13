import { baseQuery } from '../app/api/apiSlice';
import { CONFIG, HTTP_STATUS_CODES, MSG, PATH } from '../config/constants';
import { setCredentials } from '../features/auth/authSlice';

export const getToken = (state) => state.auth.token;

export const prepareRequestHeaders = (headers, token) => {
  if (token) {
    headers.set(CONFIG.HEADER.name, CONFIG.HEADER.getAuthScheme(token));
  }

  return headers;
};

export async function refreshToken(api, extraOptions) {
  const refreshResult = await baseQuery(PATH.AUTH.REFRESH, api, extraOptions);
  if (refreshResult?.data) {
    api.dispatch(setCredentials({ ...refreshResult.data }));

    return null;
  }

  if (refreshResult?.error?.status === HTTP_STATUS_CODES.CLIENT.ERROR.FORBIDDEN) {
    refreshResult.error.data.message = MSG.API.ERROR.LOGIN_EXPIRED;
  }

  return refreshResult;
}

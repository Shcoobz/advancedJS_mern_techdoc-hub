import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { setCredentials } from '../../features/auth/authSlice';

const baseQuery = fetchBaseQuery({
  baseUrl: 'http://localhost:3500',
  credentials: 'include' /* !important: always send cookie */,
  prepareHeaders: (headers, { getState }) => {
    const token = getState().auth.token;

    if (token) {
      headers.set('authorization', `Bearer ${token}`);
    }

    return headers;
  },
});

async function baseQueryWithReauth(args, api, extraOptions) {
  /** TODO: remove for deployment */
  // console.log(args); // request url, method, body
  // console.log(api); // signal, dispatch, getState()
  // console.log(extraOptions); //custom like {shout: true}
  let result = await baseQuery(args, api, extraOptions);

  // Could handle other status codes as well
  if (result?.error?.status === 403) {
    console.log('sending refresh token');

    // send refresh token to get new access token
    const refreshResult = await baseQuery('/auth/refresh', api, extraOptions);

    if (refreshResult?.data) {
      // store the new token
      api.dispatch(setCredentials({ ...refreshResult.data }));

      // retry original query with new access token
      result = await baseQuery(args, api, extraOptions);
    } else {
      if (refreshResult?.error?.status === 403) {
        refreshResult.error.data.message = 'Your login has expired. ';
      }

      return refreshResult;
    }
  }

  return result;
}

export const apiSlice = createApi({
  baseQuery: baseQueryWithReauth,
  tagTypes: ['Note', 'User'],
  endpoints: (builder) => ({}),
});

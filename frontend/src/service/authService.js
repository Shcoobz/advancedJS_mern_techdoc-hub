import { apiSlice } from '../app/api/apiSlice.js';
import { CONFIG } from '../config/constants.js';
import { logOut, setCredentials } from '../features/auth/state/authSlice.js';

/**
 * @function handleQueryError
 * @desc Handles errors from API queries, logging errors to the console and invoking a success callback if provided.
 */
export async function handleQueryError(queryFulfilled, dispatch, successCallback) {
  try {
    const { data } = await queryFulfilled;
    if (successCallback) {
      successCallback(data, dispatch);
    }
  } catch (err) {
    console.error(err);
  }
}

/**
 * @function handleLogoutQueryStarted
 * @desc Handles the process of logging out and resetting the API state upon successful query completion.
 */
export async function handleLogoutQueryStarted(arg, { dispatch, queryFulfilled }) {
  await handleQueryError(queryFulfilled, dispatch, () => {
    dispatch(logOut());
    setTimeout(() => {
      dispatch(apiSlice.util.resetApiState());
    }, CONFIG.TIMEOUT.apiReset);
  });
}

/**
 * @function handleRefreshQueryStarted
 * @desc Handles the process of refreshing the access token and updating credentials upon successful query completion.
 */
export async function handleRefreshQueryStarted(arg, { dispatch, queryFulfilled }) {
  await handleQueryError(queryFulfilled, dispatch, (data) => {
    const { accessToken } = data;
    dispatch(setCredentials({ accessToken }));
  });
}

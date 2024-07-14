import { apiSlice } from '../app/api/apiSlice.js';
import { CONFIG } from '../config/constants.js';
import { logOut, setCredentials } from '../features/auth/state/authSlice.js';

export async function handleQueryError(queryFulfilled, dispatch, successCallback) {
  try {
    const { data } = await queryFulfilled;
    if (successCallback) {
      successCallback(data);
    }
  } catch (err) {
    console.error(err);
  }
}

export async function handleLogoutQueryStarted({ dispatch, queryFulfilled }) {
  await handleQueryError(queryFulfilled, dispatch, () => {
    dispatch(logOut());
    setTimeout(() => {
      dispatch(apiSlice.util.resetApiState());
    }, CONFIG.TIMEOUT.apiReset);
  });
}

export async function handleRefreshQueryStarted({ dispatch, queryFulfilled }) {
  await handleQueryError(queryFulfilled, dispatch, (data) => {
    const { accessToken } = data;
    dispatch(setCredentials({ accessToken }));
  });
}

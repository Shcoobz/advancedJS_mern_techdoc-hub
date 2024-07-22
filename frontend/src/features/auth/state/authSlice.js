import { createSlice } from '@reduxjs/toolkit';
import { CONFIG } from '../../../config/constants';

/**
 * @constant authSlice
 * @description Redux slice for authentication state management.
 */
const authSlice = createSlice({
  name: CONFIG.SLICE.name,
  initialState: { token: null },
  reducers: {
    /**
     * @function setCredentials
     * @description Redux reducer to set the authentication token.
     */
    setCredentials: (state, action) => {
      const { accessToken } = action.payload;
      state.token = accessToken;
    },
    /**
     * @function logOut
     * @description Redux reducer to clear the authentication token.
     */
    logOut: (state) => {
      state.token = null;
    },
  },
});

export const { setCredentials, logOut } = authSlice.actions;

export default authSlice.reducer;

/**
 * @constant selectCurrentToken
 * @description Selector to get the current authentication token from the state.
 */
export const selectCurrentToken = (state) => state.auth.token;

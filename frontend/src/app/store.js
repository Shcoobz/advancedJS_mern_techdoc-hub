import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from './api/apiSlice';
import { setupListeners } from '@reduxjs/toolkit/query';
import authReducer from '../features/auth/state/authSlice';

/**
 * @constant store
 * @description Configures and exports the Redux store.
 */
export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: false /*redux dev tools */,
});

/**
 * @function setupListeners
 * @description Initializes listeners for the Redux store.
 */
setupListeners(store.dispatch);

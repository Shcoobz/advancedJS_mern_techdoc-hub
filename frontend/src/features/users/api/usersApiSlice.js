import { createSelector } from '@reduxjs/toolkit';
import { apiSlice } from '../../../app/api/apiSlice';
import {
  usersAdapter,
  transformUserResponse,
  provideUsersTags,
  getUserQuery,
  addNewUserQuery,
  invalidateUsersTags,
  updateUserQuery,
  invalidateUserTag,
  deleteUserQuery,
} from '../utils/usersApiSliceUtils';

/**
 * @constant initialState
 * @description Provides the initial state for the users slice, using the `usersAdapter` to generate the default structure.
 */
export const initialState = usersAdapter.getInitialState();

/**
 * @function usersApiSlice
 * @description Configures API endpoints for managing users, including fetching, adding, updating, and deleting users, using the Redux Toolkit `apiSlice`.
 */
export const usersApiSlice = apiSlice.injectEndpoints({
  /**
   * @function endpoints
   * @description Defines API endpoints for the `usersApiSlice`.
   */
  endpoints: (builder) => ({
    /**
     * @function getUsers
     * @description Defines a query to fetch users from the API, transform the response, and set cache tags.
     */
    getUsers: builder.query({
      query: getUserQuery,
      transformResponse: transformUserResponse,
      providesTags: provideUsersTags,
    }),
    /**
     * @function addNewUser
     * @description Defines a mutation to add a new user to the API and invalidate relevant cache tags.
     */
    addNewUser: builder.mutation({
      query: addNewUserQuery,
      invalidatesTags: invalidateUsersTags,
    }),
    /**
     * @function updateUser
     * @description Defines a mutation to update an existing user in the API and invalidate relevant cache tags.
     */
    updateUser: builder.mutation({
      query: updateUserQuery,
      invalidatesTags: invalidateUserTag,
    }),
    /**
     * @function deleteUser
     * @description Defines a mutation to delete a user from the API and invalidate relevant cache tags.
     */
    deleteUser: builder.mutation({
      query: deleteUserQuery,
      invalidatesTags: invalidateUserTag,
    }),
  }),
});

export const {
  useGetUsersQuery,
  useAddNewUserMutation,
  useUpdateUserMutation,
  useDeleteUserMutation,
} = usersApiSlice;

/**
 * @function selectUsersResult
 * @description Selects the query result object for fetching users.
 */
export const selectUsersResult = usersApiSlice.endpoints.getUsers.select();

/**
 * @function selectUsersData
 * @description Creates a memoized selector to extract the normalized user data from the query result object.
 */
const selectUsersData = createSelector(
  selectUsersResult,
  (usersResult) => usersResult.data // normalized state object with ids & entities
);

/**
 * @constant selectors
 * @description Selector for accessing users from the state: all users, user by ID, and user IDs.
 */
export const {
  selectAll: selectAllUsers,
  selectById: selectUserById,
  selectIds: selectUserIds,
  // Pass in a selector that returns the users slice of state
} = usersAdapter.getSelectors((state) => selectUsersData(state) ?? initialState);

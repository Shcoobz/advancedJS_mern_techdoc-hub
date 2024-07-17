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

export const initialState = usersAdapter.getInitialState();

export const usersApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: getUserQuery,
      transformResponse: transformUserResponse,
      providesTags: provideUsersTags,
    }),
    addNewUser: builder.mutation({
      query: addNewUserQuery,
      invalidatesTags: invalidateUsersTags,
    }),
    updateUser: builder.mutation({
      query: updateUserQuery,
      invalidatesTags: invalidateUserTag,
    }),
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

// returns the query result object
export const selectUsersResult = usersApiSlice.endpoints.getUsers.select();

// creates memoized selector
const selectUsersData = createSelector(
  selectUsersResult,
  (usersResult) => usersResult.data // normalized state object with ids & entities
);

//getSelectors creates these selectors and we rename them with aliases using destructuring
export const {
  selectAll: selectAllUsers,
  selectById: selectUserById,
  selectIds: selectUserIds,
  // Pass in a selector that returns the users slice of state
} = usersAdapter.getSelectors((state) => selectUsersData(state) ?? initialState);

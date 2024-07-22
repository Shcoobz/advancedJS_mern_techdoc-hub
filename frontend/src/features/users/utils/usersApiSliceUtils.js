import { createEntityAdapter } from '@reduxjs/toolkit';
import { HTTP_STATUS_CODES, CONFIG, PATH } from '../../../config/constants';
import { initialState } from '../api/usersApiSlice';

/**
 * @constant usersAdapter
 * @desc Creates and exports an entity adapter for managing users in the Redux state.
 */
export const usersAdapter = createEntityAdapter({});

/**
 * @function getUserQuery
 * @desc Constructs the query for fetching users, including URL and status validation.
 */
export function getUserQuery() {
  return {
    url: PATH.DASH.USER.users,
    validateStatus: validateUserResponseStatus,
  };
}

/**
 * @function validateUserResponseStatus
 * @desc Validates the response status and result for fetching users.
 */
function validateUserResponseStatus(response, result) {
  return response.status === HTTP_STATUS_CODES.CLIENT.SUCCESS.ok && !result.isError;
}

/**
 * @function transformUserResponse
 * @desc Transforms the response data to match the adapter's format and sets all users in the state.
 */
export function transformUserResponse(responseData) {
  const loadedUsers = responseData.map((user) => ({ ...user, id: user._id }));
  return usersAdapter.setAll(initialState, loadedUsers);
}

/**
 * @function provideUsersTags
 * @desc Provides tags for caching and invalidation based on the fetched users.
 */
export function provideUsersTags(result) {
  if (result?.ids) {
    return [
      { type: CONFIG.TAG_TYPE.USER.type, id: CONFIG.TAG_TYPE.USER.id },
      ...result.ids.map((id) => ({ type: CONFIG.TAG_TYPE.USER.type, id })),
    ];
  } else {
    return [{ type: CONFIG.TAG_TYPE.USER.type, id: CONFIG.TAG_TYPE.USER.id }];
  }
}

/**
 * @function addNewUserQuery
 * @desc Constructs the query for adding a new user, including the HTTP method and request body.
 */
export function addNewUserQuery(initialUser) {
  return {
    url: PATH.DASH.USER.users,
    method: CONFIG.HTTP_METHOD.post,
    body: { ...initialUser },
  };
}

/**
 * @function updateUserQuery
 * @desc Constructs the query for updating an existing user, including the HTTP method and request body.
 */
export function updateUserQuery(initialUser) {
  return {
    url: PATH.DASH.USER.users,
    method: CONFIG.HTTP_METHOD.patch,
    body: { ...initialUser },
  };
}

/**
 * @function deleteUserQuery
 * @desc Constructs the query for deleting a user, including the HTTP method and request body.
 */
export function deleteUserQuery({ id }) {
  return {
    url: PATH.DASH.USER.users,
    method: CONFIG.HTTP_METHOD.delete,
    body: { id },
  };
}

/**
 * @function invalidateUsersTags
 * @desc Provides tags to invalidate all users, triggering a refetch of the user list.
 */
export function invalidateUsersTags() {
  return [{ type: CONFIG.TAG_TYPE.USER.type, id: CONFIG.TAG_TYPE.USER.id }];
}

/**
 * @function invalidateUserTag
 * @desc Provides a tag to invalidate a specific user, based on the user ID.
 */
export function invalidateUserTag(result, error, arg) {
  return [{ type: CONFIG.TAG_TYPE.USER.type, id: arg.id }];
}

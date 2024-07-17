import { createEntityAdapter } from '@reduxjs/toolkit';
import { HTTP_STATUS_CODES, CONFIG, PATH } from '../../../config/constants';
import { initialState } from '../api/usersApiSlice';

export const usersAdapter = createEntityAdapter({});

export function getUserQuery() {
  return {
    url: PATH.DASH.USER.users,
    validateStatus: validateUserResponseStatus,
  };
}

function validateUserResponseStatus(response, result) {
  return response.status === HTTP_STATUS_CODES.CLIENT.SUCCESS.ok && !result.isError;
}

export function transformUserResponse(responseData) {
  const loadedUsers = responseData.map((user) => ({ ...user, id: user._id }));
  return usersAdapter.setAll(initialState, loadedUsers);
}

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

export function addNewUserQuery(initialUser) {
  return {
    url: PATH.DASH.USER.users,
    method: CONFIG.HTTP_METHOD.post,
    body: { ...initialUser },
  };
}

export function updateUserQuery(initialUser) {
  return {
    url: PATH.DASH.USER.users,
    method: CONFIG.HTTP_METHOD.patch,
    body: { ...initialUser },
  };
}

export function deleteUserQuery({ id }) {
  return {
    url: PATH.DASH.USER.users,
    method: CONFIG.HTTP_METHOD.delete,
    body: { id },
  };
}

export function invalidateUsersTags() {
  return [{ type: CONFIG.TAG_TYPE.USER.type, id: CONFIG.TAG_TYPE.USER.id }];
}

export function invalidateUserTag(result, error, arg) {
  return [{ type: CONFIG.TAG_TYPE.USER.type, id: arg.id }];
}

import { HTTP_STATUS_CODES, MSG } from '../../config/common/constants.js';

/**
 * @function sendUserNotFound
 * @description Sends a 400 Bad Request response indicating the user was not found.
 */
export function sendUserNotFound(res) {
  return res
    .status(HTTP_STATUS_CODES.CLIENT.ERROR.BAD_REQUEST)
    .json({ message: MSG.USER.ERROR.NOT_FOUND });
}

/**
 * @function sendUserAllFieldsRequired
 * @description Sends a 400 Bad Request response indicating all fields are required.
 */
export function sendUserAllFieldsRequired(res) {
  return res
    .status(HTTP_STATUS_CODES.CLIENT.ERROR.BAD_REQUEST)
    .json({ message: MSG.USER.ERROR.ALL_FIELDS_REQUIRED });
}

/**
 * @function sendUserDuplicateUsername
 * @description Sends a 409 Conflict response indicating a duplicate username.
 */
export function sendUserDuplicateUsername(res) {
  return res
    .status(HTTP_STATUS_CODES.CLIENT.ERROR.CONFLICT)
    .json({ message: MSG.USER.ERROR.DUPLICATE_USERNAME });
}

/**
 * @function sendUserCreated
 * @description Sends a 201 Created response indicating a new user was created successfully.
 */
export function sendUserCreated(res, username) {
  return res
    .status(HTTP_STATUS_CODES.CLIENT.SUCCESS.CREATED)
    .json({ message: MSG.USER.SUCCESS.CREATED(username) });
}

/**
 * @function sendUserInvalidData
 * @description Sends a 400 Bad Request response indicating invalid user data.
 */
export function sendUserInvalidData(res) {
  return res
    .status(HTTP_STATUS_CODES.CLIENT.ERROR.BAD_REQUEST)
    .json({ message: MSG.USER.ERROR.INVALID_DATA });
}

/**
 * @function sendSpecificFieldsRequired
 * @description Sends a 400 Bad Request response indicating specific fields are required.
 */
export function sendSpecificFieldsRequired(res) {
  return res
    .status(HTTP_STATUS_CODES.CLIENT.ERROR.BAD_REQUEST)
    .json({ message: MSG.USER.ERROR.FIELDS_REQUIRED });
}

/**
 * @function sendUserUpdated
 * @description Sends a response indicating the user was updated successfully.
 */
export function sendUserUpdated(res, username) {
  return res.json({ message: MSG.USER.SUCCESS.UPDATED(username) });
}

/**
 * @function sendUserIdRequired
 * @description Sends a 400 Bad Request response indicating the user ID is required.
 */
export function sendUserIdRequired(res) {
  return res
    .status(HTTP_STATUS_CODES.CLIENT.ERROR.BAD_REQUEST)
    .json({ message: MSG.USER.ERROR.ID_REQUIRED });
}

/**
 * @function sendUserHasAssignedNotes
 * @description Sends a 400 Bad Request response indicating the user has assigned notes.
 */
export function sendUserHasAssignedNotes(res) {
  return res
    .status(HTTP_STATUS_CODES.CLIENT.ERROR.BAD_REQUEST)
    .json({ message: MSG.USER.ERROR.HAS_ASSIGNED_NOTES });
}

/**
 * @function sendUserDeleted
 * @description Sends a 200 OK response indicating the user was deleted successfully.
 */
export function sendUserDeleted(res, username, userId) {
  res.status(HTTP_STATUS_CODES.CLIENT.SUCCESS.OK).json({
    message: MSG.USER.SUCCESS.DELETED(username, userId),
  });
}

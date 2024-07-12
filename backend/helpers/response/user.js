import { HTTP_STATUS_CODES, MSG } from '../../config/common/constants';
import { extractUserDetails } from '../../services/userService';

export function sendUserNotFound(res) {
  return res
    .status(HTTP_STATUS_CODES.CLIENT.ERROR.BAD_REQUEST)
    .json({ message: MSG.USER.ERROR.NOT_FOUND });
}

export function sendUserAllFieldsRequired(res) {
  return res
    .status(HTTP_STATUS_CODES.CLIENT.ERROR.BAD_REQUEST)
    .json({ message: MSG.USER.ERROR.ALL_FIELDS_REQUIRED });
}

export function sendUserDuplicateUsername(res) {
  return res
    .status(HTTP_STATUS_CODES.CLIENT.ERROR.CONFLICT)
    .json({ message: MSG.USER.ERROR.DUPLICATE_USERNAME });
}

export function sendUserCreated(res, username) {
  return res
    .status(HTTP_STATUS_CODES.CLIENT.SUCCESS.CREATED)
    .json({ message: MSG.USER.SUCCESS.CREATED(username) });
}

export function sendUserInvalidData(res) {
  return res
    .status(HTTP_STATUS_CODES.CLIENT.ERROR.BAD_REQUEST)
    .json({ message: MSG.USER.ERROR.INVALID_DATA });
}

export function sendSpecificFieldsRequired(res) {
  return res
    .status(HTTP_STATUS_CODES.CLIENT.ERROR.BAD_REQUEST)
    .json({ message: MSG.USER.ERROR.FIELDS_REQUIRED });
}

export function sendUserUpdated(res, username) {
  return res.json({ message: `${username} updated` });
}

export function sendUserIdRequired(res) {
  return res
    .status(HTTP_STATUS_CODES.CLIENT.ERROR.BAD_REQUEST)
    .json({ message: MSG.USER.ERROR.ID_REQUIRED });
}

export function sendUserHasAssignedNotes(res) {
  return res
    .status(HTTP_STATUS_CODES.CLIENT.ERROR.BAD_REQUEST)
    .json({ message: MSG.USER.ERROR.HAS_ASSIGNED_NOTES });
}

export function sendUserDeleted(res, user) {
  const { username, userId } = extractUserDetails(user);

  res.status(HTTP_STATUS_CODES.CLIENT.SUCCESS.OK).json({
    message: MSG.USER.SUCCESS.DELETED(username, userId),
  });
}

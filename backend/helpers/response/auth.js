import { HTTP_STATUS_CODES, MSG } from '../../config/common/constants.js';

/**
 * @function sendAuthAllFieldsRequired
 * @description Sends a 400 Bad Request response indicating all fields are required.
 */
export function sendAuthAllFieldsRequired(res) {
  return res
    .status(HTTP_STATUS_CODES.CLIENT.ERROR.BAD_REQUEST)
    .json({ message: MSG.AUTH.ERROR.ALL_FIELDS_REQUIRED });
}

/**
 * @function sendAuthUnauthorized
 * @description Sends a 401 Unauthorized response indicating unauthorized access.
 */
export function sendAuthUnauthorized(res) {
  return res
    .status(HTTP_STATUS_CODES.CLIENT.ERROR.UNAUTHORIZED)
    .json({ message: MSG.AUTH.ERROR.UNAUTHORIZED });
}

/**
 * @function sendAuthForbidden
 * @description Sends a 403 Forbidden response indicating forbidden access.
 */
export function sendAuthForbidden(res) {
  return res
    .status(HTTP_STATUS_CODES.CLIENT.ERROR.FORBIDDEN)
    .json({ message: MSG.AUTH.ERROR.FORBIDDEN });
}

/**
 * @function sendAuthNoContent
 * @description Sends a 204 No Content response indicating successful request with no content.
 */
export function sendAuthNoContent(res) {
  res.sendStatus(HTTP_STATUS_CODES.CLIENT.SUCCESS.NO_CONTENT);
}

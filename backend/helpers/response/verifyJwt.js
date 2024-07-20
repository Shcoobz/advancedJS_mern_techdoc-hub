import { HTTP_STATUS_CODES, MSG } from '../../config/common/constants.js';

/**
 * @function sendSecurityUnauthorized
 * @description Sends a 401 Unauthorized response indicating unauthorized access.
 */
export function sendSecurityUnauthorized(res) {
  return res
    .status(HTTP_STATUS_CODES.CLIENT.ERROR.UNAUTHORIZED)
    .json({ message: MSG.SECURITY.ERROR.UNAUTHORIZED });
}

/**
 * @function sendSecurityForbidden
 * @description Sends a 403 Forbidden response indicating forbidden access.
 */
export function sendSecurityForbidden(res) {
  return res
    .status(HTTP_STATUS_CODES.CLIENT.ERROR.FORBIDDEN)
    .json({ message: MSG.SECURITY.ERROR.FORBIDDEN });
}

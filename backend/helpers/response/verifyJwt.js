import { HTTP_STATUS_CODES, MSG } from '../../config/common/constants.js';

export function sendSecurityUnauthorized(res) {
  return res
    .status(HTTP_STATUS_CODES.CLIENT.ERROR.UNAUTHORIZED)
    .json({ message: MSG.SECURITY.ERROR.UNAUTHORIZED });
}

export function sendSecurityForbidden(res) {
  return res
    .status(HTTP_STATUS_CODES.CLIENT.ERROR.FORBIDDEN)
    .json({ message: MSG.SECURITY.ERROR.FORBIDDEN });
}

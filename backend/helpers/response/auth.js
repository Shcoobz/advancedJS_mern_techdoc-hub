import { HTTP_STATUS_CODES, MSG } from '../../config/common/constants.js';

export function sendAuthAllFieldsRequired(res) {
  return res
    .status(HTTP_STATUS_CODES.CLIENT.ERROR.BAD_REQUEST)
    .json({ message: MSG.AUTH.ERROR.ALL_FIELDS_REQUIRED });
}

export function sendAuthUnauthorized(res) {
  return res
    .status(HTTP_STATUS_CODES.CLIENT.ERROR.UNAUTHORIZED)
    .json({ message: MSG.AUTH.ERROR.UNAUTHORIZED });
}

export function sendAuthForbidden(res) {
  return res
    .status(HTTP_STATUS_CODES.CLIENT.ERROR.FORBIDDEN)
    .json({ message: MSG.AUTH.ERROR.FORBIDDEN });
}

export function sendAuthNoContent(res) {
  res.sendStatus(HTTP_STATUS_CODES.CLIENT.SUCCESS.NO_CONTENT);
}

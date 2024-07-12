import { HTTP_STATUS_CODES, MSG } from '../config/common/constants.js';

// User
export function sendBadRequestForMissingFields(res) {
  return res
    .status(HTTP_STATUS_CODES.CLIENT.ERROR.BAD_REQUEST)
    .json({ message: MSG.USER.ERROR.ALL_FIELDS_REQUIRED });
}

export function sendUnauthorizedResponse(res) {
  return res
    .status(HTTP_STATUS_CODES.CLIENT.ERROR.UNAUTHORIZED)
    .json({ message: MSG.USER.ERROR.UNAUTHORIZED });
}

export function sendForbiddenResponse(res) {
  return res
    .status(HTTP_STATUS_CODES.CLIENT.ERROR.FORBIDDEN)
    .json({ message: MSG.USER.ERROR.FORBIDDEN });
}

export function sendNoContentResponse(res) {
  res.sendStatus(HTTP_STATUS_CODES.CLIENT.SUCCESS.NO_CONTENT);
}

// Cookie
export function sendTokenResponse(res, refreshToken, accessToken) {
  res.cookie(COOKIE_NAME.JWT, refreshToken, COOKIE_OPTIONS.JWT);
  res.json({ accessToken });
}

export function clearJwtCookie(res) {
  res.clearCookie(COOKIE_NAME.JWT, COOKIE_OPTIONS.CLEAR_JWT);
  res.json({ message: MSG.COOKIE.CLEARED });
}

import { MSG, COOKIE_NAME, COOKIE_OPTIONS } from '../../config/common/constants.js';

export function sendTokenResponse(res, refreshToken, accessToken) {
  res.cookie(COOKIE_NAME.JWT, refreshToken, COOKIE_OPTIONS.JWT);
  res.json({ accessToken });
}

export function clearJwtCookie(res) {
  res.clearCookie(COOKIE_NAME.JWT, COOKIE_OPTIONS.CLEAR_JWT);
  res.json({ message: MSG.COOKIE.CLEARED });
}

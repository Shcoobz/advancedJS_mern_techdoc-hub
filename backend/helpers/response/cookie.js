import { MSG, COOKIE_NAME, COOKIE_OPTIONS } from '../../config/common/constants.js';

/**
 * @function sendTokenResponse
 * @description Sends the access token in the response and sets the refresh token as a cookie.
 */
export function sendTokenResponse(res, refreshToken, accessToken) {
  res.cookie(COOKIE_NAME.JWT, refreshToken, COOKIE_OPTIONS.JWT);
  res.json({ accessToken });
}

/**
 * @function clearJwtCookie
 * @description Clears the JWT cookie and sends a response indicating the cookie was cleared.
 */
export function clearJwtCookie(res) {
  res.clearCookie(COOKIE_NAME.JWT, COOKIE_OPTIONS.CLEAR_JWT);
  res.json({ message: MSG.COOKIE.CLEARED });
}

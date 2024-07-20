import User from '../models/User.js';
import { clearJwtCookie, sendTokenResponse } from '../helpers/response/cookie.js';
import {
  sendAuthForbidden,
  sendAuthNoContent,
  sendAuthUnauthorized,
} from '../helpers/response/auth.js';
import {
  findActiveUserByUsername,
  validateUserPassword,
  createAccessToken,
  createRefreshToken,
  verifyToken,
} from '../services/authService.js';

/**
 * @function login
 * @description Handles user login by validating credentials and issuing tokens.
 * @route POST /auth
 *  @access Public
 */
const login = async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) return sendBadRequestForMissingFields(res);

  const foundUser = await findActiveUserByUsername(username);
  if (!foundUser || !foundUser.active) return sendAuthUnauthorized(res);

  const match = await validateUserPassword(password, foundUser.password);
  if (!match) return sendAuthUnauthorized(res);

  const accessToken = createAccessToken(foundUser);
  const refreshToken = createRefreshToken(foundUser.username);

  sendTokenResponse(res, refreshToken, accessToken);
};

/**
 * @function refresh
 * @description Refreshes the access token using a valid refresh token.
 * @route GET /auth/refresh
 * @access Public - because access token has expired
 */
const refresh = (req, res) => {
  const cookies = req.cookies;

  if (!cookies?.jwt) return sendAuthUnauthorized(res);

  const refreshToken = cookies.jwt;

  verifyToken(refreshToken, process.env.REFRESH_TOKEN_SECRET, async (err, decoded) => {
    if (err) return sendAuthForbidden(res);

    const foundUser = await User.findOne({ username: decoded.username }).exec();
    if (!foundUser) return sendAuthUnauthorized(res);

    const accessToken = createAccessToken(foundUser);
    res.json({ accessToken });
  });
};

/**
 * @function logout
 * @description Logs out the user by clearing the JWT cookie.
 * @route POST /auth/logout
 * @access Public - just to clear cookie if exists
 */
const logout = (req, res) => {
  const cookies = req.cookies;

  if (!cookies?.jwt) return sendAuthNoContent(res);

  clearJwtCookie(res);
};

export { login, refresh, logout };

import User from '../models/User.js';
import asyncHandler from 'express-async-handler';

import {
  sendAuthForbidden,
  sendAuthNoContent,
  sendAuthUnauthorized,
} from '../helpers/response/auth.js';
import {
  findActiveUserByUsername,
  validateUserPassword,
} from '../services/authService.js';
import {
  createAccessToken,
  createRefreshToken,
  verifyToken,
} from '../utils/authUtils.js';

import { clearJwtCookie, sendTokenResponse } from '../helpers/response/cookie.js';

// @desc Login
// @route POST /auth
// @access Public
const login = asyncHandler(async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) return sendBadRequestForMissingFields(res);

  const foundUser = await findActiveUserByUsername(username);
  if (!foundUser || !foundUser.active) return sendAuthUnauthorized(res);

  const match = await validateUserPassword(password, foundUser.password);
  if (!match) return sendAuthUnauthorized(res);

  const accessToken = createAccessToken(foundUser);
  const refreshToken = createRefreshToken(foundUser.username);

  sendTokenResponse(res, refreshToken, accessToken);
});

// @desc Refresh
// @route GET /auth/refresh
// @access Public - because access token has expired
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

// @desc Logout
// @route POST /auth/logout
// @access Public - just to clear cookie if exists
const logout = (req, res) => {
  const cookies = req.cookies;

  if (!cookies?.jwt) return sendAuthNoContent(res);

  clearJwtCookie(res);
};

export { login, refresh, logout };

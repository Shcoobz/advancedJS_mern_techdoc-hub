import User from '../models/User.js';
import asyncHandler from 'express-async-handler';

import {
  clearJwtCookie,
  sendForbiddenResponse,
  sendNoContentResponse,
  sendUnauthorizedResponse,
} from '../helpers/responseHelpers.js';
import {
  findActiveUserByUsername,
  validateUserPassword,
} from '../services/userService.js';
import {
  createAccessToken,
  createRefreshToken,
  verifyToken,
} from '../utils/authUtils.js';
import { sendTokenResponse } from '../helpers/authHelpers.js';

// @desc Login
// @route POST /auth
// @access Public
const login = asyncHandler(async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) return sendBadRequestForMissingFields(res);

  const foundUser = await findActiveUserByUsername(username);
  if (!foundUser || !foundUser.active) return sendUnauthorizedResponse(res);

  const match = await validateUserPassword(password, foundUser.password);
  if (!match) return sendUnauthorizedResponse(res);

  const accessToken = createAccessToken(foundUser);
  const refreshToken = createRefreshToken(foundUser.username);

  sendTokenResponse(res, refreshToken, accessToken);
});

// @desc Refresh
// @route GET /auth/refresh
// @access Public - because access token has expired
const refresh = (req, res) => {
  const cookies = req.cookies;

  if (!cookies?.jwt) return sendUnauthorizedResponse(res);

  const refreshToken = cookies.jwt;

  verifyToken(refreshToken, process.env.REFRESH_TOKEN_SECRET, async (err, decoded) => {
    if (err) return sendForbiddenResponse(res);

    const foundUser = await User.findOne({ username: decoded.username }).exec();
    if (!foundUser) return sendUnauthorizedResponse(res);

    const accessToken = createAccessToken(foundUser);
    res.json({ accessToken });
  });
};

// @desc Logout
// @route POST /auth/logout
// @access Public - just to clear cookie if exists
const logout = (req, res) => {
  const cookies = req.cookies;

  if (!cookies?.jwt) return sendNoContentResponse(res);

  clearJwtCookie(res);
};

export { login, refresh, logout };

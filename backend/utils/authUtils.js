import jwt from 'jsonwebtoken';
import { CONFIG } from '../config/common/constants.js';
import asyncHandler from 'express-async-handler';

export function createAccessToken(user) {
  return jwt.sign(
    {
      UserInfo: {
        username: user.username,
        roles: user.roles,
      },
    },
    process.env.ACCESS_TOKEN_SECRET,
    { expiresIn: CONFIG.TOKEN.ACCESS.EXPIRES_IN }
  );
}

export function createRefreshToken(username) {
  return jwt.sign({ username }, process.env.REFRESH_TOKEN_SECRET, {
    expiresIn: CONFIG.TOKEN.REFRESH.EXPIRES_IN,
  });
}

export const verifyToken = asyncHandler(async (token, secret, callback) => {
  jwt.verify(token, secret, callback);
});

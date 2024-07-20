import User from '../models/User.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { CONFIG } from '../config/common/constants.js';

/**
 * @function createAccessToken
 * @description Creates an access token for a user.
 */
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

/**
 * @function createRefreshToken
 * @description Creates a refresh token for a user.
 */
export function createRefreshToken(username) {
  return jwt.sign({ username }, process.env.REFRESH_TOKEN_SECRET, {
    expiresIn: CONFIG.TOKEN.REFRESH.EXPIRES_IN,
  });
}

/**
 * @function verifyToken
 * @description Verifies a JWT token.
 */
export const verifyToken = async (token, secret, callback) => {
  jwt.verify(token, secret, callback);
};

/**
 * @function findActiveUserByUsername
 * @description Finds an active user by username.
 */
export async function findActiveUserByUsername(username) {
  const user = await User.findOne({ username }).exec();

  return user && user.active ? user : null;
}

/**
 * @function validateUserPassword
 * @description Validates a user's password against a hashed password.
 */
export async function validateUserPassword(password, hash) {
  return bcrypt.compare(password, hash);
}

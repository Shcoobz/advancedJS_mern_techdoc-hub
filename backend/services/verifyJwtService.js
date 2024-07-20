import jwt from 'jsonwebtoken';
import { sendSecurityForbidden } from '../helpers/response/verifyJwt.js';

/**
 * @function verifyAccessToken
 * @description Verifies an access token and sets user information in the request object.
 */
export const verifyAccessToken = (token, res, req, next) => {
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
    if (err) {
      return sendSecurityForbidden(res);
    }

    req.user = decoded.UserInfo.username;
    req.roles = decoded.UserInfo.roles;
    next();
  });
};

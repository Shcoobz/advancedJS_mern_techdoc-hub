import { CONFIG, INDEX } from '../../config/common/constants.js';
import { sendSecurityUnauthorized } from '../../helpers/response/verifyJwt.js';
import { verifyAccessToken } from '../../services/verifyJwtService.js';

const verifyJWT = (req, res, next) => {
  const authHeader = req.headers.authorization || req.headers.Authorization;

  if (!authHeader?.startsWith(CONFIG.BEARER.PREFIX)) return sendSecurityUnauthorized(res);

  const token = authHeader.split(CONFIG.AUTH_HEADER.SEPARATOR)[INDEX.START];

  verifyAccessToken(token, res, req, next);
};

export default verifyJWT;

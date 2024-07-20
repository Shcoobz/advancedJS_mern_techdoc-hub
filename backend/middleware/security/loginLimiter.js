import rateLimit from 'express-rate-limit';
import { logEvents } from '../logging/logger.js';
import { CONFIG, MSG } from '../../config/common/constants.js';

/**
 * @constant
 * @description Rate limiter configuration for login attempts.
 */
const loginLimiter = rateLimit({
  windowMs: CONFIG.RATE_LIMIT.LOGIN_RATE,
  max: CONFIG.RATE_LIMIT.LOGIN_MAX_ATTEMPTS,
  message: {
    message: MSG.LOG.ERROR.TOO_MANY_ATTEMPTS,
  },
  handler: (req, res, next, options) => {
    logEvents(MSG.LOG.ERROR.TOO_MANY_REQUESTS(options, req), CONFIG.LOG_FILES.ERROR);
    res.status(options.statusCode).send(options.message);
  },
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});

export default loginLimiter;

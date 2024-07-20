import { CONFIG } from '../common/constants.js';

/**
 * @constant
 * @description Splits the allowed origins environment variable into an array using the defined delimiter.
 */
const allowedOrigins = process.env.ALLOWED_ORIGINS.split(
  CONFIG.ALLOWED_ORIGINS.DELIMITER
);

export default allowedOrigins;

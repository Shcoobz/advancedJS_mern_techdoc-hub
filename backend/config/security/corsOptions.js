import { INDEX, HTTP_STATUS_CODES, MSG } from '../common/constants.js';
import allowedOrigins from './allowedOrigins.js';

const corsOptions = {
  origin: (origin, callback) => {
    if (allowedOrigins.indexOf(origin) !== INDEX.NOT_FOUND || !origin) {
      callback(null, true);
    } else {
      callback(new Error(MSG.CORS.ERROR));
    }
  },
  credentials: true,
  optionsSuccessStatus: HTTP_STATUS_CODES.CLIENT.SUCCESS.OK,
};

export default corsOptions;

import { CONFIG, HTTP_STATUS_CODES } from '../config/common/constants.js';
import { logEvents } from './logger.js';

function errorHandler(err, req, res, next) {
  logEvents(
    `${err.name}: ${err.message}\t${req.method}\t${req.url}\t${req.headers.origin}`,
    CONFIG.LOG_FILES.ERROR
  );

  console.log(err.stack);

  const status = res.statusCode
    ? res.statusCode
    : HTTP_STATUS_CODES.SERVER.ERROR.INTERNAL;

  res.status(status);

  res.json({ message: err.message, isError: true });
}

export default errorHandler;

import {
  CONFIG,
  CONTENT_TYPES,
  HTTP_STATUS_CODES,
  MSG,
} from '../../config/common/constants.js';
import { logEvents } from '../logging/logger.js';

/**
 * @function errorHandler
 * @description Handles errors by logging them and sending a JSON response.
 */
export function errorHandler(err, req, res, next) {
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

/**
 * @function handleWildcardRoute
 * @description Handles all undefined routes by sending an appropriate response based on the accepted content type.
 */
export function handleWildcardRoute(req, res) {
  res.status(HTTP_STATUS_CODES.CLIENT.ERROR.NOT_FOUND);

  if (req.accepts(CONTENT_TYPES.HTML)) {
    res.sendFile(path.join(__dirname, ...CONFIG.PATH.VIEWS_DIR, CONFIG.PATH.ERROR_HTML));
  } else if (req.accepts(CONTENT_TYPES.JSON)) {
    res.json({ message: MSG.SERVER.NOT_FOUND });
  } else {
    res.type(CONTENT_TYPES.TEXT).send(MSG.SERVER.NOT_FOUND);
  }
}

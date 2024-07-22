import path from 'path';
import { fileURLToPath } from 'url';
import { logEvents } from '../logging/logger.js';
import {
  CONFIG,
  CONTENT_TYPES,
  HTTP_STATUS_CODES,
  MSG,
} from '../../config/common/constants.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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
  console.log('__dirname in handleWildcardRoute:', __dirname);

  const viewsDirPath = path.join(__dirname, ...CONFIG.PATH.VIEWS_DIR);
  const errorHtmlPath = path.join(viewsDirPath, CONFIG.PATH.ERROR_HTML);

  console.log('Constructed views directory path:', viewsDirPath);
  console.log('Constructed error HTML path:', errorHtmlPath);

  res.status(HTTP_STATUS_CODES.CLIENT.ERROR.NOT_FOUND);

  if (req.accepts(CONTENT_TYPES.HTML)) {
    console.log('Sending HTML file from path:', errorHtmlPath);
    res.sendFile(path.join(errorHtmlPath));
  } else if (req.accepts(CONTENT_TYPES.JSON)) {
    res.json({ message: MSG.SERVER.NOT_FOUND });
  } else {
    res.type(CONTENT_TYPES.TEXT).send(MSG.SERVER.NOT_FOUND);
  }
}

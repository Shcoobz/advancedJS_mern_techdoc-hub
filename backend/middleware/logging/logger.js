import fs from 'fs';
import path from 'path';

import { format } from 'date-fns';
import { v4 as uuid } from 'uuid'; // v4: just random ID
import { promises as fsPromises } from 'fs';

import { __dirname } from '../../config/common/utils.js';
import { CONFIG } from '../../config/common/constants.js';

/**
 * @function logEvents
 * @description Logs events to a specified file with a timestamp and unique ID.
 */
async function logEvents(message, logFileName) {
  const dateTime = format(new Date(), CONFIG.DATE_SETTING.FORMAT);
  const logItem = `${dateTime}\t${uuid()}\t${message}\n`;
  const logDirPath = path.join(__dirname, ...CONFIG.PATH.LOGS_DIR);

  try {
    if (!fs.existsSync(logDirPath)) {
      await fsPromises.mkdir(logDirPath);
    }

    await fsPromises.appendFile(path.join(logDirPath, logFileName), logItem);
  } catch (err) {
    console.log(err);
  }
}

/**
 * @function logger
 * @description Middleware function to log HTTP requests.
 */
function logger(req, res, next) {
  // TODO: add conditionals for not logging own url

  logEvents(`${req.method}\t${req.url}\t${req.headers.origin}`, CONFIG.LOG_FILES.REQUEST);
  console.log(`${req.method} ${req.path}`);
  next();
}

export { logEvents, logger };

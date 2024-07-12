import { format } from 'date-fns';
import { v4 as uuid } from 'uuid'; // v4: just random ID

import fs from 'fs';
import { promises as fsPromises } from 'fs';
import path from 'path';

import { __dirname } from '../../config/common/utils.js';

async function logEvents(message, logFileName) {
  const dateTime = format(new Date(), 'ddMMyyyy\tHH:mm:ss');
  const logItem = `${dateTime}\t${uuid()}\t${message}\n`;

  try {
    if (!fs.existsSync(path.join(__dirname, '..', 'logs'))) {
      await fsPromises.mkdir(path.join(__dirname, '..', 'logs'));
    }

    await fsPromises.appendFile(path.join(__dirname, '..', 'logs', logFileName), logItem);
  } catch (err) {
    console.log(err);
  }
}

function logger(req, res, next) {
  // TODO: add conditionals for not logging own url before deployment

  logEvents(`${req.method}\t${req.url}\t${req.headers.origin}`, 'reqLog.log');
  console.log(`${req.method} ${req.path}`);
  next();
}

export { logEvents, logger };

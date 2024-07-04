const { format } = require('date-fns');
const { v4: uuid } = require('uuid'); // v4: just random ID

const fs = require('fs');
const fsPromises = require('fs').promises;
const path = require('path');

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

module.exports = { logEvents, logger };

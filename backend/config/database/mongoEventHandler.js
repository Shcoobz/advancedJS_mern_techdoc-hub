import mongoose from 'mongoose';
import { logEvents } from '../../middleware/logging/logger.js';
import { CONFIG, MONGO_EVENTS, MSG } from '../common/constants.js';

/**
 * @function handleMongoOpen
 * @description Sets up an event listener for the MongoDB connection 'open' event and starts the server.
 * @param {Object} app - The Express application instance.
 * @param {number} PORT - The port number on which the server will listen.
 * @param {string} LOCAL_URL - The local URL for the server.
 */
export function handleMongoOpen(app, PORT, LOCAL_URL) {
  mongoose.connection.once(MONGO_EVENTS.OPEN, () => {
    app.listen(PORT, () => {
      const isProduction = process.env.NODE_ENV === CONFIG.NODE_ENV;
      const url = isProduction ? LOCAL_URL : `${LOCAL_URL}:${PORT}`;

      console.log(MSG.SERVER.LOG.START(PORT, url));
    });
  });
}

/**
 * @function handleMongoError
 * @description Sets up an event listener for the MongoDB connection 'error' event and logs the error.
 */
export function handleMongoError() {
  mongoose.connection.on(MONGO_EVENTS.ERROR, (err) => {
    console.log(err);
    logEvents(
      `${err.no}: ${err.code}\t${err.syscall}\t${err.hostname}`,
      CONFIG.LOG_FILES.MONGO_ERROR
    );
  });
}

/**
 * @function handleMongoDisconnected
 * @description Sets up an event listener for the MongoDB connection 'disconnected' event and logs the disconnection.
 */
export function handleMongoDisconnected() {
  mongoose.connection.on(MONGO_EVENTS.DISCONNECTED, () => {
    console.log(MSG.SERVER.LOG.DISCONNECTED);
  });
}

/**
 * @function handleMongoReconnected
 * @description Sets up an event listener for the MongoDB connection 'reconnected' event and logs the reconnection.
 */
export function handleMongoReconnected() {
  mongoose.connection.on(MONGO_EVENTS.RECONNECTED, () => {
    console.log(MSG.SERVER.LOG.RECONNECTED);
  });
}

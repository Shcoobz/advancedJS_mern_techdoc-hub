import mongoose from 'mongoose';
import { logEvents } from '../../middleware/logging/logger.js';
import { CONFIG, MONGO_EVENTS, MSG } from '../common/constants.js';

export function handleMongoOpen(app, PORT, LOCAL_URL) {
  mongoose.connection.once(MONGO_EVENTS.OPEN, () => {
    app.listen(PORT, () => console.log(MSG.SERVER.LOG.START(PORT, LOCAL_URL)));
  });
}

export function handleMongoError() {
  mongoose.connection.on(MONGO_EVENTS.ERROR, (err) => {
    console.log(err);
    logEvents(
      `${err.no}: ${err.code}\t${err.syscall}\t${err.hostname}`,
      CONFIG.LOG_FILES.MONGO_ERROR
    );
  });
}

export function handleMongoDisconnected() {
  mongoose.connection.on(MONGO_EVENTS.DISCONNECTED, () => {
    console.log(MSG.SERVER.LOG.DISCONNECTED);
  });
}

export function handleMongoReconnected() {
  mongoose.connection.on(MONGO_EVENTS.RECONNECTED, () => {
    console.log(MSG.SERVER.LOG.RECONNECTED);
  });
}

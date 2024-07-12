import 'express-async-errors';
import 'dotenv/config';
import express from 'express';
import path from 'path';
import { logger, logEvents } from './middleware/logging/logger.js';
import errorHandler from './middleware/errorHandling/errorHandler.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import corsOptions from './config/security/corsOptions.js';
import connectDB from './config/database/dbConn.js';
import mongoose from 'mongoose';

import { __dirname } from './config/common/utils.js';

import rootRouter from './routes/root.js';
import authRouter from './routes/authRoutes.js';
import userRouter from './routes/userRoutes.js';
import noteRouter from './routes/noteRoutes.js';
import {
  CONFIG,
  CONTENT_TYPES,
  MONGO_EVENTS,
  MSG,
  ROUTE,
} from './config/common/constants.js';

const PORT = process.env.PORT || 3500;
const HTTP_LOCALHOST = process.env.HTTP_LOCALHOST;
const LOCAL_URL = `${HTTP_LOCALHOST}:${PORT}`;

const app = express();

connectDB();

app.use(logger);

app.use(cors(corsOptions));

app.use(express.json());

app.use(cookieParser());

app.use(
  ROUTE.SERVER.ROOT,
  express.static(path.join(__dirname, ...CONFIG.PATH.PUBLIC_DIR))
);

app.use(ROUTE.SERVER.ROOT, rootRouter);
app.use(ROUTE.SERVER.AUTH, authRouter);
app.use(ROUTE.SERVER.USERS, userRouter);
app.use(ROUTE.SERVER.NOTES, noteRouter);

app.all('*', (req, res) => {
  res.status(404);

  if (req.accepts(CONTENT_TYPES.HTML)) {
    res.sendFile(path.join(__dirname, ...CONFIG.PATH.VIEWS_DIR, CONFIG.PATH.ERROR_HTML));
  } else if (req.accepts(CONTENT_TYPES.JSON)) {
    res.json({ message: MSG.SERVER.NOT_FOUND });
  } else {
    res.type(CONTENT_TYPES.TEXT).send(MSG.SERVER.NOT_FOUND);
  }
});

app.use(errorHandler);

mongoose.connection.once(MONGO_EVENTS.OPEN, () => {
  app.listen(PORT, () => console.log(MSG.SERVER.LOG.START(PORT, LOCAL_URL)));
});

mongoose.connection.on(MONGO_EVENTS.ERROR, (err) => {
  console.log(err);
  logEvents(
    `${err.no}: ${err.code}\t${err.syscall}\t${err.hostname}`,
    CONFIG.LOG_FILES.MONGO_ERROR
  );
});

mongoose.connection.on(MONGO_EVENTS.DISCONNECTED, () => {
  console.log(MSG.SERVER.LOG.DISCONNECTED);
});

mongoose.connection.on(MONGO_EVENTS.RECONNECTED, () => {
  console.log(MSG.SERVER.LOG.RECONNECTED);
});

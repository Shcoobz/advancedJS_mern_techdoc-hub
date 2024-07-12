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

const PORT = process.env.PORT || 3500;
const HTTP_LOCALHOST = process.env.HTTP_LOCALHOST;
const LOCAL_URL = `${HTTP_LOCALHOST}:${PORT}`;

const app = express();

connectDB();

app.use(logger);

app.use(cors(corsOptions));

app.use(express.json());

app.use(cookieParser());

app.use('/', express.static(path.join(__dirname, 'public')));

app.use('/', rootRouter);
app.use('/auth', authRouter);
app.use('/users', userRouter);
app.use('/notes', noteRouter);

app.all('*', (req, res) => {
  res.status(404);

  if (req.accepts('html')) {
    res.sendFile(path.join(__dirname, 'views', '404.html'));
  } else if (req.accepts('json')) {
    res.json({ message: '404 Not found' });
  } else {
    res.type('txt').send('404 Not found');
  }
});

app.use(errorHandler);

mongoose.connection.once('open', () => {
  console.log('\nConnected to MongoDB!');
  app.listen(PORT, () =>
    console.log(`Server running on port ${PORT}. Visit: ${LOCAL_URL}`)
  );
});

mongoose.connection.on('error', (err) => {
  console.log(err);
  logEvents(`${err.no}: ${err.code}\t${err.syscall}\t${err.hostname}`, 'mongoErrLog.log');
});

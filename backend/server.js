import 'dotenv/config';
import express from 'express';
import path from 'path';
import { logger, logEvents } from './middleware/logger.js';
import errorHandler from './middleware/errorHandler.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import corsOptions from './config/corsOptions.js';
import connectDB from './config/dbConn.js';
import mongoose from 'mongoose';
import { fileURLToPath } from 'url';

import rootRouter from './routes/root.js';
import authRouter from './routes/authRoutes.js';
import userRouter from './routes/userRoutes.js';
import noteRouter from './routes/noteRoutes.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PORT = process.env.PORT || 3500;
const BACKEND_BASE_URL = process.env.BACKEND_BASE_URL;
const LOCAL_URL = `${BACKEND_BASE_URL}:${PORT}`;

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

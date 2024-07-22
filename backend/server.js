import 'express-async-errors';
import 'dotenv/config';
import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import corsOptions from './config/security/corsOptions.js';
import connectDB from './config/database/dbConn.js';
import rootRouter from './routes/root.js';
import authRouter from './routes/authRoutes.js';
import userRouter from './routes/userRoutes.js';
import noteRouter from './routes/noteRoutes.js';
import { CONFIG, ROUTE } from './config/common/constants.js';
import { __dirname } from './config/common/utils.js';
import { logger } from './middleware/logging/logger.js';
import {
  serveFrontendStaticFiles,
  servePublicStaticFiles,
} from './middleware/staticFileHandler.js';
import {
  errorHandler,
  handleWildcardRoute,
} from './middleware/errorHandling/errorHandler.js';
import {
  handleMongoDisconnected,
  handleMongoError,
  handleMongoOpen,
  handleMongoReconnected,
} from './config/database/mongoEventHandler.js';

const PORT = process.env.PORT || 3500;

/**
 * @constant LOCAL_URL
 * @description Constructs the local URL using the host and port from configuration.
 */
const LOCAL_URL = `${CONFIG.HTTP_LOCALHOST}`;

/**
 * @constant app
 * @description Main Express application instance setup and configuration.
 */
const app = express();

connectDB();

app.use(logger);
app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());

app.use(ROUTE.SERVER.ROOT, serveFrontendStaticFiles());
app.use(ROUTE.SERVER.ROOT, servePublicStaticFiles());

app.use(ROUTE.SERVER.ROOT, rootRouter);
app.use(ROUTE.SERVER.AUTH, authRouter);
app.use(ROUTE.SERVER.USERS, userRouter);
app.use(ROUTE.SERVER.NOTES, noteRouter);

app.get('*', (req, res) => {
  res.sendFile(
    path.resolve(__dirname, ...CONFIG.PATH.FRONTEND_DIR, CONFIG.PATH.INDEX_HTML)
  );
});

app.all(ROUTE.SERVER.WILDCARD, handleWildcardRoute);

app.use(errorHandler);

handleMongoOpen(app, PORT, LOCAL_URL);
handleMongoError();
handleMongoDisconnected();
handleMongoReconnected();

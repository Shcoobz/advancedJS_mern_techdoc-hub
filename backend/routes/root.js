import express from 'express';
import path from 'path';

import { __dirname } from '../config/common/utils.js';
import { CONFIG } from '../config/common/constants.js';

/**
 * @constant router
 * @description Express router for serving the index.html file.
 */
const router = express.Router();

router.get('^/$|/index(.html)?', (req, res) => {
  res.sendFile(path.join(__dirname, ...CONFIG.PATH.VIEWS_DIR, CONFIG.PATH.INDEX_HTML));
});

export default router;

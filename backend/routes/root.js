import express from 'express';
import path from 'path';

import { __dirname } from '../config/utils.js';

const router = express.Router();

router.get('^/$|/index(.html)?', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'views', 'index.html'));
});

export default router;

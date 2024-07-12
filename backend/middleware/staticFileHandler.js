import express from 'express';
import path from 'path';
import { __dirname } from '../config/common/utils.js';
import { CONFIG } from '../config/common/constants.js';

export function servePublicStaticFiles() {
  return express.static(path.join(__dirname, ...CONFIG.PATH.PUBLIC_DIR));
}

export const serveFrontendStaticFiles = () => {
  return express.static(path.join(__dirname, ...CONFIG.PATH.FRONTEND_DIR));
};

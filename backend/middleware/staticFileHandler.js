import express from 'express';
import path from 'path';
import { __dirname } from '../config/common/utils.js';
import { CONFIG } from '../config/common/constants.js';

/**
 * @function servePublicStaticFiles
 * @description Serves static files from the public directory.
 */
export function servePublicStaticFiles() {
  return express.static(path.join(__dirname, ...CONFIG.PATH.PUBLIC_DIR));
}

/**
 * @function serveFrontendStaticFiles
 * @description Serves static files from the frontend directory.
 */
export const serveFrontendStaticFiles = () => {
  return express.static(path.join(__dirname, ...CONFIG.PATH.FRONTEND_DIR));
};

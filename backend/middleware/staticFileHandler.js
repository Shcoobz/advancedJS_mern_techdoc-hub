import express from 'express';
import path from 'path';
import { __dirname } from '../config/common/utils.js';
import { CONFIG } from '../config/common/constants.js';

/**
 * @function servePublicStaticFiles
 * @description Serves static files from the public directory.
 */
export function servePublicStaticFiles() {
  const publicPath = path.resolve(__dirname, ...CONFIG.PATH.PUBLIC_DIR);

  return express.static(publicPath);
}

/**
 * @function serveFrontendStaticFiles
 * @description Serves static files from the frontend directory.
 */
export function serveFrontendStaticFiles() {
  const frontendPath = path.resolve(__dirname, ...CONFIG.PATH.FRONTEND_DIR);

  return express.static(frontendPath);
}

/**
 * @function serveIndexHtml
 * @description Serves the index.html file for client-side routing.
 */
export const serveIndexHtml = (req, res) => {
  const indexPath = path.resolve(__dirname, ...CONFIG.PATH.INDEX_DIR);

  res.sendFile(indexPath);
};

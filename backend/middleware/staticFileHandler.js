import express from 'express';
import path from 'path';
import { __dirname } from '../config/common/utils.js';
import { CONFIG } from '../config/common/constants.js';

/**
 * @function servePublicStaticFiles
 * @description Serves static files from the public directory.
 */
export function servePublicStaticFiles() {
  // return express.static(path.join(__dirname, ...CONFIG.PATH.PUBLIC_DIR));

  const publicPath = path.join(__dirname, ...CONFIG.PATH.PUBLIC_DIR);

  console.log('Serving public static files from:', publicPath);

  return express.static(publicPath);
}

/**
 * @function serveFrontendStaticFiles
 * @description Serves static files from the frontend directory.
 */
export function serveFrontendStaticFiles() {
  // return express.static(path.join(__dirname, ...CONFIG.PATH.FRONTEND_DIR));

  const frontendPath = path.join(__dirname, ...CONFIG.PATH.FRONTEND_DIR);

  console.log('Serving frontend static files from:', frontendPath);

  return express.static(frontendPath);
}

/**
 * @function serveIndexHtml
 * @description Serves the index.html file for client-side routing.
 */
export const serveIndexHtml = (req, res) => {
  // res.sendFile(
  //   path.resolve(__dirname, ...CONFIG.PATH.FRONTEND_DIR, CONFIG.PATH.INDEX_HTML)
  // );

  const indexPath = path.resolve(
    __dirname,
    ...CONFIG.PATH.FRONTEND_DIR,
    CONFIG.PATH.INDEX_HTML
  );

  console.log('Serving index.html from:', indexPath);

  res.sendFile(indexPath);
};

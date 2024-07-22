import express from 'express';
import path from 'path';
import { __dirname } from '../config/common/utils.js';
import { CONFIG } from '../config/common/constants.js';

/**
 * @function servePublicStaticFiles
 * @description Serves static files from the public directory.
 */
export function servePublicStaticFiles() {
  // const publicPath = path.join(__dirname, ...CONFIG.PATH.STATIC_PUBLIC_DIR);
  const publicPath = path.resolve(__dirname, '..', '..', 'public');

  console.log('__dirname in servePublicStaticFiles:', __dirname);
  console.log('Constructed public path:', publicPath);
  console.log('Serving public static files from:', publicPath);

  return express.static(publicPath);
}

/**
 * @function serveFrontendStaticFiles
 * @description Serves static files from the frontend directory.
 */
export function serveFrontendStaticFiles() {
  // const frontendPath = path.join(__dirname, ...CONFIG.PATH.STATIC_FRONTEND_DIR);
  const frontendPath = path.resolve(__dirname, '..', '..', '..', 'frontend', 'dist');

  console.log('__dirname in serveFrontendStaticFiles:', __dirname);
  console.log('Constructed frontend path:', frontendPath);
  console.log('Serving frontend static files from:', frontendPath);

  return express.static(frontendPath);
}

/**
 * @function serveIndexHtml
 * @description Serves the index.html file for client-side routing.
 */
export const serveIndexHtml = (req, res) => {
  // const indexPath = path.resolve(__dirname, ...CONFIG.PATH.STATIC_INDEX_PATH);
  const indexPath = path.resolve(__dirname, '..', 'frontend', 'dist', 'index.html');

  console.log('__dirname in serveIndexHtml:', __dirname);
  console.log('Constructed index path:', indexPath);
  console.log('Serving index.html from:', indexPath);

  res.sendFile(indexPath);
};

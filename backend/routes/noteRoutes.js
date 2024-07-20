import express from 'express';
import verifyJWT from '../middleware/security/verifyJWT.js';
import { ROUTE } from '../config/common/constants.js';
import {
  getAllNotes,
  createNewNote,
  updateNote,
  deleteNote,
} from '../controllers/notesController.js';

/**
 * @constant router
 * @description Express router for note routes, with JWT verification middleware.
 */
const router = express.Router();

router.use(verifyJWT);

router
  .route(ROUTE.NOTE.ROOT)
  .get(getAllNotes)
  .post(createNewNote)
  .patch(updateNote)
  .delete(deleteNote);

export default router;

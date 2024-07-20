import express from 'express';
import verifyJWT from '../middleware/security/verifyJWT.js';
import { ROUTE } from '../config/common/constants.js';
import {
  getAllUsers,
  createNewUser,
  updateUser,
  deleteUser,
} from '../controllers/usersController.js';

/**
 * @constant router
 * @description Express router for user routes, with JWT verification middleware.
 */
const router = express.Router();

router.use(verifyJWT);

router
  .route(ROUTE.USER.ROOT)
  .get(getAllUsers)
  .post(createNewUser)
  .patch(updateUser)
  .delete(deleteUser);

export default router;

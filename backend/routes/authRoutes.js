import express from 'express';
import { login, refresh, logout } from '../controllers/authController.js';
import { ROUTE } from '../config/common/constants.js';
import loginLimiter from '../middleware/security/loginLimiter.js';

const router = express.Router();

router.route(ROUTE.AUTH.ROOT).post(loginLimiter, login);
router.route(ROUTE.AUTH.REFRESH).get(refresh);
router.route(ROUTE.AUTH.LOGOUT).post(logout);

export default router;

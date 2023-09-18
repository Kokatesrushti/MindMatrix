import express, { Router, Request, Response } from 'express';
import { body } from 'express-validator';
import { getUser, userDashboard } from '../controllers/UserController';
import fetchUser from '../middlewares/fetchUser';

const router: Router = express.Router();

router.get('/dashboard', userDashboard);

router.get('/getuser', fetchUser, getUser);

export default router;
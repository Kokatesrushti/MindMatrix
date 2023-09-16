import express, { Router, Request, Response } from 'express';
import { body } from 'express-validator';
import { login, getUser } from '../controllers/authController';
import fetchUser from '../middlewares/fetchUser';

const router: Router = express.Router();

router.post('/login', [
    body('email', "Enter a valid email").isEmail(),
    body('username', "Username cannot be blank").exists(),
    body('password', "Password cannot be blank").exists(),
], login);

router.get('/getuser', fetchUser, getUser);

export default router;
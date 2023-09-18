import express, { Router, Request, Response } from 'express';
import { body } from 'express-validator';
import { login, createUser } from '../controllers/authController';
import fetchUser from '../middlewares/fetchUser';

const router: Router = express.Router();

router.post('/createuser', [
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Password should contain atleast 5 characters').isLength({ min: 5 })
  ], createUser);

router.post('/login', [
    body('email', "Enter a valid email").isEmail(),
    body('username', "Username cannot be blank").exists(),
    body('password', "Password cannot be blank").exists(),
], login);

export default router;
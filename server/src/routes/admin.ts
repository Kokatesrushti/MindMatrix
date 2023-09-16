import express, { Router, Request, Response } from 'express';
import { body } from 'express-validator';
import { createUser } from '../controllers/adminController';
import fetchUser from '../middlewares/fetchUser';

const router: Router = express.Router();

router.post('/createuser', createUser);
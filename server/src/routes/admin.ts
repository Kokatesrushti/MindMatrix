import express, { Router, Request, Response } from 'express';
import { body } from 'express-validator';
import { createOrganization } from '../controllers/adminController';
import fetchUser from '../middlewares/fetchUser';

const router: Router = express.Router();

router.post('/createOrganization',[
    body('orgi_name', 'Enter a valid name').isLength({ min: 3 }),
  body('orgi_email', 'Enter a valid email').isEmail(),
], createOrganization);

export default router;
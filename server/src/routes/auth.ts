import express, { Router, Request, Response, NextFunction } from 'express';
import { body, validationResult } from 'express-validator';
import { login, createUser } from '../controllers/authController';

const router: Router = express.Router();

// Validation middleware for checking if errors occurred during validation
const validate = (req: Request, res: Response, next: NextFunction) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

router.post('/createuser', [
  body('username', 'Username cannot be blank').exists(),
  body('email', 'Enter a valid email').isEmail(),
  body('password', 'Password should contain at least 5 characters').isLength({ min: 5 }),
  body('age', 'Age should be a number').isInt(),
  body('organization_code').isLength({ min: 4, max: 4 }).withMessage('Code should be 4 characters long'),
], validate, createUser);

router.post('/login', [
    // body('email', "Enter a valid email").isEmail(),
    body('username', "Username cannot be blank").exists(),
    body('password', "Password cannot be blank").exists(),
], validate, login);

export default router;
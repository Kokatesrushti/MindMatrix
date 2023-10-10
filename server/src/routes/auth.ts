import express, { Router, Request, Response, NextFunction } from 'express';
import { body, validationResult } from 'express-validator';
import { login, createUser, forgotPassword, resetPassword } from '../controllers/authController';

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
  body('username', 'Username should contain at least 5 characters').isLength({ min: 5 }),
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

router.post('/forgotpassword', [
  body('email', "Enter a valid email").isEmail(),
], validate, forgotPassword);

router.post('/resetpassword', [
  body('password', 'Password should contain at least 5 characters').isLength({ min: 5 }),
], validate, resetPassword);

export default router;
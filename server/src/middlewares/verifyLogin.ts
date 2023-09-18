import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { Request, Response, NextFunction } from 'express';
import User from '../models/users';

dotenv.config({ path: '../.env' });

const JWT_SECRET: string | undefined = process.env.JWT_SECRET;

export const verifyAdmin = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const token = req.header('auth-token');

  if (!token) {
    res.status(401).json({ success: false, message: 'Access denied, no token provided' });
    return;
  }

  try {
    // Verify and decode the token
    const decoded: any = jwt.verify(token, JWT_SECRET || 'mysecret');
    //   const user = decoded.data;
    if (!decoded) {
      res.status(401).json({ success: false, message: 'Access denied, no payload provided' });
      return;
    }

    // Check if the decoded token matches the admin's username
    if (decoded && decoded.user && decoded.user.username === 'admin' && decoded.user.email === 'admin@example.com') {
      req.user = decoded.user;
      next(); // User is an admin; allow access to the route
    } else {
      res.status(403).json({ success: false, message: 'Access denied' });
    }
  } catch (error) {
    res.status(401).json({ success: false, message: 'Invalid token' });
  }
};

export const verifyUser = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const token = req.header('auth-token');

  if (!token) {
    res.status(401).json({ success: false, message: 'Access denied, no token provided' });
    return;
  }

  try {
    // Verify and decode the token
    const data: any = jwt.verify(token, JWT_SECRET || 'mysecret');
    //   const user = decoded.data;
    if (!data) {
      res.status(401).json({ success: false, message: 'Access denied, no payload provided' });
      return;
    }
    // Check if the decoded token matches the user's username
    const user = await User.findOne({ username: data.user.username, email: data.user.email });

    if (user) {
      req.user = data.user;
      next();
    } else {
      res.status(403).json({ success: false, message: 'Access denied' });
    }
  } catch (error) {
    res.status(401).json({ success: false, message: 'Invalid token' });
  }
};  
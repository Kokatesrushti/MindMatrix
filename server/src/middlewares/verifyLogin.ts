import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { Request, Response, NextFunction } from 'express';
import User from '../models/users';

dotenv.config({ path: '../.env' });

// const JWT_SECRET: string | undefined = process.env.JWT_SECRET;

export const verifyAdmin = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const token = req.header('authtoken');

  if (!token) {
    res.status(401).json({ success: false, message: 'Access denied, no token provided' });
    return;
  }

  try {
    // Verify and decode the token
    const decoded: any = jwt.verify(token, 'mysecret'); //process.env.JWT_SECRET as string
    //   const user = decoded.data;
    if (!decoded) {
      res.status(401).json({ success: false, message: 'Access denied, no payload provided' });
      return;
    }

    if (decoded.exp < Date.now() / 1000) {
      res.status(401).json({ error: 'Token has expired' });
      return;
    }

    const user = await User.findOne({ username: decoded.user.username, email: decoded.user.email });


    // Check if the decoded token matches the admin's username
    if (user && decoded.user && decoded.user.username === 'admin' && decoded.user.email === 'admin@example.com') {
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
  const token = req.header('authtoken');

  if (!token) {
    res.status(401).json({ success: false, message: 'Access denied, no token provided' });
    return;
  }

  // res.status(200).json({ success: false, message: jwt.verify(token, JWT_SECRET || 'mysecret') });
  try {
    // Verify and decode the token
    const data: any = jwt.verify(token, 'mysecret'); //process.env.JWT_SECRET as string
    //   const user = decoded.data;
    if (!data) {
      res.status(401).json({ success: false, message: 'Access denied, no payload provided' });
      return;
    }

    if (data.exp < Date.now() / 1000) {
      res.status(401).json({ error: 'Token has expired' });
      return;
    }

    // Check if the decoded token matches the user's username
    const user = await User.findOne({ username: data.user.username, email: data.user.email });

    if (user?.username === 'admin' && user.email === 'admin@example.com') {
      res.status(401).json({ success: false, message: 'You are not a user, but an admin' });
      return;
    }
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
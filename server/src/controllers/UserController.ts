import { Request, Response } from 'express';
import User from '../models/users'; // Assuming you have a User model
import {signToken} from '../utils/token';
import { validationResult } from 'express-validator';

export async function getUser(req: Request, res: Response): Promise<void> {
    try {
      // Finding user to fetch
      const user = await User.findOne({
        username: req.user.username,
        email: req.user.email,
      }).select('-password');
  
      if (!user) {
        res.status(400).json({ error: 'No user found with request object' });
        return;
      }
  
      // Response
      res.status(200).json({
        status: 'success',
        results: user ? 1 : 0,
        data: {
          user,
        },
      });
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal server error');
    }
  };

  export const userDashboard = (req: Request, res: Response): void => {
    res.status(200).json('Chillaxxx');
  };


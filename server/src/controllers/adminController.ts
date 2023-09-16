import { Request, Response } from 'express';
import User from '../models/users'; // Assuming you have a User model
import signToken from '../utils/token';
import { validationResult } from 'express-validator';

export async function createUser (req: Request, res: Response): Promise<any>{
    let success = false;
  
    // If there are validation errors, return a bad request with the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
  
    try {
      const { org_email, num_ids } = req.body;
  
      // Create a random password for the organization
      const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
      let newPassword = '';
      for (let i = 0; i < 8; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        newPassword += charset.charAt(randomIndex);
      }
  
      // Create num_ids usernames for the organization and save them
      for (let i = 0; i < num_ids; i++) {
        let uname = '';
        for (let j = 0; j < 8; j++) {
          const randomIndex = Math.floor(Math.random() * charset.length);
          uname += charset.charAt(randomIndex);
        }
  
        // Create and save a new user document
        const user = new User({
          username: uname,
          email: org_email,
          password: newPassword,
        });
        await user.save();
      }
  
      // Response
      success = true;
      res.status(201).json({ success });
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal server error');
    }
  };
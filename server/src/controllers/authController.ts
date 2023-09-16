import { Request, Response } from 'express';
import User from '../models/users'; // Assuming you have a User model
import * as bcrypt from 'bcryptjs';
import signToken from '../utils/token';
import { validationResult } from 'express-validator';

const saltRounds = 10;

export async function login(req: Request, res: Response): Promise<any> {
  let success = false;

  // If there are validation errors, return bad request and the errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400).json({ errors: errors.array() });
    return;
  }

  try {
    const { org_email, username, password } = req.body;

    // Finding if user exists
    const user = await User.findOne({ org_email, username });
    if (!user) {
      res.status(400).json({ success, error: 'Please try to login with correct credentials' });
      return;
    }

    // Matching user password
    const passwordCompare = await bcrypt.compare(password, user.password);
    if (!passwordCompare) {
      res.status(400).json({ success, error: 'Please try to login with correct credentials' });
      return;
    }

    // Token authentication using JWT
    const authtoken = signToken(user.org_email, user.username);

    // Response
    success = true;
    res.status(200).json({ success, authtoken });
    return;
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal server error');
    return;
  }
};

export async function getUser(req: Request, res: Response): Promise<any> {
  try {
    // Finding user to fetch
    const userEmail: string = req.user.org_email;
    const userUsername: string = req.user.username;

    if (!userEmail || !userUsername) {
      res.status(400).json({ error: 'Please try to login with correct credentials' });
      return;
    }

    const user = await User.findOne({
      username: userUsername,
      email: userEmail,
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

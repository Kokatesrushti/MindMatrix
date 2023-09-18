import { Request, Response } from 'express';
import Organization from '../models/organizations'; // Assuming you have a User model
import {signToken} from '../utils/token';
import { validationResult } from 'express-validator';

export async function createOrganization(req: Request, res: Response): Promise<any> {
  let success = false;

  // If there are validation errors, return a bad request with the errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const { orgi_name, orgi_email } = req.body;

    const charset = '0123456789';
    // Create num_ids usernames for the organization and save them

    let orgi_code = '';
    for (let j = 0; j < 4; j++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      orgi_code += charset.charAt(randomIndex);
    }

    // Create and save a new user document
    const Org = new Organization({
      org_name: orgi_name,
      org_email: orgi_email,
      org_code: orgi_code,
    });
    await Org.save();

    // Response
    success = true;
    res.status(201).json({ success });
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal server error');
  }
};

export const adminDashboard = (req: Request, res: Response): void => {
  res.status(200).json('Chillaxxx admin');
};
import { Request, Response } from 'express';
import Organization from '../models/organizations';
import User from '../models/users';
import { signToken } from '../utils/token';
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

export async function getAllOrg(req: Request, res: Response): Promise<any> {
  let success = false;
  try {
    // Create and save a new user document
    const orgs = await Organization.find(); // Fetch all documents from the 'users' collection

    // Response
    success = true;
    res.status(201).json({ success, orgs });
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal server error');
  }
};

export async function getUsersOrg(req: Request, res: Response): Promise<any> {
  try {
    const { org_name, org_email, org_code } = req.body;

    const usersPerOrg = await User.find({ org_code: org_code });
    const Org = await Organization.findOne({ org_name: org_name, org_email: org_email });

    if (!usersPerOrg) {
      res.status(404).send('No users found');
      return;
    }

    const totalUsers = usersPerOrg.length;

    res.status(200).json({ Org, usersPerOrg, totalUsers });
  } catch (error) {
    console.error('Error finding users:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

export async function getUserInfo(req: Request, res: Response): Promise<any> {
  try {
    const { username, email } = req.body;

    const user = await User.find({
      username: username,
      email: email
    }).select('-_id -password');

    res.status(200).json({ success: true, user });
  } catch (error) {
    console.error('Error finding the user:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

export async function getOrganization(req: Request, res: Response): Promise<any> {
  let success = false;

  // If there are validation errors, return a bad request with the errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const { orgi_name, orgi_code } = req.body;

    // Create and save a new user document
    const Orgi = await Organization.findOne({
      org_name: orgi_name,
      org_code: orgi_code,
    })

    if (!Orgi) {
      return res.status(400).json({ success, error: 'Please try with correct stuff' });
    }

    // Response
    success = true;
    res.status(201).json({ success, Orgi });
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal server error');
  }
};

export const adminDashboard = (req: Request, res: Response): void => {
  res.status(200).json('Chillaxxx admin');
};
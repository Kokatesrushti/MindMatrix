import { config } from "dotenv";
config();

import { Request, Response } from 'express';
import User from '../models/users'; // Assuming you have a User model
import * as bcrypt from 'bcryptjs';
import { signToken } from '../utils/token';
import { validationResult } from 'express-validator';

const saltRounds = 10;

export const createUser = async (req: Request, res: Response): Promise<any> => {
  let success = false;

  // If there are validation errors return bad request and the errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const { username, email, age, password, organization_code } = req.body;

    console.log(req.body)

    // check whether the user with this email exists already
    let user = await User.findOne({ username: username, email: email });
    if (user) {
      return res.status(400).json({ success, error: "User already exists" });
    }

    // Salting password
    const salt = await bcrypt.genSalt(saltRounds);
    const secPass = await bcrypt.hash(password, salt);

    // Creating a new user
    user = await User.create({
      username: username,
      email: email,
      age: age,
      password: secPass,
      org_code: organization_code,
    });

    // Token authentication using JWT
    const authtoken = signToken(user.username, user.email, user.org_code);
    console.log(authtoken)

    // Response
    success = true;
    res.status(201).json(authtoken);
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal server error");
  }
};

export async function login(req: Request, res: Response): Promise<any> {
  let success = false;

  // If there are validation errors, return bad request and the errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400).json({ errors: errors.array() });
    return;
  }

  try {
    const { username, password } = req.body;

    if (username === process.env.ADMIN_USERNAME && email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
      const authtoken = signToken(username, email, '6969');

      res.status(200).json({ success: true, userType: 'admin', authtoken });
      return;
    }

    // Finding if user exists
    const user = await User.findOne({
      username: username,
    });
    if (!user) {
      return res.status(400).json({ success, error: 'Please try to login with correct credentials' });
    }

    // Matching user password
    const passwordCompare = await bcrypt.compare(password, user.password);
    if (!passwordCompare) {
      return res.status(400).json({ success, error: 'Please try to login with correct password' });
    }

    // Token authentication using JWT
    const authtoken = signToken(user.username, user.email, user.org_code);

    // Response
    success = true;
    res.status(200).json({ success, userType: 'user', authtoken });
    return;
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal server error');
    return;
  }
};

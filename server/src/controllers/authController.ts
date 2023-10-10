import { config } from "dotenv";
config();

import { Request, Response } from 'express';
import User from '../models/users'; // Assuming you have a User model
import OrganizationModel from "../models/organizations";
import * as bcrypt from 'bcryptjs';
import { signToken } from '../utils/token';
import { validationResult } from 'express-validator';
import crypto from 'crypto';
import nodemailer from 'nodemailer';

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

    //check whether org_code exists
    let org = await OrganizationModel.findOne({ org_code: organization_code });
    if (!org) {
      return res.status(404).json({ success: false, error: "org_code not found" });
    }

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

    const AdminEmail = process.env.ADMIN_EMAIL;

    if (username === process.env.ADMIN_USERNAME && password === process.env.ADMIN_PASSWORD) {
      const authtoken = signToken(username, AdminEmail as string, '6969');

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

export async function forgotPassword(req: Request, res: Response): Promise<any> {
  try {
    const email = req.body.email;

    const token = crypto.randomBytes(20).toString('hex');

    const expiration = new Date();
    expiration.setHours(expiration.getHours() + 1);

    const resetLink = `https://yourwebsite.com/reset-password?token=${token}`;

    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: 'hissingsaint@gmail.com',
        pass: 'dhxd kbsf lcah peij',
      },
    });

    // Define email data
    const mailOptions = {
      from: 'hissingsaint@gmail.com',
      to: email,
      subject: 'Password Reset',
      text: `Click the following link to reset your password: ${resetLink}`,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ success: false, error: 'error sending email' });
      } else {
        console.log('Email sent:', info.response);
        res.status(200).json({ success: true });
      }
    });

    await User.findOneAndUpdate({ email }, { resetToken: token, resetTokenExpiry: expiration });

    res.status(200).json({ success: true });
  } catch (error) {
    res.status(500).json({ success: false, error: error });
  }
}

export async function resetPassword(req: Request, res: Response): Promise<any> {
  try {
    const { token, newPassword } = req.body;

    // Step 1: Verify if the token is valid and not expired
    const user = await User.findOne({
      username: req.body.username,
      email: req.body.email,
      resetToken: token,
      resetTokenExpiry: { $gt: new Date() }, // Check if the token is not expired
    });

    if (!user) {
      return res.status(400).json({ message: 'Invalid or expired token.' });
    }

    // Step 2: Hash the new password
    const hashedPassword = await bcrypt.hash(newPassword, saltRounds);

    // Step 3: Update the user's password and clear the reset token
    user.password = hashedPassword;
    user.resetToken = undefined;
    user.resetTokenExpiry = undefined;

    // Save the updated user document
    await user.save();

    res.status(200).json({ success: true });
  } catch (error) {
    res.status(500).json({ success: false, error: error });
  }
}
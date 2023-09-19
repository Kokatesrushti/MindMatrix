import { Request, Response } from 'express';
import nodemailer from 'nodemailer';
import User from '../models/users'; // Assuming you have a User model
// import { signToken } from '../utils/token';
// import { validationResult } from 'express-validator';

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

export async function getTestResults(req: Request, res: Response): Promise<void> {
  try {
    // Define the filter criteria
    const filter = {
      username: req.user.username,
      email: req.user.email,
      org_code: req.user.org_code,
    };

    const defaultValue: number = 0;
    // Define the update data
    const update = {
      $set: {
        TMP: req.body.TMP || defaultValue,
        CM: req.body.CM || defaultValue,
        SANT: req.body.SANT || defaultValue,
        TSTA: req.body.TSTA || defaultValue,
        OPI: req.body.OPI || defaultValue,
        MA: req.body.MA || defaultValue,
        RSM: req.body.RSM || defaultValue,
        Writing: req.body.Writing || defaultValue,
      },
    };

    // Update a single document
    const result = await User.updateOne(filter, update);

    if (result.modifiedCount > 0) {
      console.log('Document updated successfully');
      res.status(200).json({ success: true });
    } else {
      // No document was updated (possibly because the filter criteria didn't match any document)
      console.log('Document not found or not updated');
      res.status(404).json({ success: false, error: 'Document not found or not updated' });
    }
  } catch (error) {
    console.error('Error updating document:', error);
    res.status(500).json({ success: false, error: 'Internal server error' });
  }
};

export async function sendTestEmail(req: Request, res: Response): Promise<void> {
  try {
    const user = await User.findOne({ username: req.user.username, email: req.user.email });

    if (!user) {
      res.status(404).json({ message: 'user not found' });
      return;
    }
    const transporter = nodemailer.createTransport({
      service: 'Gmail', // Use the email service you prefer
      auth: {
        user: 'echelonaero@gmail.com',
        pass: 'alexeyleonov369',
      },
    });

    // Define the email content
    const mailOptions: nodemailer.SendMailOptions = {
      from: 'echelonaero@gmail.com',
      to: 'jamesgracious123@gmail.com', // The recipient's email address
      subject: 'Data from psycometric tests',
      text: 'Here is the data from MongoDB: ' + JSON.stringify(user), // Use the user data fetched from MongoDB
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Error sending email:', error);
      } else {
        console.log('Email sent:', info.response);
      }
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error });
  }
};
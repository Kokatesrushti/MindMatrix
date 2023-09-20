import { Request, Response } from 'express';
import nodemailer from 'nodemailer';
import User from '../models/users'; // Assuming you have a User model
import { UpdateWriteOpResult } from 'mongoose';
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

export async function tektest(req: Request, res: Response): Promise<void> {
  const keys = Object.keys(req.body);
  console.log(keys);
  res.status(200).json('oki');
}

export async function getTestResults(req: Request, res: Response): Promise<void> {
  try {
    // Define the filter criteria
    const filter = {
      username: req.user.username,
      email: req.user.email,
    };

    const key = Object.keys(req.body)[0];
    const value: number = req.body[key];

    // Define the update data
    const update = {
      $set: {
        [key]: value,
      },
    };

    // Update a single document
    const results = await User.updateOne(filter, update);

    if (results.acknowledged && results.modifiedCount > 0) {
      console.log('Document updated successfully');
      res.status(200).json({ success: true });
    } else {
      console.log('Document not found or not updated');
      res.status(404).json({ success: false, error: 'Document not found or not updated' });
    };

  } catch (error) {
    console.error('Error updating document:', error);
    res.status(500).json({ success: false, error: 'Internal server error' });
  }
};

export async function sendTestEmail(req: Request, res: Response): Promise<void> {
  try {
    const user = await User.findOne({
      username: req.user.username,
      email: req.user.email
    }).select('-_id TMP CM SANT TSTA OPI MA RSM Writing');

    if (!user) {
      res.status(404).json({ message: 'user not found' });
      return;
    }

    const transporter = nodemailer.createTransport({
      service: 'Gmail', // Use the email service you prefer
      auth: {
        user: 'hissingsaint@gmail.com',
        pass: 'dhxd kbsf lcah peij',
      },
    });

    // Define the email content
    const mailOptions: nodemailer.SendMailOptions = {
      from: 'hissingsaint@gmail.com',
      to: req.user.email, // The recipient's email address
      subject: 'Data from psycometric tests',
      text: 'Here is the data from MongoDB: ' + JSON.stringify(user)
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ success: false, error: 'error sending email' });
      } else {
        console.log('Email sent:', info.response);
        res.status(200).json({ success: true });
      }
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error });
  }
};
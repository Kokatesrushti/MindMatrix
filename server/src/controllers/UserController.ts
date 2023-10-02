import { Request, Response } from 'express';
import nodemailer from 'nodemailer';
import User from '../models/users'; // Assuming you have a User model
// import { UpdateWriteOpResult } from 'mongoose';
import { Chart, registerables } from 'chart.js';
import { registerFont, createCanvas } from 'canvas';
import { PDFDocument, rgb } from 'pdf-lib';
import fs from 'fs';
import { makeBarChartPdf, makeFeedbackPdf } from './pdfController';
import { getFeedback } from '../utils/feedbackFunction';
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

    const testType = req.body.testType;
    const subCategory = req.body.subCategory;
    const score = req.body.score;

    // Check if a document with the same testType exists
    const existingUser = await User.findOne(filter);

    if (existingUser) {
      // Document with the same testType exists, find it and push the subcategory
      const testResultToUpdate = existingUser.testResults.find(
        (result) => result.testType === testType
      );

      if (testResultToUpdate) {
        testResultToUpdate.subcategories.push({ name: subCategory, score: score });
      } else {
        // If there's no existing testResult for this testType, create a new one
        existingUser.testResults.push({
          testType: testType,
          subcategories: [{ name: subCategory, score: score }],
        });
      }

      // Save the updated document
      await existingUser.save();

      res.status(200).json({ success: true });
      return;
    } else {
      // If the user document doesn't exist, handle accordingly
      console.log("User not found");
      res.status(404).json({ success: false, error: "User not found" });
    }

    // if (results.acknowledged && results.modifiedCount > 0) {
    //   console.log('Document updated successfully');
    //   res.status(200).json({ success: true });
    // } else {
    //   console.log('Document not found or not updated');
    //   res.status(404).json({ success: false, error: 'Document not found or not updated' });
    // };

  } catch (error) {
    console.error('Error updating document:', error);
    res.status(500).json({ success: false, error: 'Internal server error' });
  }
};

export async function checkScore(req: Request, res: Response): Promise<void> {
  try {
    // Define the filter criteria
    const filter = {
      username: req.user.username,
      email: req.user.email,
    };

    const testType = req.body.testType;
    const subCategory = req.body.subCategory;

    // Check if a document with the same testType exists
    const existingUser = await User.findOne(filter);

    if (existingUser) {
      // Find the test result with the matching testType
      const testResult = existingUser.testResults.find((result) => result.testType === testType);

      if (testResult) {
        // Find the subcategory with the matching name and get the score
        const subcategory = testResult.subcategories.find((sub) => sub.name === subCategory);

        if (subcategory) {
          const score = subcategory.score;
          res.status(200).json({ score });
          return;
        } else {
          res.status(404).json({ message: 'Subcategory not found' });
          return;
        }
      } else {
        res.status(404).json({ message: 'TestType not found' });
        return;
      }
    } else {
      res.status(404).json({ message: 'User not found' });
      return;
    }
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
    }).select('-_id -password');

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

export async function makeFinalPdf(req: Request, res: Response): Promise<void> {
  try {

    await makeBarChartPdf(req, res, "Study Skills Set Profile", 16);
    await makeBarChartPdf(req, res, "Aptitude", 6);

    console.log('PDF modification complete.');

    res.status(200).json({ success: true });
  } catch (error) {
    console.log(error);
    res.status(500);
  }
}

export async function feedbackTest(req: Request, res: Response): Promise<void> {

  // Aptitude
  // await makeFeedbackPdf(req,res,"Aptitude","Linguistic",7,13,80,50,610);
  // await makeFeedbackPdf(req,res,"Aptitude","Numerical",7,13,80,50,280);
  // await makeFeedbackPdf(req,res,"Aptitude","Mechanical",8,13,80,50,635);
  // await makeFeedbackPdf(req,res,"Aptitude","Abstract",8,13,80,50,280);
  // await makeFeedbackPdf(req,res,"Aptitude","Spatial",9,13,80,50,610);
  // await makeFeedbackPdf(req,res,"Aptitude","Logical",9,13,80,50,270);

  // Multiple Intelligence
  // await makeFeedbackPdf(req,res,"Multiple Intelligence","Linguistic",11,13,85,80,610);
  // await makeFeedbackPdf(req,res,"Multiple Intelligence","Logical",11,13,80,85,292);
  // await makeFeedbackPdf(req,res,"Multiple Intelligence","Spatial",12,13,80,90,617);
  // await makeFeedbackPdf(req,res,"Multiple Intelligence","Interpersonal",12,13,80,90,291);
  // await makeFeedbackPdf(req,res,"Multiple Intelligence","Musical",13,13,80,90,617);
  // await makeFeedbackPdf(req,res,"Multiple Intelligence","Naturalistic",13,13,80,90,320);
  // await makeFeedbackPdf(req,res,"Multiple Intelligence","Kinesthetic",14,13,80,90,617);
  // await makeFeedbackPdf(req,res,"Multiple Intelligence","Intrapersonal",14,13,80,90,334);

  //Study Skills Set Profile
  // await makeFeedbackPdf(req,res,"Study Skills Set Profile","Time Management and Procrastination",17,14,80,50,610);
  // await makeFeedbackPdf(req,res,"Study Skills Set Profile","Concentration and Memory",17,14,80,50,390);
  // await makeFeedbackPdf(req,res,"Study Skills Set Profile","Study Aids and Note-Taking",17,14,80,50,150);
  // await makeFeedbackPdf(req,res,"Study Skills Set Profile","Test Strategies and Test Anxiety",18,14,80,50,610);
  // await makeFeedbackPdf(req,res,"Study Skills Set Profile","Organizing and Processing Information",18,14,80,50,390);
  // await makeFeedbackPdf(req,res,"Study Skills Set Profile","Motivation and Attitude",18,14,80,50,150);
  // await makeFeedbackPdf(req,res,"Study Skills Set Profile","Reading and Selecting the Main Idea",19,14,80,40,605);
  // await makeFeedbackPdf(req,res,"Study Skills Set Profile","Writing",19,14,80,40,290);

  //Emotional Intelligence
  // await makeFeedbackPdf(req,res,"Emotional Intelligence","Self-Awareness",29,14,80,40,620);
  // await makeFeedbackPdf(req,res,"Emotional Intelligence","Managing Emotions",29,14,80,40,390);
  // await makeFeedbackPdf(req,res,"Emotional Intelligence","Motivating oneself",29,14,80,40,150);
  // await makeFeedbackPdf(req,res,"Emotional Intelligence","Empathy",30,14,80,40,620);
  // await makeFeedbackPdf(req,res,"Emotional Intelligence","Social Skill",30,14,80,40,350);

  //Personality
  // await makeFeedbackPdf(req,res,"Personality","Openness",25,14,80,40,350);
  // await makeFeedbackPdf(req,res,"Personality","Conscientiousness",25,14,80,40,350);
  // await makeFeedbackPdf(req,res,"Personality","Extroversion",26,14,80,40,350);
  // await makeFeedbackPdf(req,res,"Personality","Agreeableness",26,14,80,40,350);
  // await makeFeedbackPdf(req,res,"Personality","Neuroticism",27,14,80,40,350);

  //Learning Style
  // await makeFeedbackPdf(req,res,"Learning Style","Visual",32,13,80,40,620);
  // await makeFeedbackPdf(req,res,"Learning Style","Auditory",32,13,84,40,455);
  // await makeFeedbackPdf(req,res,"Learning Style","Kinesthetic",32,13,80,40,230);

  //Leadership Style
  // await makeFeedbackPdf(req,res,"Leadership Style","Authoritative",35,13,80,40,600);
  // await makeFeedbackPdf(req,res,"Leadership Style","Democratic",35,13,80,40,270);
  // await makeFeedbackPdf(req,res,"Leadership Style","Facilitative",36,13,80,35,580);
  // await makeFeedbackPdf(req,res,"Leadership Style","Situational",36,13,80,35,280);

  //Competitive State Anxiety Inventory
  // await makeFeedbackPdf(req,res,"Competitive State Anxiety Inventory","Cognitive Anxiety",39,13,80,35,620);
  // await makeFeedbackPdf(req,res,"Competitive State Anxiety Inventory","Somatic Anxiety",39,13,80,35,415);
  // await makeFeedbackPdf(req,res,"Competitive State Anxiety Inventory","Self-Confidence",39,13,80,35,190);

  //Students wheel of life
  // await makeFeedbackPdf(req,res,"Students Wheel of Life","Academic Competency",21,13,80,40,580);
  // await makeFeedbackPdf(req,res,"Students Wheel of Life","Health & Fitness",21,13,80,40,540);
  // await makeFeedbackPdf(req,res,"Students Wheel of Life","Social Friends",21,13,80,40,500);
  // await makeFeedbackPdf(req,res,"Students Wheel of Life","Discipline",21,13,80,40,460);
  // await makeFeedbackPdf(req,res,"Students Wheel of Life","Good Manners",21,13,80,40,420);
  // await makeFeedbackPdf(req,res,"Students Wheel of Life","Spirituality",21,13,80,40,380);
  // await makeFeedbackPdf(req,res,"Students Wheel of Life","Goal Orientation",21,13,80,40,340);
  // await makeFeedbackPdf(req,res,"Students Wheel of Life","Confidence",21,13,80,40,300);
  // await makeFeedbackPdf(req,res,"Students Wheel of Life","Responsible",21,13,80,40,260);
  // await makeFeedbackPdf(req,res,"Students Wheel of Life","Hobbies & Extracurriculars",21,13,80,40,220);

  //

  res.status(200).json({ success: true });
  return;
}

export async function carreerOptions(req: Request, res: Response): Promise<void> {
  try {
    const filter = {
      username: req.user.username,
      email: req.user.email,
    };

    const paths = req.body.carreerOptions;

    const result = await User.findOneAndUpdate(filter, { carreerOptions: paths }, { new: true });

    if (result) {
      // The update happened and a document was modified.
      res.status(200).json({success: true});
      return;
    } else {
      res.status(404).json({success: false, error: 'Document not found and not updated'});
      return;
    }

  } catch (error) {
    // Handle any other errors that might occur during the try block
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }

}
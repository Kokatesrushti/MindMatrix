import { Request, Response } from 'express';
import nodemailer from 'nodemailer';
import User from '../models/users'; // Assuming you have a User model
// import { UpdateWriteOpResult } from 'mongoose';
import fs from 'fs';
import path from 'path';
import { sendFeedback, sendUserInfo, sendCharts, sendScores } from './pdfController';
import fetchUser from '../middlewares/fetchUser';
import { resetPassword } from './authController';
// import { signToken } from '../utils/token';
// import { validationResult } from 'express-validator';

async function sendEmail(
  to: string,
  subject?: string,
  text?: string,
  attachments?: { filename: string; path: string }[]
): Promise<void> {
  // Create a transporter
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'hissingsaint@gmail.com',
      pass: 'hbxm hjuk yuxj gqwd',
    },
  });

  // Define email data
  const mailOptions: nodemailer.SendMailOptions = {
    from: 'hissingsaint@gmail.com',
    to,
    subject: subject || 'Default Subject',
    text: text || 'Default Email Text',
    attachments: attachments || [],
  };

  // Send the email
  try {
    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully');
  } catch (error) {
    console.error('Error sending email:', error);
  }
}

// Example usages
// sendEmail('recipient@example.com');
// sendEmail('recipient@example.com', 'Your Subject');
// sendEmail('recipient@example.com', 'Your Subject', 'Hello, this is the email content.');

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
  try {
    // const keys = Object.keys(req.body);
    // console.log(keys);
    sendCharts(req, res);
    res.status(200).json('oki');
  } catch (error) {
    res.status(500).json({ success: false, error: 'Internal server error' });
  }
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

export async function checkSubscores(req: Request, res: Response): Promise<void> {
  try {
    // Define the filter criteria
    const filter = {
      username: req.user.username,
      email: req.user.email,
    };

    const testType = req.body.testType;

    // Check if a document with the same testType exists
    const existingUser = await User.findOne(filter);

    if (existingUser) {
      // Find the test result with the matching testType
      const testResult = existingUser.testResults.find((result) => result.testType === testType);

      if (testResult) {
        // Find the subcategory with the matching name and get the score
        const subcategories = testResult.subcategories;

        if (subcategories) {
          res.status(200).json({ subcategories: subcategories });
          return;
        } else {
          res.status(404).json({ message: 'No subcategories found' });
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

export async function totalTests(req: Request, res: Response): Promise<void> {
  try {
    // Define the filter criteria
    const filter = {
      username: req.user.username,
      email: req.user.email,
    };

    // Check if a document with the same testType exists
    const existingUser = await User.findOne(filter);

    const testTypes = existingUser?.testResults.map(result => result.testType).filter(Boolean);

    const general: Record<string, number> = {
      "Multiple Intelligence": 8,
      "Study Skills Set Profile": 8,
      "Aptitude": 6,
      "Emotional Intelligence": 5,
      "Learning Style": 3,
      "Leadership Style": 4,
      "Competitive State Anxiety Inventory": 3,
      "Students Wheel of Life": 10,
      "Leadership skills": 1,
      "Cyber Dependency": 1,
      "Left-Right Brain Dominance": 2,
      "Personality": 5
    };

    let testTypeCount: Record<string, number> = {};
    let differenceList: Record<string, number> = {};

    if (existingUser?.testResults) {
      existingUser?.testResults.forEach(result => {
        const { testType, subcategories } = result;
        const subcategoryCount = subcategories ? subcategories.length : 0;

        if (testType) {
          if (testTypeCount[testType]) {
            testTypeCount[testType] += subcategoryCount;
          } else {
            testTypeCount[testType] = subcategoryCount;
          }
        }
      });

      // Compare testTypeCount with the general list and calculate the difference
      for (const testType in general) {
        if (general.hasOwnProperty(testType)) {
          const maxCount = general[testType];
          const count = testTypeCount[testType] || 0;
          const difference = maxCount - count;
          differenceList[testType] = difference;
        }
      }

      res.status(200).json({ success: true, differenceList: differenceList });
    } else {
      res.status(404).json({ success: false, error: "Not Found"});
    }
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

export async function sendPdfToEmail(req: Request, res: Response): Promise<void> {
  try {
    const username = req.user.username
    const email = req.user.email

    // Extract the first 5 letters from 'username' and 'email'
    const usernameFirst5 = username.slice(0, 5);
    const emailFirst5 = email.slice(0, 5);

    // Combine the first 5 letters of 'username' and 'email' to create a custom folder name
    const customFolderName = `${usernameFirst5}${emailFirst5}`;
    const filePath = `src/runningPdfs/${customFolderName}/feedback.pdf`;

    const subject = "Congrats, this is your feedback";
    const text = "check attachments";
    const attachments = [{
      filename: 'feedback.pdf',
      path: filePath,
    }];

    sendEmail(email, subject, text, attachments);

    res.status(200).json({success: true});
  } catch (error) {
    res.status(500).json({ success: false, error: error });
  }
};

export async function makeFinalPdf(req: Request, res: Response): Promise<void> {
  try {

    const username = req.user.username;
    const email = req.user.email;

    // Extract the first 5 letters from 'username' and 'email'
    const usernameFirst5 = username.slice(0, 5);
    const emailFirst5 = email.slice(0, 5);

    // Create the custom folder inside the "runningPdfs" folder
    const customFolderPath = path.join(__dirname, '..', 'runningPdfs', `${usernameFirst5}${emailFirst5}`);
    if (!fs.existsSync(customFolderPath)) {
      fs.mkdirSync(customFolderPath, { recursive: true });
    }

    

    // Copy the PDF file to the custom folder
    const sourceFolderPath = path.join(__dirname, '..', 'tp'); // Go up one level to access 'tp'
    const sourcePdfPath = path.join(sourceFolderPath, 'yay.pdf');

    const pdfFileName = 'feedback.pdf'; // Change this to your PDF file name
    const destinationPdfPath = path.join(customFolderPath, pdfFileName);
    fs.copyFileSync(sourcePdfPath, destinationPdfPath);

    await sendUserInfo(req, res);

    await sendCharts(req, res);

    await sendScores(req, res);

    await sendFeedback(req, res);

    res.status(200).json({ success: true });
  } catch (error) {
    console.log(error);
    res.status(500);
  }
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
      res.status(200).json({ success: true });
      return;
    } else {
      res.status(404).json({ success: false, error: 'Document not found and not updated' });
      return;
    }

  } catch (error) {
    // Handle any other errors that might occur during the try block
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }

}
import express, { Router, Request, Response } from 'express';
import { body, check } from 'express-validator';
import { getUser, userDashboard, getTestResults, sendTestEmail, tektest, makeFinalPdf, feedbackTest, checkScore, carreerOptions } from '../controllers/UserController';
import fetchUser from '../middlewares/fetchUser';

const router: Router = express.Router();

router.get('/dashboard', userDashboard);

router.get('/getuser', fetchUser, getUser);

router.post('/checkscore', fetchUser, checkScore);

router.post('/tektest', fetchUser, tektest);

router.post('/carreerOptions', fetchUser, carreerOptions);

router.post('/testResultToAPI', fetchUser, getTestResults); // One single route for every test result
// just use: {
//   "testType": "Study Skills Set Profile",
//   "subCategory": "Time Management and Procrastination",
//   "score": "25"
// } for req.body

router.get('/sendToEmail', fetchUser, sendTestEmail);

router.get('/makepdf', fetchUser, makeFinalPdf);

router.get('/feedbacktest', feedbackTest);

export default router;
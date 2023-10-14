import express, { Router, Request, Response } from 'express';
import { body, check } from 'express-validator';
import { getUser, userDashboard, getTestResults, sendPdfToEmail, tektest, makeFinalPdf, checkScore, carreerOptions, checkSubscores, totalTests } from '../controllers/UserController';
import fetchUser from '../middlewares/fetchUser';

const router: Router = express.Router();

router.get('/dashboard', userDashboard);

router.get('/getuser', fetchUser, getUser);

router.post('/checkscore', fetchUser, checkScore);

router.post('/checksubscore', fetchUser, checkSubscores);

router.get('/totaltests', fetchUser, totalTests);

router.get('/tektest', fetchUser, tektest);

router.post('/carreerOptions', fetchUser, carreerOptions);

router.post('/testResultToAPI', fetchUser, getTestResults); // One single route for every test result
// just use: {
//   "testType": "",
//   "subCategory": "",
//   "score": "25"
// } for req.body

router.get('/makepdf', fetchUser, makeFinalPdf);

export default router;
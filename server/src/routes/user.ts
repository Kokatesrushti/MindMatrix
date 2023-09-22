import express, { Router, Request, Response } from 'express';
import { body } from 'express-validator';
import { getUser, userDashboard, getTestResults, sendTestEmail, tektest } from '../controllers/UserController';
import fetchUser from '../middlewares/fetchUser';

const router: Router = express.Router();

router.get('/dashboard', userDashboard);

router.get('/getuser', fetchUser, getUser);

router.post('/tektest', fetchUser, tektest);

// router.post('/TMP', fetchUser, getTestResults);
// router.post('/CM', fetchUser, getTestResults);
// router.post('/SANT', fetchUser, getTestResults);
// router.post('/TSTA', fetchUser, getTestResults);
// router.post('/OPI', fetchUser, getTestResults);
// router.post('/MA', fetchUser, getTestResults);
// router.post('/RSM', fetchUser, getTestResults);
// router.post('/Writing', fetchUser, getTestResults);

router.post('/testResultToAPI', fetchUser, getTestResults); // One single route for every test result
// just use: {
//   "testType": "Study Skills Set Profile",
//   "subCategory": "Time Management and Procrastination",
//   "score": "25"
// } for req.body

router.get('/sendToEmail', fetchUser, sendTestEmail);

export default router;
import { config } from 'dotenv';
config();
import User from '../models/users';
import fs from 'fs';
import { feedbackData } from './feedback';

export function getFeedback(testType: string, subCategory: string, score: number): { feedback: string | null; percentage: string | null } {

    let scoreRange = '';
    let percentage = '';
    if (score >= 1 && score <= 8) {
        scoreRange = '1-10';
        percentage = '25%';
    } else if (score >= 9 && score <= 16) {
        scoreRange = '11-20';
        percentage = '50%';
    } else if (score >= 17 && score <= 24) {
        scoreRange = '21-30';
        percentage = '75%';
    } else if (score >= 25 && score <= 32) {
        scoreRange = '31-40';
        percentage = '100%';
    } else {
        console.error('Invalid score');
    }

    const feedback = feedbackData[testType]?.[subCategory]?.[scoreRange] ?? 'Feedback not found';

    return { feedback, percentage };
}
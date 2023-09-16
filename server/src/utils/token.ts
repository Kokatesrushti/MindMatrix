import jwt from 'jsonwebtoken';
import { config } from 'dotenv';
import path from 'path';

config({ path: './.env' });

const signToken = (org_email: string, username: string) => {
    const data = {
        user: {
            username,
            org_email,
        },
    };

    return jwt.sign(data, process.env.JWT_SECRET || '', {
        expiresIn: process.env.JWT_EXPIRES_IN || '4h', // You can provide a default value here
    });
};

export default signToken;

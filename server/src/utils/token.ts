import jwt from 'jsonwebtoken';
import { config } from 'dotenv';
import path from 'path';

config({ path: './.env' });

export function signToken ( username: string, email: string, code: string,): string {
    const data = {
        user: {
            username,
            email,
            code,
        },
    };

    return jwt.sign(data, 'mysecret', { //process.env.JWT_SECRET as string
        expiresIn: process.env.JWT_EXPIRES_IN || '4h', // You can provide a default value here
    });
};

import jwt from 'jsonwebtoken';
import { config } from 'dotenv';
import path from 'path';

config({ path: './.env' });

const signToken = ( username: string, email: string, code: string,) => {
    const data = {
        user: {
            username,
            email,
            code,
        },
    };

    return jwt.sign(data, process.env.JWT_SECRET || '', {
        expiresIn: process.env.JWT_EXPIRES_IN || '4h', // You can provide a default value here
    });
};

export default signToken;

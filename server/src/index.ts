import { config } from "dotenv";
config();

import express, { Request, Response } from "express";
import mongoose from "mongoose";
import cors from "cors";

const PORT = 5000;

const app = express();

app.use(
    cors({
        origin: "*",
    })
);
app.use(express.json());

app.get('/', (req: Request, res: Response, next) => {
    req.user = {username: 'test', org_email: 'test2'};
    res.send('indexxx');
});

const mongs = process.env.MONGO_URL;

mongoose.connect(mongs!).then(() => {
    console.log(`listening on port ${PORT}`);
    app.listen(PORT);
});
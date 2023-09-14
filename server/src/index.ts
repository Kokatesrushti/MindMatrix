import { config } from "dotenv";
config();

import express from "express";
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

app.get('/', (req, res, next) => {
    res.send('indexxx');
});

const mongs = process.env.MONGO_URL;

mongoose.connect(mongs!).then(() => {
    console.log(`listening on port ${PORT}`);
    app.listen(PORT);
});
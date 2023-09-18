import { config } from "dotenv";
config();

import express, { Request, Response } from "express";
import mongoose from "mongoose";
import cors from "cors";

import adminRoute from "./routes/admin";
import authRoute from "./routes/auth";
import userRoute from "./routes/user";
import { verifyAdmin, verifyUser } from "./middlewares/verifyLogin";

const PORT = 5000;

const app = express();

app.use(
    cors({
        origin: "*",
    })
);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/auth", authRoute);
app.use("/admin", verifyAdmin, adminRoute);
app.use("/user", verifyUser, userRoute);

app.get('/home', (req: Request, res: Response, next) => {
    res.status(200).json('indexxx');
});

const mongs = process.env.MONGO_URL;

mongoose.connect(mongs!).then(() => {
    console.log(`listening on port ${PORT}`);
    app.listen(PORT);
});
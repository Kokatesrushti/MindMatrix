import mongoose from "mongoose";

const Schema = mongoose.Schema;
// const ObjectId = mongoose.Types.ObjectId;

const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    org_code: {
        type: String,
        required: true,
    },
    TMP: {
        type: Number,
    },
    CM: {
        type: Number,
    },
    SANT: {
        type: Number,
    },
    TSTA: {
        type: Number,
    },
    OPI: {
        type: Number,
    },
    MA: {
        type: Number,
    },
    RSM: {
        type: Number,
    },
    Writing: {
        type: Number,
    },
});

const UserModel = mongoose.model("User", UserSchema);

export default UserModel;

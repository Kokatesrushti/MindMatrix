import mongoose from "mongoose";

const Schema = mongoose.Schema;
// const ObjectId = mongoose.Types.ObjectId;

const TestSchema = new Schema({
    username: {
        type: String,
        required: true,
    },
    org_email: {
        type: String,
        required: true,
    },
    test1: {
        type: Number,
    },
    test2: {
        type: Number,
    },
    test3: {
        type: Number,
    },
    test4: {
        type: Number,
    },
    test5: {
        type: Number,
    },
    test6: {
        type: Number,
    },
    test7: {
        type: Number,
    },
    test8: {
        type: Number,
    },
});

const TestModel = mongoose.model("Test", TestSchema);

export default TestModel;
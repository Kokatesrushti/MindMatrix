import mongoose from "mongoose";

const Schema = mongoose.Schema;
// const ObjectId = mongoose.Types.ObjectId;

const OrganizationSchema = new Schema({
    org_name: {
        type: String,
        required: true,
    },
    org_email: {
        type: String,
        required: true,
        unique: true,
    },
    org_code: {
        type: String,
        required: true,
        unique: true,
    },
});

const OrganizationModel = mongoose.model("Organization", OrganizationSchema);

export default OrganizationModel;

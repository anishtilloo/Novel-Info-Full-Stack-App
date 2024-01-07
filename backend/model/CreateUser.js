import mongoose from "mongoose";

// Defining Schema
const CreateUserSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
        trim: true
    },
    firstName: {
        type: String,
        required: true,
        trim: true
    },
    lastName: {
        type: String,
        required: true,
        trim: true
    },
    dateOfBirth: {
        type: Date,
        required: true,
    },
    gender: {
        type: String,
        required: false,
    },
    address: {
        type: String,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true
    },
    hobbies: [{
        type: String,
        trim: true
    }],
})

// Model
const CreateUserModel = mongoose.model("user", CreateUserSchema);

export default CreateUserModel;
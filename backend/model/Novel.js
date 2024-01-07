import mongoose from "mongoose";

// Defining Schema
const NovelSchema = new mongoose.Schema({
    novelName: {
        type: String,
        required: true,
        trim: true
    },
    novelAuthor: [{
        type: String,
        required: true,
        trim: true
    }],
    genre: [{
        type: String,
        required: true
    }],
    rating: {
        type: Number,
        required: true,
        min: 1,
        max: 10
    },
    description: {
        type: String
    },
    publishedBy: {
        type: String
    },
    noOfPages: {
        type: String
    },
    backgroundImg: {
        type: String
    },
}, {timestamps: true})

// Model
const NovelModel = mongoose.model("novel", NovelSchema);

export default NovelModel;
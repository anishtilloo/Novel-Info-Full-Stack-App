import mongoose from "mongoose";

// Defining Schema
const NovelSchema = new mongoose.Schema({
    novelName: {
        type: String,
        required: true,
        trim: true
    },
    novelAuthor: {
        type: String,
        required: true,
        trim: true
    },
    genre: [{
        type: String,
        trim: true
    }],
    rating: {
        type: Number
    },
})

// Model
const NovelModel = mongoose.model("novel", NovelSchema);

export default NovelModel;
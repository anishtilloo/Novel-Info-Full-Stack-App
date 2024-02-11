import mongoose from "mongoose";
import bcrypt from "bcrypt";

// Defining Schema
const CreateUserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true,
    },
    avatar: {
        type: String
    },
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user'
    }
    // firstName: {
    //     type: String,
    //     required: true,
    //     trim: true
    // },
    // lastName: {
    //     type: String,
    //     required: true,
    //     trim: true
    // },
    // dateOfBirth: {
    //     type: Date,
    //     required: true,
    // },
    // gender: {
    //     type: String,
    //     required: false,
    // },
    // address: {
    //     type: String,
    //     trim: true
    // },
    // hobbies: [{
    //     type: String,
    //     trim: true
    // }],
}, {timestamps: true})

// Model


// hash the password before saving
CreateUserSchema.pre('save', async (req, res, next) => {
    const user = req.body;
    if (!user.isModified('password')) {
        return next();
    }
    
    try {
        const salt = await bcrypt.genSalt();
        user.password = await bcrypt.hash(user.password, salt);
        next();
    } catch (error) {
        console.log("Error occured while hashing ", error);
        return next(error);
    }
})


// // Compare the given password with the hashed password in the database
CreateUserSchema.methods.comparePassword = async function (password) {
    return bcrypt.compare(password, this.password);
};

const CreateUserModel = mongoose.model("user", CreateUserSchema);

export default CreateUserModel;
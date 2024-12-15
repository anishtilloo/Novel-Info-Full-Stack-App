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
// CreateUserSchema.pre('save', async (next) => {
//     console.log('req.body', this._reqBody);
//     try {
//         if (this.isNew) {
//             const salt = await bcrypt.genSalt(10)
//             const hashedPassword = await bcrypt.hash(this.password, salt)
//             this.password = hashedPassword
//         }
//         next();
//     } catch (error) {
//         console.log("Error occurred while hashing ", error);
//         return next(error);
//     }
// })


// // Compare the given password with the hashed password in the database
CreateUserSchema.methods.comparePassword = async function (password) {
    return bcrypt.compare(password, this.password);
};

const CreateUserModel = mongoose.model("user", CreateUserSchema);

export default CreateUserModel;
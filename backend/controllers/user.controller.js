import CreateUserModel from "../model/CreateUser.js";
import { sendEmail } from "../modules/transporter.js";

export const AddUser = async(req, res) => {
    const userBody = req.body;

    const insertUser = new CreateUserModel({
        ...userBody
    });
    
    try {
       const result = await insertUser.save();
       console.log("User added uccessfully");
       res.status(201).json({
        success: true, 
        message: "Added Novel Successfully", 
        data: result
       })
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
}


export const sendEmailFromUser = async (req, res) => {
    const mailDetails = {
        toEmail: req.body.toEmail,
        subject: req.body.subject,
        text: req.body.text,
    }
    try {
        const sentEmailDetails = sendEmail(mailDetails);
        res.json({
            success: true,
            data: sentEmailDetails,
            message: "The Email has been successfully sent"
        })
    } catch (error) {
        res.json({
            success: false,
            error: error,
            message: "Error occured email not sent"
        })
    }
}
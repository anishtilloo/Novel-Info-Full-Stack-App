import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
    port: 456,
    host: "smtp.gmail.com",
        auth: {
            user: 'yinahas163@beeplush.com',
            password: 'password'
        },
    secure: true,
});

export default transporter;
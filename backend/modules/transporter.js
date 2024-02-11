import nodemailer from "nodemailer";

// password for novel app
// tshv idnv gono shou

export const transporter = nodemailer.createTransport(
    {
        service: 'gmail',
        auth: {
            user: 'anish.tilloo@claimgenius.com',
            pass: 'tshv idnv gono shou'
        }
    }
);

// let mailDetails = {
//     from: 'anish.tilloo@claimgenius.com',
//     to: 'kshitijkumar1610@gmail.com',
//     subject: 'Test mail',
//     text: 'Testing email service for cricket analysis app'
// };

export function sendEmail(mailDetails) {
    const mailDetailsFormatted= {
        from: "anish.tilloo@claimgenius.com",
        to: mailDetails.toEmail,
        subject: mailDetails.subject,
        text: mailDetails.text,
    }
    transporter
        .sendMail(mailDetailsFormatted,
            function (err, data) {
                if (err) {
                    console.log("Error occured in transporter.js while sending the mail :", err);
                    console.log(err);
                } else {
                    console.log(data);
                    console.log('Email sent successfully');
                }
            });
}

export default transporter;
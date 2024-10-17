const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors());

// Email sending route
app.post('/send-question', (req, res) => {
  const { question } = req.body;

  // Nodemailer configuration
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'rbms.labanos2024@gmail.com', // Your email
        pass: 'gmuwmhckmxdnyaho', // Your email password or an app password
    },
  });

  const mailOptions = {
    from: process.env.GMAIL_USER, // Your email address (sender)
    to: 'rbms.labanos2024@gmail.com', // Define a valid recipient email address
    subject: 'New Question Submitted',
    text: `Hello, A new question has been submitted :${question}
    
    Please review and respond as soon as possible.
    Thank you,
    Your App team`, // Use the submitted question from the request body
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send(error.toString());
    }
    res.status(200).send('Email sent: ' + info.response);
  });
});

// Start server
app.listen(5000, () => {
  console.log('Server running on port 5000');
});
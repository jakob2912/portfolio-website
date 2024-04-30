import express from 'express';
import bodyParser from 'body-parser';
import nodemailer from 'nodemailer';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 8800;

// Middleware
app.use(bodyParser.json());

// Serve static files from the 'dist' directory
app.use('/portfolio-website', express.static(path.join(__dirname, 'dist')));

// Route for handling form submission
app.post('/submit-form', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Sending email
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.USER,
        pass: process.env.EMAIL_PASSWORD
      }
    });

    const mailOptions = {
      from: process.env.USER,
      to: process.env.USER,
      subject: `New message from ${name} (${email})`,
      text: `${name} (${email}) writes: \n ${message}`,
      html: `<p>New message from ${name} (${email})</p><p>${message}</p>`
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info.response);
    res.status(200).send('Email sent successfully');
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).send('Internal Server Error');
  }
});

// Fallback route
app.get('*', (req, res) => {
  // Serve the index.html file for all other routes
  res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

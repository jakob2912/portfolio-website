import express from 'express';
import bodyParser from 'body-parser';
import nodemailer from 'nodemailer';
import path from 'path';

import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

import dotenv from 'dotenv';
dotenv.config();

const app = express();

// Middleware zum Parsen von JSON-Anfragen
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'dist')));

app.get('/', (req, res) => {
  res.send('Welcome to my website');
});

// POST-Endpunkt für das Kontaktformular
app.post('/submit-form', (req, res) => {
  const { name, email, message } = req.body;

  // Logik zum Senden einer E-Mail
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.USER,
      pass: process.env.EMAIL_PASSWORD
    },
  });

  const mailOptions = {
    from: process.env.USER,
    to: process.env.USER, // Ihre E-Mail-Adresse
    subject: `Neue Nachricht von ${name} (${email})`,
    text: `${name} (${email}) schreibt: \n ${message}`,
    html: `
      <html>
        <head>
          <title>Neue Nachricht von ${name} (${email})</title>
        </head>
        <body>
          <h3>Neue Nachricht von ${name} (${email})</h1>
          <p style="font-size=16px;">${message}</p>
        </body>
      </html>
    `
  };

  const sendMail = async (transporter,mailOptions) => {
    try {
      await transporter.sendMail(mailOptions);
      console.log('E-Mail gesendet:', mailOptions.subject);
    } catch(error) {
      console.error(error);
    }
  }

  sendMail(transporter,mailOptions);
});

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
});

// Server starten
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server läuft auf Port ${PORT}`);
});
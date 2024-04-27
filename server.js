import express from 'express';
import bodyParser from 'body-parser';
import nodemailer from 'nodemailer';
import path from 'path'; 
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

import dotenv from 'dotenv';
dotenv.config();

const app = express();

// Middleware zum Parsen von JSON-Anfragen
app.use(bodyParser.json());

// Serve static files from the dist folder
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
    auth: {
      user: process.env.USER,
      pass: process.env.EMAIL_PASSWORD
    }
  });

  const mailOptions = {
    from: process.env.USER,
    to: process.env.USER, // Ihre E-Mail-Adresse
    subject: `Neue Nachricht von ${name} (${email})`,
    text: `${name} (${email}) schreibt: \n ${message}`,
    html: `<p>Neue Nachricht von ${name} (${email})</p><p>${message}</p>`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Fehler beim Senden der E-Mail:', error);
      res.status(500).send('Internal Server Error');
    } else {
      console.log('E-Mail gesendet:', info.response);
      res.status(200).send('E-Mail erfolgreich gesendet');
    }
  });
});

// Fallback route to serve the index.html for all other routes
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
});

// Server starten
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server läuft auf Port ${PORT}`);
});

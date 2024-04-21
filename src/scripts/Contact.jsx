import React from 'react';
import '../styles/Contact.css';

function Contact() {
  return (
    <section id="contact" className="contactSection">
      <div className="container">
        <h2>Kontaktieren Sie mich</h2>
        <form className="contactForm">
          <div className="formGroup">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="formGroup">
            <label htmlFor="email">E-Mail:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="formGroup">
            <label htmlFor="message">Nachricht:</label>
            <textarea id="message" name="message" rows="4" required></textarea>
          </div>
          <button type="submit" className="submitButton">Absenden</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;

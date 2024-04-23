import React, { useState } from 'react';
import '../styles/Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Hier können Sie die Logik zum Senden der Formulardaten an den Server implementieren
    console.log(formData); // Zum Testen: Ausgabe der Formulardaten in der Konsole
  };

  return (
    <section id="contact" className="contactSection">
      <div className="container">
        <h2>Kontaktieren Sie mich</h2>
        <form className="contactForm" onSubmit={handleSubmit}>
          <div className="formGroup">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
          </div>
          <div className="formGroup">
            <label htmlFor="email">E-Mail:</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
          </div>
          <div className="formGroup">
            <label htmlFor="message">Nachricht:</label>
            <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows="4" required></textarea>
          </div>
          <button type="submit" className="submitButton">Absenden</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;

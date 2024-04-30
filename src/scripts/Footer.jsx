import React from 'react';
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footerSection">
      <div className="container">
        <p>&copy; {new Date().getFullYear()} Jakob Seidl - Alle Rechte vorbehalten</p>
      </div>
    </footer>
  );
};

export default Footer;

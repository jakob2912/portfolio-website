import React from 'react';

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

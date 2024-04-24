import React from 'react';
import logo from '../assets/logo.png';

const Navbar = () => {
  return (
    <nav>
      <div className="container">
        <img src={logo} alt="Logo" className="logo" />
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">Über mich</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#pricing">Preise</a></li>
          <li><a href="#contact">Kontakt</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

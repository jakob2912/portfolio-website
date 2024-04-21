import React from 'react';
import logo from './assets/logo.png'; 

const Navbar = () => {
  return (
    <nav style={navStyles}>
      <div style={containerStyles}>
        <img src={logo} alt="Logo" style={logoStyles} /> 
        <ul style={listStyles}>
          <li style={listItemStyles}><a href="#home">Home</a></li>
          <li style={listItemStyles}><a href="#pricing">Pricing</a></li>
          <li style={listItemStyles}><a href="#about">About</a></li>
          {/* Add more sections as needed */}
        </ul>
      </div>
    </nav>
  );
};

// Styles
const navStyles = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  backgroundColor: 'lightblue',
  padding: '10px 0',
  boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)',
};

const containerStyles = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '0 20px',
};

const logoStyles = {
  height: '40px', // Adjust as needed
};

const listStyles = {
  display: 'flex',
  listStyle: 'none',
  margin: 0,
  padding: 0,
};

const listItemStyles = {
  marginLeft: '20px',
};

export default Navbar;

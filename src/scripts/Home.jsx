// JavaScript für die Verwendung von State und Effekten
import React, { useState, useEffect } from 'react';
import logo from "../assets/logo.png"
import backgroundImage from '../assets/background-home.png'; 

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      id="home"
      className={`homeSection ${isVisible ? 'visible' : ''}`}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className = "logo-div">
        <img src={logo} alt="Logo" className="logo-img" />
      </div>
      <div className="grid">
        <div className="content">
          <h1 className="heading-home">Entdecken Sie die Kraft des großartigen Webdesigns</h1>
          <p>
            Willkommen! Ich bin Jakob Seidl, ein Programmierer und Web Designer aus Pinggau. Ich entwickle hochqualitative Websites für lokale Unternehmen. Mit maßgeschneiderten Lösungen unterstütze ich meine Kunden dabei, online erfolgreich zu sein. Kontaktieren Sie mich, um mehr zu erfahren.
          </p>
          <a href="#contact">
            <button className="home-button">Kontaktieren Sie mich!</button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
// JavaScript für die Verwendung von State und Effekten
import React, { useState, useEffect } from 'react';
import homepageImage from '../assets/about.jpg'; // Bildpfad entsprechend anpassen

const Home = () => {
  // Beispiel für die Verwendung von State und Effekten
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Logik für das Einblenden der Home-Sektion
    setIsVisible(true);
  }, []);

  return (
    <section id="home" className={`homeSection ${isVisible ? 'visible' : ''}`}>
      <h1 className="heading-home">Entdecken Sie die Kraft des großartigen Webdesigns</h1>
      <div className="grid">
        <div className="animateLeft">
          <p>
            Willkommen! Ich bin Jakob Seidl, ein Programmierer und Web Designer aus Pinggau. Ich entwickle hochqualitative Websites für lokale Unternehmen. Mit maßgeschneiderten Lösungen unterstütze ich meine Kunden dabei, online erfolgreich zu sein. Kontaktieren Sie mich, um mehr zu erfahren.
          </p>
        </div>
        <div className="animateRight home-picture">
          <img src={homepageImage} alt="Homepage" className="home-picture" />
        </div>
      </div>
    </section>
  );
};

export default Home;

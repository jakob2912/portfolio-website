import React from 'react';
import homepageImage from './assets/about.jpg';

const Home = () => {
  return (
    <section id="home" className = "homeSection">
      <h1 className = "heading-home">Entdecken Sie die Kraft des großartigen Webdesigns</h1>
      <div className = "grid">
        <div>
          <p>
            Willkommen! Ich bin Jakob Seidl, ein Programmierer und Web Designer aus Pinggau. Ich entwickle hochqualitative Websites für lokale Unternehmen. Mit maßgeschneiderten Lösungen unterstütze ich meine Kunden dabei, online erfolgreich zu sein. Kontaktieren Sie mich, um mehr zu erfahren.
          </p>
        </div>
        <div>
          <img src={homepageImage} alt="Homepage" className = "home-picture" />
        </div>
      </div>
      
      
    </section>
  );
};

export default Home;

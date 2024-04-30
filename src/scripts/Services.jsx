import React from 'react';
import { FaSearch, FaDesktop, FaGlobe } from 'react-icons/fa';
import "../styles/Services.css";

const Services = () => {
  return (
    <section id="services" className="servicesSection">
      <div className="container services-container">
        <h2>Meine Dienstleistungen</h2>
        <div className="service animateFadeIn">
          <div className="icon">
            <FaSearch className="service-icon" />
          </div>
          <div className="text">
            <h3>SEO Optimization</h3>
            <p>
              Als Programmierer liegt mir die SEO-Optimierung Ihrer Website am Herzen. Mit maßgeschneiderten Strategien verbessere ich Ihr Ranking in den Suchmaschinenergebnissen, um Ihr Unternehmen online sichtbarer zu machen.
            </p>
          </div>
        </div>
        <div className="service animateFadeIn">
          <div className="icon">
            <FaDesktop className="service-icon" />
          </div>
          <div className="text">
            <h3>Erstellen von Websites</h3>
            <p>
              Ich erstelle maßgeschneiderte Websites, die Ihre Marke präsentieren und Ihren Kunden ein großartiges Benutzererlebnis bieten. Von der Konzeption bis zur Umsetzung bin ich hier, um Ihre Website zum Leben zu erwecken.
            </p>
          </div>
        </div>
        <div className="service animateFadeIn">
          <div className="icon">
            <FaGlobe className="service-icon" />
          </div>
          <div className="text">
            <h3>Domain Management</h3>
            <p>
              Die Verwaltung von Domains ist ein wichtiger Bestandteil meiner Dienstleistungen. Ich kümmere mich um die Registrierung, Verwaltung und Optimierung Ihrer Domain-Namen, um sicherzustellen, dass Ihre Website immer zugänglich ist und optimal funktioniert.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

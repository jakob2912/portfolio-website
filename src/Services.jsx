import React from 'react';
import { FaSearch, FaDesktop, FaGlobe } from 'react-icons/fa';

const Services = () => {
  return (
    <section id="services" className="servicesSection">
      <div className="container">
        <h2>Meine Dienstleistungen</h2>
        <div className="service">
          <div className="icon">
            <FaSearch />
          </div>
          <div className="text">
            <h3>SEO-Optimierung</h3>
            <p>Als Einzelunternehmer liegt mir die SEO-Optimierung Ihrer Website am Herzen. Mit maßgeschneiderten Strategien verbessere ich Ihr Ranking in den Suchmaschinenergebnissen, um mehr organischen Traffic zu generieren und Ihr Unternehmen online sichtbarer zu machen.</p>
          </div>
        </div>
        <div className="service">
          <div className="icon">
            <FaDesktop />
          </div>
          <div className="text">
            <h3>Website Erstellung</h3>
            <p>Ich erstelle maßgeschneiderte Websites, die Ihre Marke präsentieren und Ihren Kunden eine großartige Benutzererfahrung bieten. Von der Konzeption bis zur Umsetzung bin ich für Sie da, um Ihre Website zum Leben zu erwecken.</p>
          </div>
        </div>
        <div className="service">
          <div className="icon">
            <FaGlobe />
          </div>
          <div className="text">
            <h3>Domain Management</h3>
            <p>Domain Management ist ein wichtiger Teil meiner Dienstleistungen. Ich kümmere mich um die Registrierung, Verwaltung und Optimierung Ihrer Domainnamen, um sicherzustellen, dass Ihre Website stets erreichbar ist und eine optimale Leistung bietet.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

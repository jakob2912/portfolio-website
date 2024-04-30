import React from 'react';
import { FaCheck } from 'react-icons/fa'; 
import "../styles/Pricing.css";

const Pricing = () => {
  return (
    <section id="pricing" className="pricingSection">
      <div className="card">
        <h2>Testimonial-Plan</h2>
        <p className="price"><span className="blue-text">500€</span></p>
        <p className="discounted-price">Vorher: <span className="original-price">600€</span></p>
        <p className="highlight">Top-Angebot!</p>
        <ul className="benefits">
          <li><FaCheck /> Maßgeschneiderte Website</li>
          <li><FaCheck /> Gültig bei Verwendung als Referenz</li>
          <li><FaCheck /> Zusätzlich: 20€/ Monat oder 200€/Jahr für SEO und Domain Management</li>
          <li><FaCheck /> Unbegrenzte E-Mail-Unterstützung</li>
        </ul>
      </div>
      <div className="card">
        <h2>Standard-Plan</h2>
        <p className="price"><span className="blue-text">1200€</span></p>
        <p className="discounted-price">Vorher: <span className="original-price">1400€</span></p>
        <p className="highlight">Beliebtester Plan!</p>
        <ul className="benefits">
          <li><FaCheck /> Garantierte Fertigstellung in 3 Wochen</li>
          <li><FaCheck /> Domainmanagement mit SEO für 20€/Monat oder 200€/Jahr</li>
          <li><FaCheck /> Einrichtung von Google Analytics</li>
          <li><FaCheck /> Integration von Social-Media-Links</li>
          <li><FaCheck /> Kundenspezifisches Design</li>
          <li><FaCheck /> Kostenlose technische Unterstützung für 6 Monate</li>
        </ul>
      </div>
      <div className="card elite">
        <h2>Elite-Plan</h2>
        <p className="price"><span className="blue-text">3000€</span></p>
        <p className="discounted-price">Ursprünglich 4000€</p>
        <ul className="benefits">
          <li><FaCheck /> Alle Features des Standard-Plans</li>
          <li><FaCheck /> Unbegrenzte Anpassungsmöglichkeiten</li>
          <li><FaCheck /> Priorisierter Kundendienst</li>
          <li><FaCheck /> High-End-Design und UX-Optimierung</li>
          <li><FaCheck /> Schnelle Website-Ladezeiten</li>
          <li><FaCheck /> Exklusiver Support</li>
          <li><FaCheck /> Premium-Design und maßgeschneiderte Grafiken</li>
          <li><FaCheck /> Priorisierte Projektbearbeitung</li>
          <li><FaCheck /> 24/7 Website-Monitoring</li>
        </ul>
      </div>
    </section>
  );
};

export default Pricing;

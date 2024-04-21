import React from 'react';
import { FaCheck } from 'react-icons/fa'; 

const Pricing = () => {
  return (
    <section id="pricing" className="pricingSection">
      <div className="card">
        <h2>Testimonial-Plan</h2>
        <p className="price"><span className="blue-text">500€</span></p>
        <ul className="benefits">
          <li><FaCheck /> Maßgeschneiderte Website</li>
          <li><FaCheck /> Gültig bei Verwendung als Referenz</li>
          <li><FaCheck /> Zusätzlich: 20€/ Monat oder 200€/Jahr für SEO und Domain Management</li>

        </ul>
      </div>
      <div className="card">
        <h2>Standard-Plan</h2>
        <p className="price">1200€</p>
        <p className="discounted-price">1000€ bei sofortiger Zahlung</p>
        <ul className="benefits">
          <li><FaCheck /> Garantierte Fertigstellung in 3 Wochen</li>
          <li><FaCheck /> Domainmanagement mit SEO für 20€/Monat oder 200€/Jahr</li>

        </ul>
      </div>
    </section>
  );
};

export default Pricing;

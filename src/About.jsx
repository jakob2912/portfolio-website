import React from 'react';
import aboutImg from "./assets/about.jpg"

const AboutUs = () => {
  return (
    <section id="about" className="aboutSection">
      <div className="container">
        <div className="content">
          <h2>Über mich</h2>
          <p>Ich bin ein aufstrebender Webdesigner und Programmierer aus Pinggau. Mit einer Leidenschaft für Ästhetik und Funktionalität arbeite ich daran, hochwertige Websites für kleine Unternehmen und Einzelpersonen zu erstellen.</p>
          <p>Mein Ziel ist es, meinen Kunden dabei zu helfen, ihre Online-Präsenz zu verbessern und ihre Ziele im digitalen Raum zu erreichen. Ich glaube an eine individuelle Herangehensweise an jedes Projekt, um sicherzustellen, dass die erstellten Websites die einzigartige Identität und die Anforderungen meiner Kunden widerspiegeln.</p>
          <p>Als Einzelkämpfer lege ich großen Wert auf Kommunikation und Zusammenarbeit mit meinen Kunden. Ich höre aufmerksam zu, um ihre Bedürfnisse zu verstehen, und arbeite eng mit ihnen zusammen, um maßgeschneiderte Lösungen zu entwickeln, die ihre Ziele erreichen.</p>
          <p>Ich bin stolz darauf, hochwertige Websites zu erstellen, die nicht nur ästhetisch ansprechend sind, sondern auch eine großartige Benutzererfahrung bieten. Kontaktieren Sie mich noch heute, um zu erfahren, wie ich Ihnen helfen kann, Ihre Online-Präsenz zu verbessern.</p>
        </div>
        <div className="image">
          <img src= {aboutImg} alt="About Us" />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;


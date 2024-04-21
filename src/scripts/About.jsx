import React from 'react';
import aboutImg from "../assets/about.jpg";

const AboutUs = () => {
  return (
    <section id="about" className="aboutSection animateFadeIn">
      <div className="container">
        <div className="content">
          <h2>Über mich</h2>
          <p>
            Ich bin ein angehender Webdesigner und Programmierer aus Pinggau. Mit Leidenschaft für Ästhetik und Funktionalität arbeite ich daran, hochwertige Websites für kleine Unternehmen und Einzelpersonen zu erstellen.
          </p>
          <p>
            Mein Ziel ist es, meinen Kunden dabei zu helfen, ihre Online-Präsenz zu verbessern und ihre Ziele im digitalen Raum zu erreichen. Ich glaube daran, bei jedem Projekt einen individuellen Ansatz zu verfolgen, um sicherzustellen, dass die erstellten Websites die einzigartige Identität und die Anforderungen meiner Kunden widerspiegeln.
          </p>
          <p>
            Als Einzelunternehmer schätze ich die Kommunikation und Zusammenarbeit mit meinen Kunden. Ich höre aufmerksam zu, um ihre Bedürfnisse zu verstehen, und arbeite eng mit ihnen zusammen, um maßgeschneiderte Lösungen zu entwickeln, die ihre Ziele erreichen.
          </p>
          <p>
            Ich bin stolz darauf, hochwertige Websites zu erstellen, die nicht nur gut aussehen, sondern auch eine großartige Benutzererfahrung bieten. Kontaktieren Sie mich noch heute, um zu erfahren, wie ich dazu beitragen kann, Ihre Online-Präsenz zu verbessern.
          </p>
        </div>
        <div className="image animateFadeIn">
          <img src={aboutImg} alt="About Us" />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;

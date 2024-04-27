import React, { useEffect } from 'react';
import '../styles/App.css';
import Navbar from './Navbar.jsx';
import Home from './Home.jsx';
import About from './About.jsx';
import Services from './Services.jsx';
import Pricing from './Pricing.jsx';
import Contact from './Contact.jsx';
import Footer from './Footer.jsx';
import Carousel from './Carousel.jsx';

function App() {
  useEffect(() => {
    const navHeight = document.querySelector('nav').offsetHeight;
    const sections = document.querySelectorAll('section[id]');

    const handleClick = (e) => {
      e.preventDefault();
      const targetId = e.target.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);
      const offsetTop = targetSection.offsetTop - navHeight + 1; // Offset anpassen

      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    };

    sections.forEach(section => {
      const sectionId = section.getAttribute('id');
      const link = document.querySelector(`a[href="#${sectionId}"]`);
      if (link) {
        link.addEventListener('click', handleClick);
      }
    });
  }, []);


  return (
    <>
      <Navbar />
      <Home />
      <Carousel/>
      <About />
      <Services />
      <Pricing />
      <Contact />
      <Footer />
    </>
  );
}

export default App;

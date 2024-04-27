import React, {useState} from 'react';
import firstImg from '../assets/firstImg.png';
import secondImg from '../assets/secondImg.png';
import thirdImg from '../assets/thirdImg.png';
import fourthImg from '../assets/fourthImg.png';
import '../styles/Carousel.css';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [firstImg, secondImg, thirdImg, fourthImg];
  const websites = [
    'https://jakob2912.github.io/calculator-program/',
    'https://jakob2912.github.io/digital-clock/',
    'https://jakob2912.github.io/stopwatch/',
    'https://jakob2912.github.io/rock-paper-scissors-game/'
  ];

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === images.length - 1 ? 0 : prevSlide + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? images.length - 1 : prevSlide - 1));
  };

  return (
    <section id ="carousel" className="carousel-section">
      <h1>Meine vorherigen Projekte</h1>
      <div className="carousel">
        <div className="slider">
          <div className="slide">
            <img src={images[currentSlide]} alt={`Slide ${currentSlide + 1}`} />
            <a href={websites[currentSlide]} target="_blank" rel="noopener noreferrer" className="carousel-button">Website Besuchen</a>
          </div>
        </div>
        <button className="prev" onClick={prevSlide}><BsArrowLeft /></button>
        <button className="next" onClick={nextSlide}><BsArrowRight /></button>
      </div>
    </section>
    
  );
};

export default Carousel;

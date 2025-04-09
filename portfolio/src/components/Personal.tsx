import React, { useState } from 'react';
import './Personal.css';

const Personal: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Sample personal images (replace with your actual images)
  const personalImages = [
    '/960px-Golden_Retriever_medium-to-light-coat.jpg',
    '/346844.jpg',
    '/AI_bitspace.png',
    '/C5 1-30.jpg',
    '/s.jpg',
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % personalImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + personalImages.length) % personalImages.length);
  };
  // Replace with your actual personal content at the bottom
  return (
    <section id="personal" className="personal">
      <div className="personal-container">
        <div className="slideshow-container">
          {personalImages.map((img, index) => (
            <div 
              key={index}
              className={`slide ${index === currentSlide ? 'active' : ''}`}
            >
              <img src={img} alt={`Personal ${index + 1}`} />
              <span className="bow-emoji">🎀</span>
            </div>
          ))}
          <button className="slide-button prev" onClick={prevSlide}>&lt;</button>
          <button className="slide-button next" onClick={nextSlide}>&gt;</button>
          <div className="slide-dots">
            {personalImages.map((_, index) => (
              <span 
                key={index}
                className={`dot ${index === currentSlide ? 'active' : ''}`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </div>

        <div className="personal-content">
          <h2 className="personal-header">About Me</h2>
          <p className="personal-blurb">
            Tralalero Tralala
            <br /><br />
            Tralalero Tralala
            <br /><br />
            Tralalero Tralala
          </p>
        </div>
      </div>
    </section>
  );
};

export default Personal;
import React, { useState } from 'react';
import './Experiences.css';

const Experiences: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Replace these image paths with actual ones, make sure they're in public
  const workImages = [
    '/960px-Golden_Retriever_medium-to-light-coat.jpg',
    '/AI_bitspace.png',
    '/C5 1-30.jpg',
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % workImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + workImages.length) % workImages.length);
  };

  return ( // Replace with your resume information
    <section id="experiences" className="experiences">
      <div className="experiences-container">
        <div className="experiences-content">
          <h2 className="section-title">My Experience</h2>
          
          <div className="education-section">
            <h3 className="section-subtitle">Education</h3>
            <div className="experience-item">
              <h4 className="experience-title">University of California, Irvine - Computer Science</h4>
              <p className="experience-date">September 2023-June 2026</p>
              <ul className="experience-details">
                <li>GPA: ???, Dean's List, Graphic Design Co-Chair for AI@UCI</li>
                <li>Relevant Coursework: ???</li>
              </ul>
            </div>
            
            <div className="experience-item">
              <h4 className="experience-title">??? High School, Place, State</h4>
              <p className="experience-date">August 2019-June 2023</p>
              <ul className="experience-details">
                <li>GPA: ???, Awards</li>
                <li>Relevant Coursework: ???</li>
                <li>Extracurriculars: ???</li>
              </ul>
            </div>
          </div>

          <div className="skills-section">
            <h3 className="section-subtitle">Skills</h3>
            <ul className="skills-list">
              <p>Frontend Development (React, TypeScript, HTML/CSS), UI/UX Design, Programming Languages (Python, Java, JavaScript)</p>
            </ul>
          </div>

          <div className="work-section">
            <h3 className="section-subtitle">Work Experience</h3>
            
            <div className="experience-item">
              <h4 className="experience-title">Company, Location, Place — Position</h4>
              <p className="experience-date">Time to time</p>
              <ul className="experience-details">
                <li>Developed and maintained web applications using React</li>
                <li>Collaborated with designers to implement UI/UX improvements</li>
              </ul>
            </div>
            
            <div className="experience-item">
              <h4 className="experience-title">Company, Location, Place — Position</h4>
              <p className="experience-date">Time to time</p>
              <ul className="experience-details">
                <li>Implemented new features and fixed bugs</li>
                <li>Participated in code reviews and team meetings</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="work-slideshow">
          <h3 className="slideshow-title">My Work</h3>
          <div className="slide-container">
            <button className="slide-button prev" onClick={prevSlide}>&lt;</button>
            <img 
              src={workImages[currentSlide]} 
              alt={`Work sample ${currentSlide + 1}`} 
              className="slide-image"
            />
            <button className="slide-button next" onClick={nextSlide}>&gt;</button>
          </div>
          <div className="slide-dots">
            {workImages.map((_, index) => (
              <span 
                key={index} 
                className={`dot ${index === currentSlide ? 'active' : ''}`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experiences;

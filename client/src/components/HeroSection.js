import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="hero-overlay">
        <div className="hero-content">
          <h1>Welcome to Ontario Structures</h1>
          <p>Building dreams with precision and care.</p>
          <a href="#services" className="btn btn-primary btn-lg">Our Services</a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

import React from 'react';
import './english.css';

const EnglishBox = () => {
  return (
    <div className="english-box">
      <h2 className="english-title">English FAL</h2>
      <div className="english-content">
        <img 
          src="/images/english.jpg"  // Using your specified image
          alt="Calculator Icon" 
          className="english-image"
        />
        <div className="english-text">
          <p>1. Adjectives.</p>
          <p>2. Adverbs.</p>
          <p>3. Explore <a 
      href="https://www.testpapers.co.za/gr-9-mathematics?srsltid=AfmBOorZxF-_oChnNIf-15LvM7mC8IUMgecxWOzHTAY6CtvA2Xt415pw#google_vignette"
      target="_blank"
      rel="noopener noreferrer"
      className="explore-link"
    >
      more
    </a>
  </p>
        </div>
      </div>
    </div>
  );
};

export default EnglishBox;
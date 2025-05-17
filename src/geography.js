import React from 'react';
import './geography.css';

const GeographyBox = () => {
  return (
    <div className="geography-box-container">
      <div className="geography-box">
        <h2 className="geography-title">Geography</h2>
        <div className="geography-content">
          <img 
            src="/images/geo.jpeg" 
            alt="Geography Icon" 
            className="geography-image"
          />
          <div className="geography-text">
            <p>1. Continental landforms</p>
            <p>2. Climate zone patterns</p>
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
    </div>
  );
};

export default GeographyBox;


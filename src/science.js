import React from 'react';
import './science.css';

const ScienceBox = () => {
  return (
    <div className="science-box-container">
      <div className="science-box">
        <h2 className="science-title">Natural Sciences</h2>
        <div className="science-content">
          <img 
            src="/images/ns.jpeg" 
            alt="Science Icon" 
            className="science-image"
          />
          <div className="science-text">
            <p>1. Electric Circuits </p>
            <p>2. Chemistry </p>
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

export default ScienceBox;

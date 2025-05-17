import React from 'react';
import './social.css';

const SocialBox = ({ visible = true }) => {
  return (
    <div className={`social-box-container ${!visible ? 'hidden' : ''}`}>
      <div className="social-box">
        <h2 className="social-title">Social Sciences</h2>
        <div className="social-content">
          <img 
            src="/images/ss.jpeg" 
            alt="Social Studies Icon" 
            className="social-image"
          />
          <div className="social-text">
            <p>1. Community </p>
            <p>2. Cultural </p>
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

export default SocialBox;
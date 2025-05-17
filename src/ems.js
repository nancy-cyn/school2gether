import React from 'react';
import './ems.css';

const EmsBox = () => {
  return (
    <div className="ems-box-container">
      <div className="ems-box">
        <h2 className="ems-title">EMS</h2>
        <div className="ems-content">
          <img 
            src="/images/calculator.png" 
            alt="EMS Icon" 
            className="ems-image"
          />
          <div className="ems-text">
            <p>1.Economic Systems</p>
            <p>2.Accounting Equations </p>
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

export default EmsBox;




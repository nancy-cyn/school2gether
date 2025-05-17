import React from 'react';
import './afrikaans.css';

const AfrikaansBox = () => {
  return (
    <div className="afrikaans-box-container">
      <div className="afrikaans-box">
        <h2 className="afrikaans-title">Afrikaans HL</h2>
        <div className="afrikaans-content">
          <img 
            src="/images/afrikaans.jpg"
            alt="Afrikaans Icon" 
            className="afrikaans-image"
          />
          <div className="afrikaans-text">
            <p>1.Grammatika</p>
            <p>2. doelstellings</p>
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

export default AfrikaansBox;


import React from 'react';
import './isizulu.css';

const IsiZuluBox = () => {
  return (
    <div className="zulu-box-container">
      <div className="zulu-box">
        <h2 className="zulu-title">IsiZulu HL</h2>
        <div className="zulu-content">
          <img 
            src="/images/isizulu.jpg"
            alt="IsiZulu Icon" 
            className="zulu-image"
          />
          <div className="zulu-text">
            <p>1. Ukusetshenziswa Kolimi</p>
            <p>2. Bengithi Lizokuna</p>
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

export default IsiZuluBox;



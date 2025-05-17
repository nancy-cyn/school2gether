import React from 'react';
import './skills.css';

const SkillsBox = () => {
  return (
    <div className="skills-box-container">
      <div className="skills-box">
        <h2 className="skills-title">Life Orientation</h2>
        <div className="skills-content">
          <img 
            src="/images/life.jpeg" 
            alt="Skills Icon" 
            className="skills-image"
          />
          <div className="skills-text">
            <p>1. Economic Systems </p>
            <p>2. Accounting Equation </p>
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

export default SkillsBox;

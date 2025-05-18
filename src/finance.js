import React from 'react';
import './finance.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faThumbsUp, faShareNodes } from '@fortawesome/free-solid-svg-icons';

const Finance = () => {
  return (
    <div className="finance-card">
      {/* Top Image */}
      <div className="finance-image-container">
        <img 
          src="/images/mathproblem.jpg" 
          alt="Finance Problem" 
        />
      </div>

      {/* Info Section */}
      <div className="finance-info-section">
        {/* Left: Title + Small Image + Text */}
        <div className="finance-left-content">
          <h2>Financial Basics</h2>
          <img 
            src="/images/face.jpeg" 
            alt="Tutor" 
            className="finance-tutor-avatar" 
          />
          <p>Sandile Kubheka</p>
          <p>
            <FontAwesomeIcon icon={faComment} /> 9 &nbsp;
            <FontAwesomeIcon icon={faThumbsUp} /> 17 &nbsp;
            <FontAwesomeIcon icon={faShareNodes} /> 6
          </p>
        </div>

        {/* Right: Buttons */}
        <div className="finance-action-buttons">
          <button className="finance-btn">View</button>
          <button className="finance-btn">Download</button>
        </div>
      </div>
    </div>
  );
};

export default Finance;
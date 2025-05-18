import React from 'react';
import './patterns.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment } from '@fortawesome/free-solid-svg-icons';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { faShareNodes } from '@fortawesome/free-solid-svg-icons';

const Patterns = () => {
  return (
    <div className="patterns-card">
      {/* Top Image */}
      <div className="patterns-image-holder">
        <img 
          src="/images/mathproblem.jpg" 
          alt="Math Patterns" 
        />
      </div>

      {/* Info Section */}
      <div className="patterns-info-panel">
        {/* Left: Title + Small Image + Text */}
        <div className="patterns-content-left">
          <h2>Number Patterns</h2>
          <img 
            src="/images/face.jpeg" 
            alt="Tutor" 
            className="patterns-user-avatar" 
          />
          <p>Khwezi Mpumela</p>
          <p>
            <FontAwesomeIcon icon={faComment} /> 7 &nbsp;
            <FontAwesomeIcon icon={faThumbsUp} /> 14 &nbsp;
            <FontAwesomeIcon icon={faShareNodes} /> 9
          </p>
        </div>

        {/* Right: Buttons */}
        <div className="patterns-button-group">
          <button className="patterns-btn">View</button>
          <button className="patterns-btn">Download</button>
        </div>
      </div>
    </div>
  );
};

export default Patterns;
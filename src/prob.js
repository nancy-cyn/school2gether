import React from 'react';
import './prob.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faThumbsUp, faShareNodes } from '@fortawesome/free-solid-svg-icons';

const Probability = () => {
  return (
    <div className="probability-card">
      {/* Top Image */}
      <div className="prob-image-container">
        <img 
          src="/images/mathproblem.jpg" 
          alt="Probability Problem" 
        />
      </div>

      {/* Info Section */}
      <div className="prob-info-section">
        {/* Left: Title + Small Image + Text */}
        <div className="prob-left-content">
          <h2>Probability </h2>
          <img 
            src="/images/face.jpeg" 
            alt="Tutor" 
            className="prob-tutor-avatar" 
          />
          <p>Ikaneng Mmako</p>
          <p>
            <FontAwesomeIcon icon={faComment} /> 15 &nbsp;
            <FontAwesomeIcon icon={faThumbsUp} /> 22 &nbsp;
            <FontAwesomeIcon icon={faShareNodes} /> 11
          </p>
        </div>

        {/* Right: Buttons */}
        <div className="prob-action-buttons">
          <button className="prob-btn">View</button>
          <button className="prob-btn">Download</button>
        </div>
      </div>
    </div>
  );
};

export default Probability;
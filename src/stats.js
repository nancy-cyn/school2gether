import React from 'react';
import './stats.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment } from '@fortawesome/free-solid-svg-icons';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { faShareNodes } from '@fortawesome/free-solid-svg-icons';

const Stats = () => {
  return (
    <div className="stats-container">
      {/* Top Image */}
      <div className="stats-image-wrapper">
        <img 
          src="/images/mathproblem.jpg" 
          alt="Statistics Problem" 
        />
      </div>

      {/* Info Section */}
      <div className="stats-info-section">
        {/* Left: Title + Small Image + Text */}
        <div className="stats-left-content">
          <h2>Statistics</h2>
          <img 
            src="/images/face.jpeg" 
            alt="Tutor" 
            className="stats-avatar" 
          />
          <p>Destiny Mabwe</p>
          <p><FontAwesomeIcon icon={faComment} />12   <FontAwesomeIcon icon={faThumbsUp} /> 8   <FontAwesomeIcon icon={faShareNodes} /> 20</p>
        </div>

        {/* Right: Buttons */}
        <div className="stats-action-buttons">
          <button>View</button>
          <button>Download</button>
        </div>
      </div>
    </div>
  );
};

export default Stats;
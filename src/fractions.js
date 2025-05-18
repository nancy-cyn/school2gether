import React from 'react';
import './fractions.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faThumbsUp, faShareNodes} from '@fortawesome/free-solid-svg-icons';

const Fractions = () => {
  return (
    <div className="fractions-card">
      <div className="fractions-image-container">
        <img src="/images/mathproblem.jpg" alt="Fractions Problem" />
      </div>
      <div className="fractions-info-section">
        <div className="fractions-left-content">
          <h2> Fractions</h2>
          <img src="/images/face.jpeg" alt="Tutor" className="fractions-tutor-avatar" />
          <p>christopher Skinner</p>
          <p>
            <FontAwesomeIcon icon={faComment} /> 8 &nbsp;
            <FontAwesomeIcon icon={faThumbsUp} /> 15 &nbsp;
            <FontAwesomeIcon icon={faShareNodes} /> 5
          </p>
        </div>
        <div className="fractions-action-buttons">
          <button>View</button>
          <button>Download</button>
        </div>
      </div>
    </div>
  );
};

export default Fractions;
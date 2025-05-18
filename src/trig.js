import React from 'react';
import './trig.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faThumbsUp, faShareNodes} from '@fortawesome/free-solid-svg-icons';

const Trig = () => {
  return (
    <div className="trig-card">
      {/* Top Image */}
      <div className="trig-image-container">
        <img 
          src="/images/mathproblem.jpg" 
          alt="Trigonometry Problem" 
        />
      </div>

      {/* Info Section */}
      <div className="trig-info-section">
        {/* Left: Title + Small Image + Text */}
        <div className="trig-left-content">
          <h2>
             Trigonometry
          </h2>
          <img 
            src="/images/face.jpeg" 
            alt="Tutor" 
            className="trig-tutor-avatar" 
          />
          <p>Nkululeko Mdluli</p>
          <p>
            <FontAwesomeIcon icon={faComment} /> 10 &nbsp;
            <FontAwesomeIcon icon={faThumbsUp} /> 18 &nbsp;
            <FontAwesomeIcon icon={faShareNodes} /> 7
          </p>
        </div>

        {/* Right: Buttons */}
        <div className="trig-action-buttons">
          <button className="trig-btn">View</button>
          <button className="trig-btn">Download</button>
        </div>
      </div>
    </div>
  );
};

export default Trig;
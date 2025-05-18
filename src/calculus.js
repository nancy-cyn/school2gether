import React from 'react';
import './calculus.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faThumbsUp, faShareNodes,} from '@fortawesome/free-solid-svg-icons';

const Calculus = () => {
  return (
    <div className="calculus-card">
      <div className="calculus-image-container">
        <img src="/images/mathproblem.jpg" alt="Calculus Problem" />
      </div>
      <div className="calculus-info-section">
        <div className="calculus-left-content">
          <h2> Calculus </h2>
          <img src="/images/face.jpeg" alt="Tutor" className="calculus-tutor-avatar" />
          <p>Ntuthuko Kubheka</p>
          <p><FontAwesomeIcon icon={faComment} /> 13 <FontAwesomeIcon icon={faThumbsUp} /> 24 <FontAwesomeIcon icon={faShareNodes} /> 8</p>
        </div>
        <div className="calculus-action-buttons">
          <button>View</button>
          <button>Download</button>
        </div>
      </div>
    </div>
  );
};

export default Calculus;
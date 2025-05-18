import React from 'react';
import './resourcealgebra.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment } from '@fortawesome/free-solid-svg-icons';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { faShareNodes } from '@fortawesome/free-solid-svg-icons';

const ResourceAlgebra = () => {
  return (
    <div className="resource-box">
      {/* Top Image */}
      <div className="image-container">
        <img 
          src="/images/mathproblem.jpg" 
          alt="Math Problem" 
        />
      </div>

      {/* Info Section */}
      <div className="info-container">
        {/* Left: Title + Small Image + Text */}
        <div className="left-content">
          <h2>Algebra Basics</h2>
          <img 
            src="/images/face.jpeg" 
            alt="Tutor" 
            className="small-img" 
          />
          <p>Nancy Kabobo</p>
          <p><FontAwesomeIcon icon={faComment} />10   <FontAwesomeIcon icon={faThumbsUp} /> 5   <FontAwesomeIcon icon={faShareNodes} /> 15</p>
        </div>

        {/* Right: Buttons */}
        <div className="right-buttons">
          <button>View</button>
          <button>Download</button>
        </div>
      </div>
    </div>
  );
};

export default ResourceAlgebra;

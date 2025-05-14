import React from 'react';
import './Progress.css';

function Progress() {
  return (
    <div className="progress-box">
      <h3 className="progress-title">Performance Progress</h3>
      <div className="progress-image-container">
        <img 
          src="/images/3d illustration pie chart.jpeg" // Update with your image path
          alt="Performance Progress Chart" 
          className="progress-image"
        />
      </div>
    </div>
  );
}

export default Progress;
import React from 'react';
import './Assignment.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';

function Assignment() {
  return (
    <div className="assignment-box">
      <h2 className="assignment-title">Upcoming Assignments</h2>
      <div className="assignment-buttons">
        <button className="assignment-btn"><FontAwesomeIcon icon={faPenToSquare} className="assignment-icon" />Math Homework</button>
        <button className="assignment-btn"><FontAwesomeIcon icon={faPenToSquare} className="assignment-icon" />Science Project</button>
        {/* <button className="assignment-btn"><FontAwesomeIcon icon={faPenToSquare} className="assignment-icon" />History Essay</button> */}
        {/* <button className="assignment-btn"><FontAwesomeIcon icon={faPenToSquare} className="assignment-icon" />Literature Review</button>
        <button className="assignment-btn"><FontAwesomeIcon icon={faPenToSquare} className="assignment-icon" />Afrikans HL paper2</button> */}
        <button className="assignment-btn">
          <FontAwesomeIcon icon={faPenToSquare} className="assignment-icon" />
          Accounting
        </button>
      </div>
    </div>
  );
}

export default Assignment;
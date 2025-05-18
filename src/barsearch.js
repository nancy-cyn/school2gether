import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import './barsearch.css';

const BarSearch = () => {
  const handleInputChange = (e) => {
    console.log("Input value:", e.target.value);
  };

  return (
    <div className="search-container" style={{
      position: 'absolute',
      top: '130px',
      right: '650px'
    }}>
      <input
        type="text"
        className="search-input"
        placeholder="Search resources..."
        onChange={handleInputChange}
      />
      <button className="search-button">
        <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon" />
      </button>
    </div>
  );
};

export default BarSearch;
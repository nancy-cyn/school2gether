import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortDown } from '@fortawesome/free-solid-svg-icons';
import './filtfilter.css';

const FiltFilter = () => {
  return (
    <div className="filt-filter-container" style={{
      position: 'absolute',
      top: '130px',
      right: '200px'
    }}>
      <div className="filt-filter-wrapper">
        <select className="filt-filter-dropdown">
          <option value="">Filter by Topic</option>
          <option value="algebra">Algebra</option>
          <option value="geometry">Geometry</option>
          <option value="calculus">Calculus</option>
          <option value="statistics">Statistics</option>
          <option value="trigonometry">Trigonometry</option>
        </select>
        <FontAwesomeIcon icon={faSortDown} className="filt-filter-icon" />
      </div>
    </div>
  );
};

export default FiltFilter;
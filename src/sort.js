import React, { useState } from 'react';
import './sort.css';

const SortDropdown = () => {
  const [sortOption, setSortOption] = useState('alphabetical');
  const [isOpen, setIsOpen] = useState(false);

  const options = [
    { value: 'alphabetical', label: 'Alphabetical (A-Z)' },
    { value: 'reverse-alphabetical', label: 'Reverse Alphabetical (Z-A)' },
    { value: 'date-added', label: 'Date Added' },
    { value: 'custom', label: 'Custom Order' }
  ];

  const toggleDropdown = () => setIsOpen(!isOpen);
  const selectOption = (option) => {
    setSortOption(option.value);
    setIsOpen(false);
  };

  return (
    <div className="sort-container">
      <div className="sort-dropdown">
        <button className="sort-button" onClick={toggleDropdown}>
          {options.find(opt => opt.value === sortOption)?.label || 'Sort'}
          <span className={`arrow ${isOpen ? 'up' : 'down'}`}>▼</span>
        </button>
        
        {isOpen && (
          <div className="dropdown-options">
            {options.map(option => (
              <div 
                key={option.value}
                className={`option ${sortOption === option.value ? 'selected' : ''}`}
                onClick={() => selectOption(option)}
              >
                {option.label}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SortDropdown;
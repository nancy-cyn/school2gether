import React, { useState } from 'react';
import './search.css';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value.toLowerCase());
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search by title..."
        value={searchTerm}
        onChange={handleChange}
        className="search-input"
      />
    </div>
  );
};

export default SearchBar;
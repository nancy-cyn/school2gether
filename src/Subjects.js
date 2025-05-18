import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faSortDown } from '@fortawesome/free-solid-svg-icons';
import './Subjects.css';

const Subjects = () => {
    const [searchInput, setSearchInput] = useState('');
  // Sort dropdown state
  const [sortOption, setSortOption] = useState('alphabetical');
  const [isOpen, setIsOpen] = useState(false);

  const sortOptions = [
    { value: 'alphabetical', label: 'Alphabetical (A-Z)' },
    { value: 'reverse-alphabetical', label: 'Reverse Alphabetical (Z-A)' },
    { value: 'date-added', label: 'Date Added' },
    { value: 'custom', label: 'Custom Order' }
  ];

  // All subject data
  const subjects = [
    {
      id: 1,
      title: "Mathematics ",
      items: ["Algebra", "Statistics"],
      image: "/images/calculator.png",
      position: { top: '200px', left: '100px' }
    },
    {
      id: 2,
      title: "IsiZulu HL",
      items: ["Ukusetshenziswa Kolimi", "Bengithi Lizokuna"],
      image: "/images/isizulu.jpg",
      position: { top: '200px', left: '550px' }
    },
    {
      id: 3,
      title: "English FAL",
      items: ["Adjectives", "Adverbs"],
      image: "/images/english.jpg",
      position: { top: '200px', left: '1000px' }
    },
    {
      id: 4,
      title: "Afrikaans HL",
      items: ["Grammatika", "Doelstellings"],
      image: "/images/afrikaans.jpg",
      position: { top: '500px', left: '100px' }
    },
    {
      id: 5,
      title: "Natural Sciences",
      items: ["Electric Circuits", "Chemistry"],
      image: "/images/ns.jpeg",
      position: { top: '500px', left: '550px' }
    },
    {
      id: 6,
      title: "EMS",
      items: ["Economic Systems", "Accounting Equations"],
      image: "/images/calculator.png",
      position: { top: '500px', left: '1000px' }
    },
    {
      id: 7,
      title: "Life Orientation",
      items: ["Study Skills", "Career Choices"],
      image: "/images/life.jpeg",
      position: { top: '800px', left: '100px' }
    },
    {
      id: 8,
      title: "Social Sciences",
      items: ["Community", "Cultural"],
      image: "/images/ss.jpeg",
      position: { top: '800px', left: '550px' }
    },
    {
      id: 9,
      title: "Geography",
      items: ["Continental landforms", "Climate zone patterns"],
      image: "/images/geo.jpeg",
      position: { top: '800px', left: '1000px' }
    }
  ];

  const toggleDropdown = () => setIsOpen(!isOpen);
  const selectOption = (option) => {
    setSortOption(option);
    setIsOpen(false);
  };

  return (
    <div className="subjects-container">
      {/* Header */}
      <div className="title-container" style={{ top: '100px', left: '70px' }}>
        <h1 className="title">Explore Different Subjects</h1>
        <p className="subtitle">Grade 9</p>
      </div>

      {/* Sort Dropdown */}
      <div className="sort-container">
        <div className="sort-dropdown">
          <button className="sort-button" onClick={toggleDropdown}>
            {sortOptions.find(opt => opt.value === sortOption)?.label || 'Sort'}
            <FontAwesomeIcon 
              icon={faSortDown} 
              className={`arrow ${isOpen ? 'up' : ''}`} 
            />
          </button>
          
          {isOpen && (
            <div className="dropdown-options">
              {sortOptions.map(option => (
                <div 
                  key={option.value}
                  className={`option ${sortOption === option.value ? 'selected' : ''}`}
                  onClick={() => selectOption(option.value)}
                >
                  {option.label}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Search Bar */}
      <div className="search-container">
        <div className="search-input-wrapper">
          <input
            type="text"
            placeholder="Search subjects..."
            className="search-input"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <FontAwesomeIcon 
            icon={faMagnifyingGlass} 
            className="search-icon" 
          />
        </div>
      </div>
      {/* Subject Boxes */}
      {subjects.map(subject => (
        <div 
          key={subject.id}
          className="subject-box"
          style={subject.position}
        >
          <h2 className="subject-title">{subject.title}</h2>
          <div className="subject-content">
            <img 
              src={subject.image} 
              alt={subject.title} 
              className="subject-image" 
            />
            <div className="subject-text">
              {subject.items.map((item, index) => (
                <p key={index}>{index + 1}. {item}</p>
              ))}
              <p>3. Explore <a 
                href="https://www.testpapers.co.za" 
                target="_blank"
                rel="noopener noreferrer"
                className="explore-link"
              >
                more
              </a></p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Subjects;
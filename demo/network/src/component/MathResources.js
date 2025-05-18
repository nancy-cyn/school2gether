import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faComment,
  faThumbsUp,
  faShareNodes,
  faMagnifyingGlass,
  faSortDown
} from '@fortawesome/free-solid-svg-icons';
import './MathResources.css';
import Navbar from './navbar.js';


const TopicHeader = () => (
  <div className="topic-container">
    <h1 className="math-topic">Explore Maths Resources</h1>
    <p className="grade-label">Grade 9</p>
  </div>
);

const SearchBar = () => (
  <div className="search-container">
    <input
      type="text"
      className="search-input"
      placeholder="Search resources..."
      onChange={(e) => console.log("Input value:", e.target.value)}
    />
    <button className="search-button">
      <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon" />
    </button>
  </div>
);

const ResourceFilter = () => (
  <div className="filter-container">
    <div className="filter-wrapper">
      <select className="filter-dropdown">
        <option value="">Filter by Topic</option>
        <option value="algebra">Algebra</option>
        <option value="geometry">Geometry</option>
        <option value="calculus">Calculus</option>
        <option value="statistics">Statistics</option>
        <option value="trigonometry">Trigonometry</option>
        <option value="probability">Probability</option>
        <option value="fractions">Fractions</option>
        <option value="finance">Finance</option>
        <option value="patterns">Patterns</option>
      </select>
      <FontAwesomeIcon icon={faSortDown} className="filter-icon" />
    </div>
  </div>
);

const ResourceCard = ({
  title,
  tutor,
  comments,
  likes,
  shares,
  position
}) => (
  <div className="resource-card" style={position}>
    <div className="resource-image-container">
      <img src="/images/mathproblem.jpg" alt={`${title} Problem`} />
    </div>
    <div className="resource-info-section">
      <div className="resource-left-content">
        <h2>{title}</h2>
        <img src="/images/face.jpeg" alt="Tutor" className="resource-tutor-avatar" />
        <p>{tutor}</p>
        <p>
          <FontAwesomeIcon icon={faComment} /> {comments} &nbsp;
          <FontAwesomeIcon icon={faThumbsUp} /> {likes} &nbsp;
          <FontAwesomeIcon icon={faShareNodes} /> {shares}
        </p>
      </div>
      <div className="resource-action-buttons">
        <button>View</button>
        <button>Download</button>
      </div>
    </div>
  </div>
);

const MathResources = () => {
  const resources = [
    // Algebra
    {
      title: "Algebra Basics",
      tutor: "Nancy Kabobo",
      comments: 10,
      likes: 5,
      shares: 15,
      position: { top: '200px', left: '50px' }
    },
    // Statistics
    {
      title: "Statistics",
      tutor: "Destiny Mabwe",
      comments: 12,
      likes: 8,
      shares: 20,
      position: { top: '200px', left: '400px' }
    },
    // Patterns
    {
      title: "Number Patterns",
      tutor: "Khwezi Mpumela",
      comments: 7,
      likes: 14,
      shares: 9,
      position: { top: '200px', left: '750px' }
    },
    // Probability
    {
      title: "Probability",
      tutor: "Ikaneng Mmako",
      comments: 15,
      likes: 22,
      shares: 11,
      position: { top: '200px', left: '1100px' }
    },
    // Fractions
    {
      title: "Fractions",
      tutor: "Christopher Skinner",
      comments: 8,
      likes: 15,
      shares: 5,
      position: { top: '600px', left: '50px' }
    },
    // Trigonometry
    {
      title: "Trigonometry",
      tutor: "Nkululeko Mdluli",
      comments: 10,
      likes: 18,
      shares: 7,
      position: { top: '600px', left: '400px' }
    },
    // Calculus
    {
      title: "Calculus",
      tutor: "Ntuthuko  Kubheka",
      comments: 13,
      likes: 24,
      shares: 8,
      position: { top: '600px', left: '750px' }
    },
    // Finance
    {
      title: "Financial Basics",
      tutor: "Sandile Kubheka",
      comments: 9,
      likes: 17,
      shares: 6,
      position: { top: '600px', left: '1100px' }
    }
  ];

  return (
    <div className="math-resources-container">
      <Navbar /> {/* Add the Navbar component here */}
      <TopicHeader />
      <SearchBar />
      <ResourceFilter />
      {resources.map((resource, index) => (
        <ResourceCard key={index} {...resource} />
      ))}
    </div>
  );
};

export default MathResources;
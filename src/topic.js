import React from 'react';
import './topic.css';

const Topic = () => {
  return (
    <div className="topic-container" style={{
      position: 'absolute',
      top: '130px',
      left: '50px'
    }}>
      <h1 className="math-topic">Explore Maths Resources</h1>
      <p className="grade-label">Grade 9</p>
    </div>
  );
};

export default Topic;
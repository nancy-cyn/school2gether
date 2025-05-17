import React from 'react';
import './title.css';

const Title = ({ text = "Explore Different Subjects", subtext = "Grade 9", position = { top: '100px', left: '70px' } }) => {
  return (
    <div 
      className="title-container" 
      style={{
        top: position.top,
        left: position.left,
        transform: position.left === '50%' ? 'translateX(-50%)' : 'none'
      }}
    >
      <h1 className="title">{text}</h1>
      <p className="subtitle">{subtext}</p>
    </div>
  );
};

export default Title;
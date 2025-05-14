import React from 'react';
import './Tasks.css';

function Task() {
  return (
    <div className="task-row">
      <div className="task-box"><p>Pending Tasks</p>
      <p>4</p></div>
      <div className="task-box"><p>Weekly Progress</p>
      <p>85%</p></div>
      <div className="task-box"><p>Overall Grade</p>
      <p>75</p></div>
    </div>
  );
}

export default Task;

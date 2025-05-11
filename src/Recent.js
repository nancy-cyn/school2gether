const Recent = () => {
    return (
      <div className="recent">
        <h2 className="recent-title">Completed Mathematic Quiz</h2>
        <div className="recent-list">
          <div className="recent-item">
            <span className="quiz-name">Algebra Basics</span>
            <span className="quiz-date">May 10, 2023</span>
          </div>
          <div className="recent-item">
            <span className="quiz-name">Geometry Fundamentals</span>
            <span className="quiz-date">May 8, 2023</span>
          </div>
          <div className="recent-item">
            <span className="quiz-name">Trigonometry Review</span>
            <span className="quiz-date">May 5, 2023</span>
          </div>
        </div>
      </div>
    );
  };
  
  export default Recent;
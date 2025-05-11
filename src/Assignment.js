const Assignment = () => {
    return (
      <div className="assignment">
        <h2>Upcoming Assignments</h2>
        <div className="buttons">
          <button className="btn">
            <span className="btn-text">Mathematic Quiz</span>
            <span className="btn-date">tomorrow</span>
          </button>
          <button className="btn">
            <span className="btn-text">Physics Quiz</span>
            <span className="btn-date">Tuesday</span>
          </button>
          <button className="btn">
            <span className="btn-text">Agric Quiz</span>
            <span className="btn-date">Wednesday</span>
          </button>
        </div>
      </div>
    );
  };
  
  export default Assignment;
  
import './Study.css';

function Study() {
  return (
    <div className="study-box">
      <h2 className="study-title">Study Times</h2>
      <div className="study-image-container">
        <img 
          src="/images/bar-chart-histogram-2.png" 
          alt="Study Chart" 
          className="study-image" 
        />
      </div>
    </div>
  );
}

export default Study;
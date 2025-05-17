

const MathBox = () => {
  return (
    <div className="math-box">
      <h2 className="math-title">Mathematics</h2>
      <div className="math-content">
        <img 
          src="/images/calculator.png"  // Using public folder
          alt="Calculator"
          className="math-image"
        />
        <div className="math-text">
          <p>1. Algebra</p>
          <p>2. Statistics</p>
          <p>3. Explore <a 
      href="https://www.testpapers.co.za/gr-9-mathematics?srsltid=AfmBOorZxF-_oChnNIf-15LvM7mC8IUMgecxWOzHTAY6CtvA2Xt415pw#google_vignette"
      target="_blank"
      rel="noopener noreferrer"
      className="explore-link"
    >
      more
    </a>
  </p>
        </div>
      </div>
    </div>
  );
};

export default MathBox;


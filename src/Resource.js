const Resource = () => {
  return (
    <div className="resource">
      <h1 className="resource-title">Learning Resources</h1>
      <div className="resource-grid">
        <button className="resource-card">
          <span className="resource-icon">🎬</span>
          <span className="resource-name">Video Lessons</span>
        </button>
        <button className="resource-card">
          <span className="resource-icon">📝</span>
          <span className="resource-name">Practice Tests</span>
        </button>
        <button className="resource-card">
          <span className="resource-icon">📚</span>
          <span className="resource-name">Study Guides</span>
        </button>
        <button className="resource-card">
          <span className="resource-icon">💬</span>
          <span className="resource-name">Q&A Forum</span>
        </button>
      </div>
    </div>
  );
};

export default Resource;
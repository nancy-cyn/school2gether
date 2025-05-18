import './CurriculumGrades.css';
import './Subjects';
import { Link } from 'react-router-dom';
import Navbar from './navbar.js';

const phases = [
  { name: 'Foundation Phase', grades: ['Grade 1', 'Grade 2', 'Grade 3'] },
  { name: 'Intermediate Phase', grades: ['Grade 4', 'Grade 5', 'Grade 6'] },
  { name: 'Senior Phase', grades: ['Grade 7', 'Grade 8', 'Grade 9'] },
  { name: 'FET Phase', grades: ['Grade 10', 'Grade 11', 'Grade 12'] },
];

const CurriculumGrades = () => {
  return (
    <>
      <Navbar />
      <div className="grades-container">
        <h1>Explore Resources by Grade</h1>
        <div className="grades-grid">
          {phases.map((phase, index) => (
            <div key={index} className="phase-block">
              <h2>{phase.name}</h2>
              <div className="grades-list">
                {phase.grades.map((grade, idx) => (
                  <div key={idx}>
                    {grade === 'Grade 9' ? (
                      <Link to="/subject" className="grade-button">
                        {grade}
                      </Link>
                    ) : (
                      <button className="grade-button">
                        {grade}
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CurriculumGrades;
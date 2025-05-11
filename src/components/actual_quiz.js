import {Clock} from 'lucide-react';
import './actual_quiz.css';


export default function QuizQuestion() {  
  return (
    <div className="quiz-container">
      {/* Quiz content */}
      <main className="main-content">
        <div className="quiz-header">
          <div className="question-number">Question 1/10</div>
          <div className="timer">
            <Clock className="timer-icon" />
            45:00
          </div>
        </div>
        
        <div className="progress-bar">
          <div className="progress-indicator"></div>
        </div>
        
        <div className="question-panel">
          <h2 className="question-text">
            If f(x) = 3x<sup>2</sup> + 2x - 1, find the derivative of f(x)
          </h2>
          
          <div className="answer-grid">
            <button className="answer-option">
              A) 6x + 2
            </button>
            <button className="answer-option">
              A) 6x + 2
            </button>
            <button className="answer-option">
              A) 6x + 2
            </button>
            <button className="answer-option">
              A) 6x + 2
            </button>
          </div>
        </div>
        
        <div className="navigation">
          <button className="nav-button previous">Previous</button>
          
          <div className="question-indicators">
            <button className="indicator active">1</button>
            <button className="indicator">2</button>
            <button className="indicator">3</button>
            <button className="indicator">4</button>
            <button className="indicator">5</button>
            <button className="indicator">6</button>
            <button className="indicator">7</button>
            <button className="indicator">8</button>
            <button className="indicator">9</button>
            <button className="indicator">10</button>
          </div>
          
          <button className="nav-button next">Next</button>
        </div>
      </main>
    </div>
  );
}
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './navbar';


import {
User,
Clock,
FileText,
Star,
CalendarDays,
CheckCircle,
AlertCircle,
Video,
Calculator
} from 'lucide-react';
import './instructions.css';

export default function QuizPage() {
const [agreed, setAgreed] = useState(false);
const navigate = useNavigate();

const handleStartQuiz = () => {
if (agreed) {
navigate('/actual_quiz');
}
};

return ( <div className="container">
      <Navbar />


  <main className="main-content">
    <div className="quiz-header">
      <h1 className="quiz-title">Mathematics Quiz - Algebra Fundementals</h1>
      
      <div className="metadata-grid">
        <div className="metadata-item">
          <User className="metadata-icon" />
          <span>Mr Ntuthuko Kubheka</span>
        </div>
        <div className="metadata-item">
          <Clock className="metadata-icon" />
          <span>45min</span>
        </div>
        <div className="metadata-item">
          <FileText className="metadata-icon" />
          <span>25 Questions</span>
        </div>
        <div className="metadata-item">
          <Star className="metadata-icon" />
          <span>100 Points</span>
        </div>
        <div className="metadata-item due-date">
          <CalendarDays className="metadata-icon" />
          <span>Due: May 15, 2025, 11:59 PM</span>
        </div>
      </div>
    </div>

    <div className="instructions-panel">
      <h2 className="panel-title">Quiz Instructions</h2>
      
      <div className="instruction-list">
        <div className="instruction-item">
          <CheckCircle className="check-icon" />
          <span>Read each question carefully before answering</span>
        </div>
        <div className="instruction-item">
          <CheckCircle className="check-icon" />
          <span>You can review and change answers before final submission</span>
        </div>
        <div className="instruction-item">
          <CheckCircle className="check-icon" />
          <span>All questions must be attempted</span>
        </div>
        <div className="instruction-item">
          <CheckCircle className="check-icon" />
          <span>You have 2 attempts for this quiz</span>
        </div>
      </div>

      <div className="warning-box">
        <AlertCircle className="warning-icon" />
        <span>Once started, the quiz timer cannot be paused. Endure you have stable internet connection before beginning</span>
      </div>
    </div>

    <div className="requirements-panel">
      <h2 className="panel-title">Quiz Requirements</h2>
      
      <div className="requirements-grid">
        <div className="requirement-item">
          <Video className="requirement-icon" />
          <span>Webcam required</span>
        </div>
        <div className="requirement-item">
          <Calculator className="requirement-icon" />
          <span>Calculator Allowed</span>
        </div>
      </div>
    </div>

    {/* Agreement and Submit */}
    <div className="agreement-box">
      <div className="agreement-container">
        <input 
          type="checkbox" 
          id="agreement"
          checked={agreed}
          onChange={() => setAgreed(!agreed)}
          className="checkbox"
        />
        <label htmlFor="agreement">
          I have read and understand the quiz instructions and guidelines. I agree to follow the academic integrity policy
        </label>
      </div>

      <button 
        className={`start-button ${agreed ? 'active' : 'disabled'}`}
        disabled={!agreed}
        onClick={handleStartQuiz}
      >
        Start Quiz
      </button>
    </div>
  </main>
</div>

);
} 

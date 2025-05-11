import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Book, Calendar, Clock, BarChart2 } from 'lucide-react';
import { MdPendingActions } from 'react-icons/md';
import Navbar from './navbar';
import './quizes.css';

const Quizes = () => {
  const navigate = useNavigate();

  const handleStartQuiz = () => {
    navigate('/instructions');
  };

  return (
    <div className="app-container">
      <Navbar />

      <div className="content-container">
        <h1 className="page-title">My Quizzes</h1>
        <p className="page-subtitle">Track your assignments and quizzes</p>

        <div className="main-grid">
          <div className="quiz-cards-container">
            {/* Quiz Card 1 */}
            <div className="quiz-card-wrapper">
              <div className="quiz-card">
                <h3 className="quiz-title">Algebra Expressions</h3>
                <p className="teacher-name">Ms Khwezi Mpumela</p>

                <div className="info-row">
                  <Book className="icon" size={18} />
                  <span>Mathematics</span>
                </div>

                <div className="info-row">
                  <Calendar className="icon" size={18} />
                  <span>Uploaded: May 07, 2025</span>
                </div>

                <div className="info-row">
                  <Clock className="icon" size={18} />
                  <span>Due: May 13, 2025</span>
                </div>

                <div className="button-container">
                  <button className="start-button" onClick={handleStartQuiz}>
                    Start Quiz
                  </button>
                </div>
              </div>
            </div>

            {/* Quiz Card 2 */}
            <div className="quiz-card-wrapper">
              <div className="quiz-card">
                <h3 className="quiz-title">Trigonometry Basics</h3>
                <p className="teacher-name">Mr Andile Mokoena</p>

                <div className="info-row">
                  <Book className="icon" size={18} />
                  <span>Mathematics</span>
                </div>

                <div className="info-row">
                  <Calendar className="icon" size={18} />
                  <span>Uploaded: May 06, 2025</span>
                </div>

                <div className="info-row">
                  <Clock className="icon" size={18} />
                  <span>Due: May 12, 2025</span>
                </div>

                <div className="button-container">
                  <button className="start-button" onClick={handleStartQuiz}>
                    Start Quiz
                  </button>
                </div>
              </div>
            </div>

            {/* Quiz Card 3 */}
            <div className="quiz-card-wrapper">
              <div className="quiz-card">
                <h3 className="quiz-title">Geometry Test</h3>
                <p className="teacher-name">Ms Zinhle Khumalo</p>

                <div className="info-row">
                  <Book className="icon" size={18} />
                  <span>Mathematics</span>
                </div>

                <div className="info-row">
                  <Calendar className="icon" size={18} />
                  <span>Uploaded: May 05, 2025</span>
                </div>

                <div className="info-row">
                  <Clock className="icon" size={18} />
                  <span>Due: May 11, 2025</span>
                </div>

                <div className="button-container">
                  <button className="start-button" onClick={handleStartQuiz}>
                    Start Quiz
                  </button>
                </div>
              </div>
            </div>

            {/* Quiz Card 4 */}
            <div className="quiz-card-wrapper">
              <div className="quiz-card">
                <h3 className="quiz-title">Statistics Quiz</h3>
                <p className="teacher-name">Mr Sipho Dlamini</p>

                <div className="info-row">
                  <Book className="icon" size={18} />
                  <span>Mathematics</span>
                </div>

                <div className="info-row">
                  <Calendar className="icon" size={18} />
                  <span>Uploaded: May 04, 2025</span>
                </div>

                <div className="info-row">
                  <Clock className="icon" size={18} />
                  <span>Due: May 10, 2025</span>
                </div>

                <div className="button-container">
                  <button className="start-button" onClick={handleStartQuiz}>
                    Start Quiz
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="sidebar-container">
            <div className="sidebar">
              {/* Average Grade */}
              <div className="sidebar-card">
                <div className="card-header">
                  <BarChart2 className="icon" size={20} />
                  <span className="card-title">Average Grade</span>
                </div>
                <div className="grade-value">85 %</div>
              </div>

              {/* Pending */}
              <div className="sidebar-card">
                <div className="card-header">
                  <div className="pending-header">
                    <MdPendingActions className="pending-icon" />
                    <span className="card-title">Pending</span>
                  </div>
                </div>
                <div className="pending-value">4</div>
              </div>

              {/* Recent Activities */}
              <div className="activities-section">
                <h3 className="section-title">Recent Activities</h3>

                <div className="activity-card">
                  <div className="activity-content">
                    <div className="activity-indicator"></div>
                    <div>
                      <div className="activity-title">Quiz uploaded</div>
                      <div className="activity-subtitle">Geometry Test 1</div>
                    </div>
                  </div>
                </div>

                <div className="activity-card">
                  <div className="activity-content">
                    <div className="activity-indicator"></div>
                    <div>
                      <div className="activity-title">Quiz uploaded</div>
                      <div className="activity-subtitle">Geometry Test 2</div>
                    </div>
                  </div>
                </div>

                <div className="activity-card">
                  <div className="activity-content">
                    <div className="activity-indicator"></div>
                    <div>
                      <div className="activity-title">Quiz graded</div>
                      <div className="activity-subtitle">Algebra Quiz</div>
                    </div>
                  </div>
                </div>

                <div className="activity-card">
                  <div className="activity-content">
                    <div className="activity-indicator"></div>
                    <div>
                      <div className="activity-title">New quiz uploaded</div>
                      <div className="activity-subtitle">Statistics</div>
                    </div>
                  </div>
                </div>

              </div> {/* End Activities Section */}
            </div> {/* End Sidebar */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quizes;

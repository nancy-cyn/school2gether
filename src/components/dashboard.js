import Navbar from './navbar'; 
import './dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Navbar /> 
      
      <div className="dashboard-content">
        <div className="left-column">
          <div className="card sessions-card">
            <h2 className="card-title">Today Sessions</h2>
            <div className="session-list">
              <div className="session-item">
                <div className="session-time">09:00 AM</div>
                <div className="session-subject">Mathematics</div>
                <div className="session-duration">1h</div>
              </div>
              <div className="session-item">
                <div className="session-time">09:00 AM</div>
                <div className="session-subject">Mathematics</div>
                <div className="session-duration">1h</div>
              </div>
              <div className="session-item">
                <div className="session-time">09:00 AM</div>
                <div className="session-subject">Mathematics</div>
                <div className="session-duration">1h</div>
              </div>
            </div>
          </div>

          <div className="card progress-overview-card">
            <h2 className="card-title">Progress Overview</h2>
            <div className="progress-circles">
              <div className="progress-circle-container">
                <div className="progress-circle">
                  <div className="progress-circle-inner"></div>
                </div>
                <div className="progress-label">Mathematics</div>
              </div>
              <div className="progress-circle-container">
                <div className="progress-circle">
                  <div className="progress-circle-inner"></div>
                </div>
                <div className="progress-label">Mathematics</div>
              </div>
              <div className="progress-circle-container">
                <div className="progress-circle">
                  <div className="progress-circle-inner"></div>
                </div>
                <div className="progress-label">Mathematics</div>
              </div>
              <div className="progress-circle-container">
                <div className="progress-circle">
                  <div className="progress-circle-inner"></div>
                </div>
                <div className="progress-label">Mathematics</div>
              </div>
            </div>
          </div>
        </div>

        <div className="middle-column">
          <div className="card tasks-card">
            <div className="tasks-icon">⌛</div>
            <div className="tasks-content">
              <div className="tasks-title">Pending Tasks</div>
              <div className="tasks-count">4</div>
            </div>
          </div>

          <div className="card study-time-card">
            <h2 className="card-title">Study Time</h2>
            <div className="study-chart">
              <div className="chart-bar"></div>
              <div className="chart-bar"></div>
              <div className="chart-bar"></div>
              <div className="chart-bar"></div>
              <div className="chart-bar"></div>
            </div>
          </div>

          <div className="card resources-card">
            <h2 className="card-title">Learning Resources</h2>
            <div className="resources-grid">
              <div className="resource-item">
                <div className="resource-icon">📁</div>
                <span>Study Material</span>
              </div>
              <div className="resource-item">
                <div className="resource-icon">📝</div>
                <span>Practice Tests</span>
              </div>
              <div className="resource-item">
                <div className="resource-icon">🎥</div>
                <span>Video Tutorials</span>
              </div>
              <div className="resource-item">
                <div className="resource-icon">👥</div>
                <span>Live Sessions</span>
              </div>
            </div>
          </div>
        </div>

        <div className="right-column">
          <div className="card progress-card">
            <div className="progress-icon">⭕</div>
            <div className="progress-content">
              <div className="progress-title">Weekly Progress</div>
              <div className="progress-percentage">85%</div>
            </div>
          </div>

          <div className="card grade-card">
            <div className="grade-icon">📊</div>
            <div className="grade-content">
              <div className="grade-title">Overall Grade</div>
              <div className="grade-percentage">65%</div>
            </div>
          </div>

          <div className="card assignments-card">
            <h2 className="card-title">Upcoming Assignments</h2>
            <div className="assignments-list">
              <div className="assignment-item">
                <div className="assignment-status">
                  <div className="status-dot"></div>
                </div>
                <div className="assignment-name">Mathematics Quiz</div>
                <div className="assignment-due">Tomorrow</div>
              </div>
              <div className="assignment-item">
                <div className="assignment-status">
                  <div className="status-dot"></div>
                </div>
                <div className="assignment-name">Mathematics Quiz</div>
                <div className="assignment-due">Tomorrow</div>
              </div>
              <div className="assignment-item">
                <div className="assignment-status">
                  <div className="status-dot"></div>
                </div>
                <div className="assignment-name">Mathematics Quiz</div>
                <div className="assignment-due">Tomorrow</div>
              </div>
            </div>
          </div>

          <div className="card activities-card">
            <h2 className="card-title">Recent Activities</h2>
            <div className="activities-list">
              <div className="activity-item">
                <div className="activity-text">Completed Mathematics Quiz</div>
                <div className="activity-time">2 hours ago</div>
              </div>
              <div className="activity-item">
                <div className="activity-text">Completed Mathematics Quiz</div>
                <div className="activity-time">2 hours ago</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
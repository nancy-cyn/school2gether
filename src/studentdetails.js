// studentdetails.js
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { Sidebar } from './sidebar'; // Import the Sidebar component
import './studentdetail.css';

/**
 * Main StudentDetails Component - Contains the entire application layout
 */
export function StudentDetails() {
  // State for sidebar visibility and viewport detection
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDesktopView, setIsDesktopView] = useState(window.innerWidth > 1024);

  // Effect for handling window resize and sidebar state
  useEffect(() => {
    const handleResize = () => {
      const newIsDesktopView = window.innerWidth > 1024;
      setIsDesktopView(newIsDesktopView);

      // Close sidebar when switching to desktop view
      if (newIsDesktopView && isSidebarOpen) {
        setIsSidebarOpen(false);
        document.body.classList.remove('sidebar-open');
      }
    };

    window.addEventListener('resize', handleResize);

    // Toggle body class based on sidebar state
    if (isSidebarOpen && !isDesktopView) {
        document.body.classList.add('sidebar-open');
    } else {
        document.body.classList.remove('sidebar-open');
    }

    // Cleanup function
    return () => {
      window.removeEventListener('resize', handleResize);
      document.body.classList.remove('sidebar-open');
    };
  }, [isSidebarOpen, isDesktopView]);

  // Toggle sidebar visibility
  const toggleSidebar = () => {
    setIsSidebarOpen(prev => !prev);
  };

  return (
    <div className="app-container">
      {/* Navigation Bar */}
      <div className="navbar">
        {/* Hamburger menu for mobile */}
        {!isDesktopView && (
          <div className="hamburger-menu" onClick={toggleSidebar}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
        )}
        
        {/* Logo */}
        <img
          src="/images/logo.png"
          alt="Logo"
          className="navbar-logo"
        />
        
        {/* Navigation icons */}
        <div className="navbar-icons">
          <FontAwesomeIcon icon={faBell} className="navbar-icon" />
          <FontAwesomeIcon icon={faEnvelope} className="navbar-icon" />
          <FontAwesomeIcon icon={faPhone} className="navbar-icon" />
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="content-layout">
        {/* Sidebar Component */}
        <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} isDesktopView={isDesktopView} />

        {/* Main Content Area */}
        <div className="main-area">
          <div className="main-content">
            <div className="content-container">
              <div className="content-header"></div>

              {/* Student Cards Section */}
              <div className="student-cards-wrapper">
                {/* Student Profile Card */}
                <div className="data-rectangle">
                  <img
                    src="/images/studentimage.png"
                    alt="Student"
                    className="student-avatar"
                  />
                  <div className="student-name">
                    <h3>Ikaneng Mmako</h3>
                    <p>Grade10 - Physics</p>
                  </div>

                  {/* Student Action Buttons */}
                  <div className="student-actions">
                    <button className="btn btn-primary">View Profile</button>
                    <button className="btn btn-secondary">Message</button>
                  </div>

                  {/* Progress Bar Section */}
                  <div className="progress-container">
                    <div className="progress-header">
                      <span className="progress-label"></span>
                      <span className="sessions-remaining">3 of 4 sessions used</span>
                    </div>
                    <div className="progress-bar">
                      <div className="progress-fill"></div>
                    </div>
                    <div className="progress-labels">
                      <span>Begin</span>
                      <span>Halfway</span>
                      <span>Complete</span>
                    </div>
                  </div>
                </div>

                {/* Performance Metrics Graph Card */}
                <div className="graph-card">
                  <h4>Performance Metrics</h4>
                  <div className="vertical-bars-container">
                    <div className="bar-column">
                      <div className="bar-container">
                        <div className="bar-background">
                          <div className="bar-fill" style={{ height: '75%' }}></div>
                        </div>
                      </div>
                      <span className="bar-label">Homework</span>
                      <span className="bar-value">75%</span>
                    </div>
                    <div className="bar-column">
                      <div className="bar-container">
                        <div className="bar-background">
                          <div className="bar-fill" style={{ height: '60%' }}></div>
                        </div>
                      </div>
                      <span className="bar-label">Quizzes</span>
                      <span className="bar-value">60%</span>
                    </div>
                    <div className="bar-column">
                      <div className="bar-container">
                        <div className="bar-background">
                          <div className="bar-fill" style={{ height: '85%' }}></div>
                        </div>
                      </div>
                      <span className="bar-label">Test 1</span>
                      <span className="bar-value">85%</span>
                    </div>
                    <div className="bar-column">
                      <div className="bar-container">
                        <div className="bar-background">
                          <div className="bar-fill" style={{ height: '90%' }}></div>
                        </div>
                      </div>
                      <span className="bar-label">Participation</span>
                      <span className="bar-value">90%</span>
                    </div>
                    <div className="bar-column">
                      <div className="bar-container">
                        <div className="bar-background">
                          <div className="bar-fill" style={{ height: '70%' }}></div>
                        </div>
                      </div>
                      <span className="bar-label">Project 1</span>
                      <span className="bar-value">70%</span>
                    </div>
                  </div>
                </div>

                {/* Additional Info Boxes */}
                <div className="info-boxes-container">
                  <div className="info-box">
                    <h5>Learning Resources</h5>
                    <p>Your content here...</p>
                  </div>
                  <div className="info-box">
                    <h5>Results</h5>
                    <p>Your content here...</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
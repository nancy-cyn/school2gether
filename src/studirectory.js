import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faUser, faChartLine, faCalendarDays, 
  faVideo, faMessage, faBell, 
  faEnvelope, faPhone 
} from '@fortawesome/free-solid-svg-icons';
import './App.css';

// ==============================================
// SIDEBAR COMPONENT
// ==============================================
function Sidebar({ isOpen, onClose, isDesktopView }) {
  return (
    <div className={`sidebar ${isOpen ? 'open' : ''} ${isDesktopView ? 'desktop-visible' : ''}`}>
      {/* Mobile-only header (close button) */}
      {!isDesktopView && (
        <div className="sidebar-header">
          <h3>Menu</h3>
          <button className="close-sidebar-btn" onClick={onClose}>
            &times;
          </button>
        </div>
      )}
      
      {/* Sidebar content wrapper */}
      <div className="sidebar-content-wrapper">
        {/* Navigation sections */}
        <div className="sidebar-sections">
          {/* Top section */}
          <ul className="sidebar-nav">
            <li><a href="#dashboard">Dashboard</a></li>
            <li><a href="#sessions"><FontAwesomeIcon icon={faCalendarDays} />Sessions</a></li>
            <li><a href="#students"><FontAwesomeIcon icon={faUser} /> Students</a></li>
            <li><a href="#analytics"><FontAwesomeIcon icon={faChartLine} /> Analytics</a></li>
          </ul>

          {/* Middle section */}
          <ul className="sidebar-nav middle-section">
            <li><a href="#materials">Materials</a></li>
            <li><a href="#recording"><FontAwesomeIcon icon={faVideo} /> Recordings</a></li>
            <li><a href="#assessments">Assessments</a></li>
          </ul>

          {/* Bottom section */}
          <ul className="sidebar-nav bottom-section">
            <li><a href="#messages"><FontAwesomeIcon icon={faMessage} /> Messages</a></li>
            <li><a href="#requests"><FontAwesomeIcon icon={faEnvelope} /> Requests</a></li>
            <li><a href="#noticification"><FontAwesomeIcon icon={faBell} />Noticifications</a></li>
            {!isDesktopView && (
              <li><a href="#my-profile">View My Profile</a></li>
            )}
          </ul>
        </div>

        {/* Desktop-only tutor profile */}
        {isDesktopView && (
          <div className="tutor-profile">
            <img
              src="/images/studentimage.png"
              alt="Tutor Avatar"
              className="tutor-avatar"
            />
            <span className="tutor-text">Tutor</span>
          </div>
        )}
      </div>
    </div>
  );
}

// ==============================================
// MAIN COMPONENT: STUDENT DIRECTORY
// ==============================================
function StudentDirectory() {
  // State for sidebar visibility and responsive behavior
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDesktopView, setIsDesktopView] = useState(window.innerWidth > 1024);

  // Handle window resize and sidebar state
  useEffect(() => {
    const handleResize = () => {
      const newIsDesktopView = window.innerWidth > 1024;
      setIsDesktopView(newIsDesktopView);

      // Close sidebar if switching to desktop view
      if (newIsDesktopView && isSidebarOpen) {
        setIsSidebarOpen(false);
        document.body.classList.remove('sidebar-open');
      }
    };

    window.addEventListener('resize', handleResize);

    // Toggle body class for mobile sidebar overlay
    if (isSidebarOpen && !isDesktopView) {
      document.body.classList.add('sidebar-open');
    } else {
      document.body.classList.remove('sidebar-open');
    }

    return () => {
      window.removeEventListener('resize', handleResize);
      document.body.classList.remove('sidebar-open');
    };
  }, [isSidebarOpen, isDesktopView]);

  // Toggle sidebar (mobile)
  const toggleSidebar = () => {
    setIsSidebarOpen(prev => !prev);
  };

  return (
    <div className="app-container">
      {/* Navbar */}
      <div className="navbar">
        {/* Mobile hamburger menu */}
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
        
        {/* Action icons */}
        <div className="navbar-icons">
          <FontAwesomeIcon icon={faBell} className="navbar-icon" />
          <FontAwesomeIcon icon={faEnvelope} className="navbar-icon" />
          <FontAwesomeIcon icon={faPhone} className="navbar-icon" />
        </div>
      </div>

      {/* Main content area */}
      <div className="content-layout">
        <Sidebar 
          isOpen={isSidebarOpen} 
          onClose={toggleSidebar} 
          isDesktopView={isDesktopView} 
        />

        <div className="main-area">
          <div className="main-content">
            {/* Action bar (add student + search) */}
            <div className="action-bar">
              <button className="add-student-btn">
                <img
                  src="/images/add.png"
                  alt="Add"
                  className="add-icon"
                />
                Add Student
              </button>

              <div className="search-container">
                <svg
                  width="20px"
                  height="20px"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="search-icon"
                >
                  <path
                    d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z"
                    stroke="#BDBECC"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <input
                  type="text"
                  placeholder="Search Students"
                  className="search-input"
                />
              </div>
            </div>

            {/* Student cards container */}
            <div className="content-container">
              {/* Header (checkbox + filters) */}
              <div className="content-header">
                <div className="checkbox-wrapper">
                  <input
                    type="checkbox"
                    className="custom-checkbox"
                  />
                  <div className="divider-line"/>
                  <div className="selected-text">Selected: 0</div>
                </div>

                <div className="filter-controls">
                  <div className="filter-group">
                    <span className="filter-label">Status</span>
                    <select className="filter-select">
                      <option>All</option>
                      <option>Active</option>
                      <option>Inactive</option>
                    </select>
                  </div>
                  <div className="filter-group">
                    <span className="filter-label">Grade</span>
                    <select className="filter-select">
                      <option>All</option>
                      <option>A</option>
                      <option>B</option>
                      <option>C</option>
                    </select>
                  </div>
                  <div className="filter-group">
                    <span className="filter-label">Sort by</span>
                    <select className="filter-select">
                      <option>Name</option>
                      <option>Date</option>
                      <option>Grade</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Student cards grid */}
              <div className="student-cards-wrapper">
                {/* Student Card 1 */}
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
                  <div className="student-info">
                    <p>Last Session</p>
                    <p>July 21, 2025</p>
                  </div>

                  <div className="progress-container">
                    <div className="progress-header">
                      <span className="progress-label">Progress</span>
                      <span className="sessions-remaining">2 sessions left</span>
                    </div>
                    <div className="progress-bar">
                      <div className="progress-fill"></div>
                    </div>
                  </div>

                  <div className="parent-info">
                    <p>Parent/Guardian</p>
                    <p>Lesedi</p>
                  </div>

                  <div className="preview-button-container">
                    <button className="preview-button">
                      <svg className="preview-icon" viewBox="0 0 24 24" fill="none" stroke="#4a4a4a">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <circle cx="12" cy="12" r="3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      Preview
                    </button>
                  </div>
                </div>

                {/* Student Card 2 (Duplicate) */}
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
                  <div className="student-info">
                    <p>Last Session</p>
                    <p>July 21, 2025</p>
                  </div>

                  <div className="progress-container">
                    <div className="progress-header">
                      <span className="progress-label">Progress</span>
                      <span className="sessions-remaining">2 sessions left</span>
                    </div>
                    <div className="progress-bar">
                      <div className="progress-fill"></div>
                    </div>
                  </div>

                  <div className="parent-info">
                    <p>Parent/Guardian</p>
                    <p>Lesedi</p>
                  </div>

                  <div className="preview-button-container">
                    <button className="preview-button">
                      <svg className="preview-icon" viewBox="0 0 24 24" fill="none" stroke="#4a4a4a">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <circle cx="12" cy="12" r="3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      Preview
                    </button>
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

export default StudentDirectory;
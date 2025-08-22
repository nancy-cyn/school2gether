import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import './studirectory.css';

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
      {/* Navbar Component */}
      <Navbar toggleSidebar={toggleSidebar} isDesktopView={isDesktopView} />

      {/* Main content area */}
      <div className="content-layout">
        {/* Sidebar Component */}
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
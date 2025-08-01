// sidebar.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faChartLine, faCalendarDays, faVideo, faMessage, faBell, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './studentdetail.css';

/**
 * Sidebar Component - Displays the navigation menu
 * @param {boolean} isOpen - Controls sidebar visibility
 * @param {function} onClose - Callback to close sidebar
 * @param {boolean} isDesktopView - Indicates desktop viewport
 */
export function Sidebar({ isOpen, onClose, isDesktopView }) {
  return (
    <div className={`sidebar ${isOpen ? 'open' : ''} ${isDesktopView ? 'desktop-visible' : ''}`}>
      {/* Mobile sidebar header with close button */}
      {!isDesktopView && (
        <div className="sidebar-header">
          <h3>Menu</h3>
          <button className="close-sidebar-btn" onClick={onClose}>
            &times;
          </button>
        </div>
      )}
      
      {/* Main sidebar content */}
      <div className="sidebar-content-wrapper">
        <div className="sidebar-sections">
          {/* Top navigation section */}
          <ul className="sidebar-nav">
            <li><a href="#dashboard">Dashboard</a></li>
            <li><a href="#sessions"><FontAwesomeIcon icon={faCalendarDays} />Sessions</a></li>
            <li><a href="#students"><FontAwesomeIcon icon={faUser} /> Students</a></li>
            <li><a href="#analytics"><FontAwesomeIcon icon={faChartLine} /> Analytics</a></li>
          </ul>

          {/* Middle navigation section */}
          <ul className="sidebar-nav middle-section">
            <li><a href="#materials">Materials</a></li>
            <li><a href="#recording"><FontAwesomeIcon icon={faVideo} /> Recordings</a></li>
            <li><a href="#assessments">Assessments</a></li>
          </ul>

          {/* Bottom navigation section */}
          <ul className="sidebar-nav bottom-section">
            <li><a href="#messages"><FontAwesomeIcon icon={faMessage} /> Messages</a></li>
            <li><a href="#requests"><FontAwesomeIcon icon={faEnvelope} /> Requests</a></li>
            <li><a href="#noticification"><FontAwesomeIcon icon={faBell} />Noticifications</a></li>
            {!isDesktopView && (
              <li><a href="#my-profile">View My Profile</a></li>
            )}
          </ul>
        </div>

        {/* Tutor profile (visible only in desktop view) */}
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
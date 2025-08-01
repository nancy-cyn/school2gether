// navbar.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';

/**
 * Navbar Component - Contains the navigation bar with logo and icons
 * @param {Object} props - Component props
 * @param {boolean} props.isDesktopView - Whether the view is desktop size
 * @param {function} props.toggleSidebar - Function to toggle sidebar visibility
 */
export function Navbar({ isDesktopView, toggleSidebar }) {
  return (
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
  );
}
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';

function Navbar({ toggleSidebar, isDesktopView }) {
  return (
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
  );
}

export default Navbar;
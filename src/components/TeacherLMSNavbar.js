import logo from './logo.png';
import profilePic from './dp.jpg';
import { LuLayoutDashboard, LuUsers, LuBell, LuCalendar, LuMessageSquare,LuLogOut, LuSettings } from "react-icons/lu";
import { FaBell } from "react-icons/fa";
import './TeacherLMSNavbar.css';
import { NavLink } from 'react-router-dom';
import { MdOutlineQuiz } from "react-icons/md";
import React, { useState, useRef, useEffect } from 'react';
import { RiUserCommunityLine } from "react-icons/ri";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
const dropdownRef = useRef(null);

const toggleDropdown = () => {
    setIsDropdownOpen(prev => !prev);
};

// Close dropdown when clicking outside
useEffect(() => {
    const handleClickOutside = (event) => { // Change to event
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) { // Change to event.target
             setIsDropdownOpen(false);
}
};

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
        document.removeEventListener('mousedown', handleClickOutside);
    };
}, []);
    
    return ( 
        <nav className="navbar">
      <div className="left-section">
        <img src={logo} alt="logo" className='logo' />
        <div className="nav-links">
          <div className="nav-item">
            <NavLink to="/dashboard" className="nav-link" activeClassName="active"> 
              <LuLayoutDashboard />
              Dashboard
            </NavLink>
          </div>
          <div className="nav-item">
            
          <NavLink to="/students" className="nav-link" activeClassName="active"> 
              <LuUsers />
              My Students
            </NavLink>
          </div>
          <div className="nav-item">
          <NavLink to="/requests" className="nav-link" activeClassName="active"> 
              <LuBell />
              Requests
            </NavLink>
          </div>
          <div className="nav-item">
            
            <NavLink to="/schedule" className="nav-link" activeClassName="active"> 
              <LuCalendar />
              Schedule
            </NavLink>
          </div>
          <div className="nav-item">
          <NavLink to="/messages" className="nav-link" activeClassName="active"> 
              <LuMessageSquare />
              Messages
            </NavLink>
          </div>
          <div className="nav-item">
          <NavLink to="/quiz" className="nav-link" activeClassName="active"> 
              <MdOutlineQuiz />
              Create Quiz
            </NavLink>
          <NavLink to="/Networki" className="nav-link" activeClassName="active">
                      <RiUserCommunityLine />
                      Networking
          </NavLink>
          </div>
        </div>
      </div>
      
      <div className="right-section">
        
        <div className="notification-icon">
          <FaBell />
        </div>
        

        <div className="profile-info" ref={dropdownRef}>
          <div className="profile-image" onClick={toggleDropdown} style={{ cursor: 'pointer' }}>
              <img src={profilePic} alt="Profile" />
          </div>
          {isDropdownOpen && (
              <div className="dropdown">
                  <NavLink to="/profile/settings" className="dropdown-item">
                      <LuSettings />
                      Profile Settings
                  </NavLink>
                  <NavLink to="/" className="dropdown-item">
                      <LuLogOut />
                      Logout
                  </NavLink>
                  
              </div>
          )}
          <div className="profile-text">
              <span>Sarah Sarah</span>
              <span className="role">Math Teacher</span>
          </div>
      </div>
      </div>
        </nav>
     );
}
 
export default Navbar;
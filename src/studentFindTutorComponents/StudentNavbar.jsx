import logo from './school2gether_logo.png';
import profilePic from './student_profilePortrait.png';
import {LuUsers, LuBell, LuCalendar, LuMessageSquare } from "react-icons/lu";
import { FaBell } from "react-icons/fa";
import { FaMagnifyingGlass } from "react-icons/fa6";
import './StudentNavbar.css';
import React from 'react';
import { NavLink } from 'react-router-dom';

const StudentNavbar = () => {

    
    return ( 
        <nav className="studentNavbar">
          <div className="left-section">
            <img src={logo} alt="logo" className='logo' />
            <div className="nav-links">
              <div className="nav-item">
                <NavLink to="/findTutors" className="nav-link" activeClassName="active"> 
                  <FaMagnifyingGlass />
                  Find Tutors
                </NavLink>
              </div>
              <div className="nav-item">
                
              <NavLink to="/tutors" className="nav-link" activeClassName="active"> 
                  <LuUsers />
                  My Tutors
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
            </div>
          </div>
          
          <div className="right-section">
            <div className="notification-icon">
              <FaBell />
            </div>
            <div className="profile-info">
              <div className="profile-image">
                <img src={profilePic} alt="Profile" /> 
              </div>
              <div className="profile-text">
                <span>John Doe</span>
                <span className="role">Grade 10 Learner</span>
              </div>
            </div>
          </div>
        </nav>
     );
}
 
export default StudentNavbar;
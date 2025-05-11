import logo from './logo.png';
import profilePic from './dp.jpg';
import { LuLayoutDashboard, LuUsers, LuBell, LuCalendar, LuMessageSquare } from "react-icons/lu";
import { FaBell } from "react-icons/fa";
import './navbar.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {

    
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
            
          <NavLink to="/tutors" className="nav-link" activeClassName="active"> 
              <LuUsers />
              My Tutors
            </NavLink>
          </div>
          <div className="nav-item">
          <NavLink to="/quizes" className="nav-link" activeClassName="active"> 
              <LuBell />
              Quizes
            </NavLink>
          </div>
          <div className="nav-item">
            
            <NavLink to="/timetable" className="nav-link" activeClassName="active"> 
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
            <span>Sarah Sarah</span>
            <span className="role">Math Teacher</span>
          </div>
        </div>
      </div>
        </nav>
     );
}
 
export default Navbar;
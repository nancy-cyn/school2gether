import logo from './logo.png';
import profilePic from './dp.jpg';
import { MessageSquare, Home, Book, User, MapPin, Upload, Image, Download, Eye, ThumbsUp, Share2, Plus } from 'lucide-react';
import { LuUsers, LuBell, LuCalendar, LuMessageSquare } from "react-icons/lu";
import { FaBell } from "react-icons/fa";
import { NotebookPen,LaptopMinimalCheck  } from 'lucide-react';
import './navbar.css';
import Chris from './IMG_CHRIS.jpg';
import { NavLink } from 'react-router-dom';

const Navbar = () => {

    
    return ( 
        <nav className="navbar">
      <div className="right-section">
        <img src={logo} alt="logo" className='logo' />
        <div className="nav-links">
          <div className="nav-item">
            <NavLink to="/home" className="nav-link" activeClassName="active"> 
              <Home />
              Home
            </NavLink>
          </div>
          <div className="nav-item">
            
          <NavLink to="/curriculum" className="nav-link" activeClassName="active"> 
              <NotebookPen />
              Resources
            </NavLink>
          </div>
            <div className="nav-item">
          <NavLink to="/messages" className="nav-link" activeClassName="active"> 
              <LuMessageSquare />
              Messages
            </NavLink>
          </div>

          <div className="nav-item">
          <NavLink to="/lms" className="nav-link" activeClassName="active"> 
            <LaptopMinimalCheck />
 
              LMS
            </NavLink>
          </div>
          <div className="nav-item">
            
          </div>
        </div>
      </div>
      
      <div className="right-section">
        <div className="notification-icon">
          <FaBell />
        </div>
        <div className="profile-info">
          <div className="profile-image">
            <img src={Chris} alt="Profile" /> 
          </div>
          <div className="profile-text">
            <span>Christopher Skinner</span>
            <span className="role">High School Science Teacher</span>
          </div>
        </div>
      </div>
        </nav>
     );
}
 
export default Navbar;
import logo from './logo.png';
import profilePic from './dp.jpg';
import { LuLayoutDashboard, LuUsers, LuBell, LuCalendar, LuMessageSquare } from "react-icons/lu";
import { FaBell } from "react-icons/fa";

const Navbar = () => {
    return ( 
        <nav className="navbar">
      <div className="left-section">
        <img src={logo} alt="logo" className='logo' />
        <div className="nav-links">
          <div className="nav-item">
            <a href='#page'><LuLayoutDashboard />
            Dashboard</a>
          </div>
          <div className="nav-item">
            <LuUsers />
            <a href='#page'>My Students</a>
          </div>
          <div className="nav-item active">
            <LuBell />
            <span>Requests</span>
          </div>
          <div className="nav-item">
            <LuCalendar />
            <a href='#page'>Schedule</a>
          </div>
          <div className="nav-item">
            <LuMessageSquare />
            <a href='#page'>Messages</a>
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
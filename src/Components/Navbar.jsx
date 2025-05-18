import './Navbar.css'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return ( 
        <div id='ParentsNav'>
            <h2>SchoolsTogether</h2>
            <div id='ParentsLink'>
                <Link to="/">Home</Link>
                <Link to="/tutors">Tutors</Link>
                <Link to="">Timetable</Link>
                <Link to="/performance">Perfomance</Link>
                <Link to="/messages">Messages</Link>
            </div>
        </div>
     );
}
 
export default Navbar;
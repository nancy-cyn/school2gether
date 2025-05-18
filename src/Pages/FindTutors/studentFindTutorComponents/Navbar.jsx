import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Navbar.css'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return ( 
        <div id='Navbar'>
            <div id='Content'>
                <h2 id='ProjectName'>SchoolsTogether</h2>
                <div id='Links'>
                    <Link to="">
                        <FontAwesomeIcon 
                            icon={faMagnifyingGlass} 
                        /> Find Tutors</Link>
                    <Link to="/lms/performance"> <FontAwesomeIcon icon={faGraduationCap}Current/> LMS</Link>
                </div>
            </div>
        </div>
     );
}
 
export default Navbar;
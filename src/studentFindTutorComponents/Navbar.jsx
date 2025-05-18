import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Navbar.css'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    return ( 
        <div id='Navbar'>
            <div id='Content'>
                <h2 id='ProjectName'>SchoolsTogether</h2>
                <div id='Links'>
                    <a href="">
                        <FontAwesomeIcon 
                            icon={faMagnifyingGlass} 
                        /> Find Tutors</a>
                    <a href=""> <FontAwesomeIcon icon={faGraduationCap}Current/> Tutors</a>
                </div>
            </div>
        </div>
     );
}
 
export default Navbar;
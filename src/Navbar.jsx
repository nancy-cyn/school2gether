import './Navbar.css'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return ( 
        <div id='ParentsNav'>
            <h2>SchoolsTogether</h2>
            <div id='ParentsLink'>
                <Link href="">Home</Link>
                <Link href="">Tutors</Link>
                <Link href="">Timetable</Link>
                <Link href="">Perfomance</Link>
                <Link href="">Messages</Link>
            </div>
        </div>
     );
}
 
export default Navbar;
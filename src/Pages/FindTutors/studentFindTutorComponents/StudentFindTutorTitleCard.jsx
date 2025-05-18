import './StudentFindTutorTitleCard.css'
import classroom from './classroom.png';
const StudentFindTutorTitleCard = () => {
    return ( 
        <div className="StudentFindTutorTitleCard">
            <h1 id='H1Slogan'>Find the Perfect Tutor for Your Child</h1>
            <p id='paragraphSlogan'>Expert tutors with verified credentials</p>
            <img src={classroom} alt="A classroom" />           
        </div>
    );
}
 
export default StudentFindTutorTitleCard;
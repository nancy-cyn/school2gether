import './StudentFindTutorBodyProfileCard.css'; // Import the CSS file for styling
import starRating from './starRating.png'; // Import the star rating image
import student_profilePortrait from './student_profilePortrait.png'; // Import the profile image
const StudentFindTutorBodyProfileCard = () => {
    return ( 
        <div className="StudentFindTutorBodyProfileCard">
            <div className="StudentFindTutorBodyProfileCardProfileImage">
                <img src= {student_profilePortrait}alt="A tutor" />
                <h2>John Doe</h2> 
                <span>Mathematics</span>
            </div>
            <div className="StudentFindTutorBodyProfileCardRatingImage">
                <img src={starRating} alt="Star rating" />
            </div>
            <div className="StudentFindTutorBodyProfileCardInfo">
                {/* <h2>John Doe</h2>{/* All values herein to become dynamic 
                <span>Mathematics</span> */}
                <p>Experience: 5 years</p>
                <p>BSc Mathematics</p>
                <p>R300/hour</p>
                <p>Available: Weekdays 4pm - 8pm</p>
            </div>
            <div className="StudentFindTutorBodyProfileCardButton">
                <button type="submit" id="StudentFindTutorBodyProfileCardButton">Book Session</button>
            </div>
        </div>
    );
}
 
export default StudentFindTutorBodyProfileCard;
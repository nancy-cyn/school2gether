import StudentFindTutorBodyProfileCard from "./StudentFindTutorBodyProfileCard";
import "./StudentFindTutorBodyProfileCardDisplayArea.css";
const StudentFindTutorBodyProfileCardDisplayArea = () => {
    return ( 
        <div className="StudentFindTutorBodyProfileCardDisplay">
            <div className="StudentFindTutorBodyProfileCardDisplay1">   
                <StudentFindTutorBodyProfileCard />
            </div>
            <div className="StudentFindTutorBodyProfileCardDisplay2">   
                <StudentFindTutorBodyProfileCard />
            </div>
            <div className="StudentFindTutorBodyProfileCardDisplay3">
                <StudentFindTutorBodyProfileCard />
            </div>
        </div>
    );
}
 
export default StudentFindTutorBodyProfileCardDisplayArea;
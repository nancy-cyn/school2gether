import "./TeacherTutoringProfileSubjectExpertiseBlock.css";
import TeacherTutoringProfileSubjectExpertiseBlockItem from "./TeacherTutoringProfileSubjectExpertiseBlockItem";

const TeacherTutoringProfileSubjectExpertiseBlock = () => {
    const handleAddSubjectClick = (e) => {
    }
    return ( 
        <div className="TeacherTutoringProfileSubjectExpertiseBlock">
            <h1>Subject Expertise</h1>
            <button onClick={handleAddSubjectClick} id="TeacherTutoringProfileSubjectExpertiseBlockAddSubjectButton">Add Subject</button>
            <div >
                <form action="" className="TeacherTutoringProfileSubjectExpertiseBlockAddSubjectForm">
                    <TeacherTutoringProfileSubjectExpertiseBlockItem />
                    <TeacherTutoringProfileSubjectExpertiseBlockItem />
                    <TeacherTutoringProfileSubjectExpertiseBlockItem />
                </form>
            </div>
        </div>
    );
}
 
export default TeacherTutoringProfileSubjectExpertiseBlock;
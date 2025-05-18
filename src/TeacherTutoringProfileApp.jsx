import './TeacherTutoringProfileApp.css';
import TeacherTutoringProfileTitleCard from "./teacherTutoringProfileComponents/TeacherTutoringProfileTitleCard";
import TeacherTutoringProfileNameAndTitleBar from "./teacherTutoringProfileComponents/TeacherTutoringProfileNameAndTitleBar";
import TeacherTutoringProfileTeachingPhilosophyBar from './teacherTutoringProfileComponents/TeacherTutoringProfileTeachingPhilosophyBar';
import TeacherTutoringProfileSubjectExpertiseBlock from './teacherTutoringProfileComponents/TeacherTutoringProfileSubjectExpertiseBlock';
import TeacherTutoringProfileEducationAndCertificationsBlock from './teacherTutoringProfileComponents/TeacherTutoringProfileEducationAndCertificationsBlock'; 
const TeacherTutoringProfileApp = () => {
    return ( 
        <div className="TeacherTutoringProfileApp">
            <TeacherTutoringProfileTitleCard />
            <div className="TeacherTutoringProfileBody">
                <TeacherTutoringProfileNameAndTitleBar />
                <TeacherTutoringProfileTeachingPhilosophyBar />
                <TeacherTutoringProfileSubjectExpertiseBlock />
                <TeacherTutoringProfileEducationAndCertificationsBlock />
                <div className="TeacherTutoringProfileAppButtonBar">
                    <button id="TeacherTutoringProfileAppSaveButton">Save</button>
                    <button id="TeacherTutoringProfileAppCancelButton">Cancel</button>
                </div>
            </div>
                
            {/* Add more components or features as needed */}
        </div>
    );
}
 
export default TeacherTutoringProfileApp;
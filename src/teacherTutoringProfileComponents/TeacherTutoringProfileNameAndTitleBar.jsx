import './TeacherTutoringProfileNameAndTitleBar.css'
import TeacherProfilePortrait from './TeacherProfilePortrait.png';
const TeacherTutoringProfileNameAndTitleBar = () => {
    return ( 
        <div className="TeacherTutoringProfileNameAndTitleBar">
            <img src={TeacherProfilePortrait} alt="Your Profile" />
            <form action="" className ="TeacherTutorProfileNameAndTitleForm">
                <label htmlFor="TeacherTutorProfileNameAndTitleFullNameTextfield">Full Name</label>
                <input type="text" id="TeacherTutorProfileNameAndTitleFullNameTextfield"/>
                <label htmlFor="TeacherTutorProfileNameAndTitleTitleTextfield">Title</label>
                <input type="text" id="TeacherTutorProfileNameAndTitleTitleTextfield"/>
            </form>
        </div>
     );
}
 
export default TeacherTutoringProfileNameAndTitleBar;
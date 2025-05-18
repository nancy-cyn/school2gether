import "./TeacherTutoringProfileEducationAndCertificationsBlock.css";
import TeacherTutoringProfileEducationAndCertificationsBlockItem from "./TeacherTutoringProfileEducationAndCertificationsBlockItem";

const TeacherTutoringProfileEducationAndCertificationsBlock = () => {
    const handleAddCertificationClick = (e) => {
    }
    return ( 
        <div className="TeacherTutoringProfileEducationAndCertificationsBlock">
            <h1>Education and Certifications</h1>
            <button onClick={handleAddCertificationClick} id="TeacherTutoringProfileEducationAndCertificationsBlockAddCertificationtButton">Add Certification</button>
            <div >
                <form action="" className="TeacherTutoringProfileEducationAndCertificationsBlockAddCertificationForm">
                    <TeacherTutoringProfileEducationAndCertificationsBlockItem />
                    <TeacherTutoringProfileEducationAndCertificationsBlockItem />
                    <TeacherTutoringProfileEducationAndCertificationsBlockItem />
                </form>
            </div>
        </div>
    );
}
 
export default TeacherTutoringProfileEducationAndCertificationsBlock;
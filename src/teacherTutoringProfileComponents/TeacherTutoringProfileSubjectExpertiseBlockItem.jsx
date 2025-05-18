import { useState } from 'react';
import './TeacherTutoringProfileSubjectExpertiseBlockItem.css';
const TeacherTutoringProfileSubjectExpertiseBlockItem = () => {
    
    const[subjectName, setName] =  useState('Subject Name');
    const[expertise, setExpertise] =  useState('Level of expertise');
    const[grades, setGrades] =  useState('Grades');
    const[teachingExperience, seTeachingExperience] =  useState('Years spent teaching');
    return ( 
        <div className="TeacherTutoringProfileSubjectExpertiseBlockItem">
            <h2>{subjectName}</h2>
            <p>Level of Expertise: {expertise}</p>
            <p>Grades to teach: {grades}</p>
            <p>Teaching Experience: {teachingExperience} years</p>
        </div>
    );
}
 
export default TeacherTutoringProfileSubjectExpertiseBlockItem;
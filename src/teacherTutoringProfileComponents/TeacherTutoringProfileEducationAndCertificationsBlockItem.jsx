import { useState } from 'react';
import './TeacherTutoringProfileEducationAndCertificationsBlockItem.css';
const TeacherTutoringProfileEducationAndCertificationsBlockItem = () => {
    
    const[certificationName, setName] =  useState('Enter certification Name');
    const[institution, setInstitution] =  useState('Insitution Name');
    const[yearOfIssuance, setyearOfIssuance] =  useState('Year of issuance');
    const[certificationFocus, setcertificationFocus] =  useState('Certification Focus');
    return ( 
        <div className="TeacherTutoringProfileEducationAndCertificationsBlockItem">
            <h2>{certificationName}</h2>
            <p>Insitution: {institution}</p>
            <p>Year of Issuance: {yearOfIssuance}</p>
            <p>Certification Focus: {certificationFocus}</p>
        </div>
    );
}
 
export default TeacherTutoringProfileEducationAndCertificationsBlockItem;
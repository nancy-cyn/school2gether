import React from 'react';
import './SignUp.css';
import logo from '../components/logo.png';
import { GiTeacher } from "react-icons/gi";
import { RiParentFill } from "react-icons/ri";
import { FaUserGraduate } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';

function SignUpPage() {
  const navigate = useNavigate();

  const handleContinueAsTeacher = () => {
    navigate('/teacher-dashboard');
  };

  const handleContinueAsParent = () => {
    navigate('/parent-signup');
  };

  const handleContinueAsStudent = () => {
    navigate('/student-signup');
  };

  return (
    <div>
      <nav className='sign-up-nav'>
        <img src={logo} alt="logo" className='logo' />
      </nav>
      <div className='welcome-text'>
        <h1>Welcome to School2gether</h1>
        <p>Please select your role to continue</p>
      </div>
      <div className='user-type-cards'>
        <div className='user-teacher'>
          <div className='icon-container'> 
            <GiTeacher />
          </div>
          <h2>I'm a Teacher</h2>
          <p>Accessing teaching resources and opportunities to make an extra income.</p>
          <button onClick={handleContinueAsTeacher}>Continue as Teacher</button>
        </div>
        <div className='user-parent'>
          <div className='icon-container'>
            <RiParentFill />
          </div>
          <h2>I'm a Parent</h2>
          <p>Access quality educators and monitor your child's progress on a safe platform.</p>
          <button onClick={handleContinueAsParent}>Continue as Parent</button>
        </div>
        <div className='user-student'>
          <div className='icon-container'> 
            <FaUserGraduate />
          </div>
          <h2>I'm a Student</h2>
          <p>Get access to quality tutoring and improve your marks on an easy-to-use platform.</p>
          <button onClick={handleContinueAsStudent}>Continue as Student</button>
        </div>
      </div>
    </div>
  );
}

export default SignUpPage;
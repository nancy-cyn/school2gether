import React from 'react';
import './student.css'; // Import the CSS file

function Student() {
  return (
    <>
      <div className="student-container">
        {/* Desktop Layout */}
        <div className="student-desktop-layout">
          <div className="student-desktop-background">
            <div className="student-second-ellipse"></div>
          </div>

          {/* Parent Section */}
          <div className="student-light-pink-rectangle">
            <div className="student-light-pink-box"></div>
            <div className="student-parent-button-container">
              <button className="student-parent-button">
                <span className="student-parent-button-text">Teacher</span>
              </button>
            </div>
          </div>
          <img src="/images/parent.png" alt="Teacher" className="student-parent-image" />

          {/* Tutor Section */}
          <div className="student-pink-rectangle">
            <div className="student-pink-box"></div>
            <div className="student-tutor-button-container">
              <button className="student-tutor-button">
                <span className="student-tutor-button-text">Tutor</span>
              </button>
            </div>
          </div>
          <img src="/images/teacher.png" alt="Parent" className="student-tutor-image" />

          {/* Student Section */}
          <div className="student-orange-rectangle"></div>
          <div className="student-student-button-container">
            <button className="student-student-button">
              <span className="student-student-button-text">Student</span>
            </button>
          </div>
          <img src="/images/student.png" alt="Student" className="student-student-image" />

          {/* Navbar */}
          <div className="student-navbar">
            <img src="/images/logo.png" alt="Logo" className="student-logo" />
          </div>

          {/* First Ellipse */}
          <div className="student-first-ellipse"></div>

          {/* Student Hero Image */}
          <img src="/images/student.png" alt="Student" className="student-hero-image" />

          {/* Content Box */}
          <div className="student-content-box">
            <h1 className="student-content-title">I am a Student</h1>
            <p className="student-content-description">
              Learn your way with expert tutors, study tools, and fun challenges designed just for you. 
              Set goals, track progress, and grow your skills at your own pace.
            </p>
            <button className="student-cta-button">
              <span className="student-cta-button-text">Continue as a Student</span>
            </button>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="student-mobile-layout">
          <div className="student-mobile-navbar">
            <img src="/images/logo.png" alt="Logo" className="student-mobile-logo" />
          </div>

          <div className="student-welcome-text">
            Welcome to <span className="student-welcome-text-accent">school2gether</span>
          </div>

          <div className="student-vertical-boxes-container">
            {/* Parent Box (Mobile) */}
            <div className="student-parent-box-mobile">
              <img src="/images/parent.png" alt="Parent" className="student-parent-image-mobile" />
              <button className="student-parent-button-mobile">Parent</button>
            </div>

            {/* Tutor Box (Mobile) */}
            <div className="student-tutor-box-mobile">
              <img src="/images/teacher.png" alt="Tutor" className="student-tutor-image-mobile" />
              <button className="student-tutor-button-mobile">Tutor</button>
            </div>

            {/* Student Box (Mobile) */}
            <div className="student-student-box-mobile">
              <img src="/images/student.png" alt="Student" className="student-student-image-mobile" />
              <button className="student-student-button-mobile">Student</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Student;
import React from 'react';
import './teacher.css'; // Import the CSS file

function Teacher() {
  return (
    <>
      <div className="teacher-container">
        {/* Desktop Layout */}
        <div className="teacher-desktop-layout">
          <div className="teacher-desktop-background">
            <div className="teacher-second-ellipse"></div>
          </div>

          {/* Parent Section */}
          <div className="teacher-light-pink-rectangle">
            <div className="teacher-light-pink-box"></div>
            <div className="teacher-parent-button-container">
              <button className="teacher-parent-button">
                <span className="teacher-parent-button-text">Teacher</span>
              </button>
            </div>
          </div>
          <img src="/images/parent.png" alt="Teacher" className="teacher-parent-image" />

          {/* Tutor Section */}
          <div className="teacher-pink-rectangle">
            <div className="teacher-pink-box"></div>
            <div className="teacher-tutor-button-container">
              <button className="teacher-tutor-button">
                <span className="teacher-tutor-button-text">Tutor</span>
              </button>
            </div>
          </div>
          <img src="/images/teacher.png" alt="Parent" className="teacher-tutor-image" />

          {/* Student Section */}
          <div className="teacher-orange-rectangle"></div>
          <div className="teacher-student-button-container">
            <button className="teacher-student-button">
              <span className="teacher-student-button-text">Student</span>
            </button>
          </div>
          <img src="/images/student.png" alt="Student" className="teacher-student-image" />

          {/* Navbar */}
          <div className="teacher-navbar">
            <img src="/images/logo.png" alt="Logo" className="teacher-logo" />
          </div>

          {/* First Ellipse */}
          <div className="teacher-first-ellipse"></div>

          {/* Teacher Image */}
          <img src="/images/teacher.png" alt="Teacher" className="teacher-hero-image" />

          {/* Content Box */}
          <div className="teacher-content-box">
            <h1 className="teacher-content-title">I am a Teacher</h1>
            <p className="teacher-content-description">
              Share your expertise and connect with learners who need your help. 
              Manage your schedule, track earnings, and build meaningful learning experiences with ease.
            </p>
            <button className="teacher-cta-button">
              <span className="teacher-cta-button-text">Continue as a Tutor</span>
            </button>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="teacher-mobile-layout">
          <div className="teacher-mobile-navbar">
            <img src="/images/logo.png" alt="Logo" className="teacher-mobile-logo" />
          </div>

          <div className="teacher-welcome-text">
            Welcome to <span className="teacher-welcome-text-accent">school2gether</span>
          </div>

          <div className="teacher-vertical-boxes-container">
            {/* Parent Box (Mobile) */}
            <div className="teacher-parent-box-mobile">
              <img src="/images/parent.png" alt="Parent" className="teacher-parent-image-mobile" />
              <button className="teacher-parent-button-mobile">Parent</button>
            </div>

            {/* Tutor Box (Mobile) */}
            <div className="teacher-tutor-box-mobile">
              <img src="/images/teacher.png" alt="Tutor" className="teacher-tutor-image-mobile" />
              <button className="teacher-tutor-button-mobile">Tutor</button>
            </div>

            {/* Student Box (Mobile) */}
            <div className="teacher-student-box-mobile">
              <img src="/images/student.png" alt="Student" className="teacher-student-image-mobile" />
              <button className="teacher-student-button-mobile">Student</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Teacher;
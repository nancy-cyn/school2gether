import React from 'react';
import './parent.css';

function Parent() {
  return (
    <>
      <div className="parent-container">
        {/* Desktop Layout */}
        <div className="parent-desktop-layout">
          <div className="parent-desktop-background">
            <div className="parent-second-ellipse"></div>
          </div>

          {/* Teacher Section */}
          <div className="parent-light-pink-rectangle">
            <div className="parent-light-pink-box"></div>
            <div className="parent-teacher-button-container">
              <button className="parent-teacher-button">
                <span className="parent-teacher-button-text">Teacher</span>
              </button>
            </div>
          </div>
          <img src="/images/parent.png" alt="Teacher" className="parent-teacher-image" />

          {/* Tutor Section */}
          <div className="parent-pink-rectangle">
            <div className="parent-pink-box"></div>
            <div className="parent-tutor-button-container">
              <button className="parent-tutor-button">
                <span className="parent-tutor-button-text">Tutor</span>
              </button>
            </div>
          </div>
          <img src="/images/teacher.png" alt="Tutor" className="parent-tutor-image" />

          {/* Student Section */}
          <div className="parent-orange-rectangle"></div>
          <div className="parent-student-button-container">
            <button className="parent-student-button">
              <span className="parent-student-button-text">Student</span>
            </button>
          </div>
          <img src="/images/student.png" alt="Student" className="parent-student-image" />

          {/* Navbar */}
          <div className="parent-navbar">
            <img src="/images/logo.png" alt="Logo" className="parent-logo" />
          </div>

          {/* First Ellipse */}
          <div className="parent-first-ellipse"></div>

          {/* Parent Hero Image */}
          <img src="/images/parent.png" alt="Parent" className="parent-hero-image" />

          {/* Content Box */}
          <div className="parent-content-box">
            <h1 className="parent-content-title">I am a Parent</h1>
            <p className="parent-content-description">
              Get access to trusted tutors and tailored learning support for your child. 
              Easily monitor their progress, manage bookings, and stay involved every step of the way.
            </p>
            <button className="parent-cta-button">
              <span className="parent-cta-button-text">Continue as a Parent</span>
            </button>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="parent-mobile-layout">
          <div className="parent-mobile-navbar">
            <img src="/images/logo.png" alt="Logo" className="parent-mobile-logo" />
          </div>

          <div className="parent-welcome-text">
            Welcome to <span className="parent-welcome-text-accent">school2gether</span>
          </div>

          <div className="parent-vertical-boxes-container">
            {/* Parent Box (Mobile) */}
            <div className="parent-parent-box-mobile">
              <img src="/images/parent.png" alt="Parent" className="parent-parent-image-mobile" />
              <button className="parent-parent-button-mobile">Parent</button>
            </div>

            {/* Tutor Box (Mobile) */}
            <div className="parent-tutor-box-mobile">
              <img src="/images/teacher.png" alt="Tutor" className="parent-tutor-image-mobile" />
              <button className="parent-tutor-button-mobile">Tutor</button>
            </div>

            {/* Student Box (Mobile) */}
            <div className="parent-student-box-mobile">
              <img src="/images/student.png" alt="Student" className="parent-student-image-mobile" />
              <button className="parent-student-button-mobile">Student</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Parent;
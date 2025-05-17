import React from 'react';
import './App.css';
import picture1 from './IMG_5118.jpg';
import picture2 from './download.jpeg';
import picture3 from './IMG_CHRIS.jpg';
import picture4 from './img_khwezi.jpg'

function App() {
  return (
    <div className="school-app">
      {/* Header */}
      <header className="app-header">
        <h1>HEADER HERE</h1>
      </header>

      {/* Main Content */}
      <div className="content-container">

        {/* Left Column - Profile and Resources */}

        <div className="left-column">
          {/* Profile Section */}
          <div className="profile-section">
            <div className="profile-card">
              <div className='profile-picture-container'>
                <img 
                  src={picture3} 
                  alt="User profile"
                  className="profile-picture"
                />
              </div>

              <div className="profile-info">
                <h2>Christopher Skinner</h2>
                <p className="position">High School Science Teacher</p>
                <p className="location">Johannesburg</p>

                <div className="profile-stats">
                  <div className="stat">
                    <span className="stat-number">15</span>
                    <span className="stat-label">Resources Shared</span>
                  </div>
                  <div className="stat">
                    <span className="stat-number">15</span>
                    <span className="stat-label">Network</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Teaching Subjects */}
            <div className="subjects-card">
              <h3>Teaching Subjects</h3>
              <div className="subject-list">
                <span className="subject-tag">English</span>
                <span className="subject-tag">Mathematics</span>
                <span className="subject-tag">Life Skills</span>
              </div>
            </div>
          </div>

          {/* Search Bar */}
          <div className="search-container">
            <div className="search-header">
              <img 
                src={picture3} 
                alt="User profile"
                className="profile-pic"
              />
              <input 
                type="text"
                placeholder='Search...'
                className='search-input' 
              />     
            </div>
            <div className="upload-buttons">
              <button className="upload-btn primary">Upload Resource</button>
              <button className="upload-btn secondary">Add Image</button>
            </div>
          </div>

          {/* Resources Feed */}
          <div className="resources-feed">
            {/* Resource 1 */}
            <div className="resource-card">
              <div className="resource-header">
                <img 
                  src={picture1} 
                  alt="User profile"
                  className="resource-profile-pic"
                />
                <div className="resource-author">
                  <h3>Nkululeko Mdhuli</h3>
                  <p>Life Sciences Teacher</p>
                </div>
              </div>

              <div className="resource-content">
                <h4>Life Sciences Lab Manual 2025</h4>
                <p>Sharing my latest lab guideline for Grade 10 learners</p>
              </div>

              <img 
                src={picture2} 
                alt="Resource preview"
                className="resource-image"
              />
              
              <div className="resource-actions">
                <button className="action-btn">Download</button>
                <button className="action-btn">Preview</button>
              </div>
            </div>

            {/* Resource 2 */}
            <div className="resource-card">
              <div className="resource-header">
                <img 
                  src={picture4} 
                  alt="User profile"
                  className="resource-profile-pic"
                />

                <div className="resource-author">
                  <h3>Shantel Chantel</h3>
                  <p>English Teacher</p>  
                </div>
              </div>

              <div className="resource-content">
                <p>Looking for interactive Othello worksheets</p>
              </div>
            </div>
          </div>
        </div>


        {/* Right Column - Sidebar */}
        <div className="right-column">

          {/* Trending Resources */}

          <div className="sidebar-card-1">

            <h3>Trending Resources</h3>
            <ol className="trending-list">
              <li>Interactive Science Labs</li>
              <li>Student Engagement Strategies</li>
              <li>Remote Learning Tips</li>
              <li>STEM Project Ideas</li>
            </ol>
          </div>

          {/* Teachers You May Know */}

          <div className="sidebar-card-2">

            <h3>Teachers You May Know</h3>
            <div className="teacher-list">
              <div className="teacher-item">
                <h4>Sandile Sir</h4>
                <p>Arts Teacher</p>
              </div>
          

              <div className="teacher-item">
                <h4>Sandile Sir</h4>
                <p>Arts Teacher</p>
              </div>
              <div className="teacher-item">
                <h4>Sandile Sir</h4>
                <p>Arts Teacher</p>
              </div>
            
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
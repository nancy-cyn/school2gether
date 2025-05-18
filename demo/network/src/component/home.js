import { useState } from 'react';
import { MessageSquare, Home, Book, User, MapPin, Upload, Image, Download, Eye, ThumbsUp, Share2, Plus } from 'lucide-react';
import './home.css';
import Chris from './IMG_CHRIS.jpg';
import Nkululeko from './IMG_5118.jpg';
import download from './download.jpeg'
import destinypicture from './img_destiny.jpg'
import ntuthokupicture from './img_ntuthuko.jpg'
import Khwezi from './img_khwezi.jpg';
import sandilePicture from './sandile.png'
import Navbar from './navbar.js';



function HomePage() {
  const [currentUser] = useState({
    name: "Christopher Skinner",
    title: "High School Science Teacher",
    location: "Johannesburg",
    avatar: Chris,
    resourcesShared: 15,
    network: 15,
    subjects: ["Life Sciences", "Life Sciences", "Life Sciences"]
  });

  const [posts] = useState([
    {
      id: 1,
      author: {
        name: "Nkululeko Mdhuli",
        title: "Life Sciences Teacher",
        avatar: Nkululeko
      },
      title: "Life Sciences Lab Manual 2025",
      description: "Sharing my latest lab guideline for Grade 10 leaners",
      image: download,
      likes: 15,
      comments: 15,
      shares: 15
    },
    {
      id: 2,
      author: {
        name: "Khwezi",
        title: "English Teacher",
        avatar: Khwezi
      },
      title: "Looking for interactive Othello worksheets",
      description: "",
      image: null,
      likes: 15,
      comments: 15,
      shares: 15
    }
  ]);

  const [trendingResources] = useState([
    "Interactive Science Labs",
    "Student Engagement Strategies",
    "Remote Learning Tips",
    "STEM Project Ideas"
  ]);

  const [suggestedTeachers] = useState([
    { name: "Sandile Mhlanga", title: "Arts Teacher", avatar: sandilePicture },
    { name: "Destiny Mabwe", title: "English Teacher", avatar: destinypicture },
    { name: "Ntuthoko Kubeka", title: "Maths Teacher", avatar: ntuthokupicture }
  ]);

  return (
    <div className="app-container">
      <Navbar/>

      {/* Main Content */}
      <div className="main-content">
        {/* Left Sidebar - Profile */}
        <div className="sidebar-left">
          <div className="profile-card">
            <div className="profile-header"></div>
            <div className="profile-content">
              <img src={currentUser.avatar} alt={currentUser.name} className="user-avatar" />
              <h2 className="user-name">{currentUser.name}</h2>
              <p className="user-title">{currentUser.title}</p>
              <div className="user-location">
                <MapPin size={16} />
                <span>{currentUser.location}</span>
              </div>
              <hr className="divider" />
              <div className="user-stats">
                <div className="stat-row">
                  <div>Resources Shared</div>
                  <div>{currentUser.resourcesShared}</div>
                </div>
                <div className="stat-row">
                  <div>Network</div>
                  <div>{currentUser.network}</div>
                </div>
              </div>
            </div>
          </div>

          <div className="subjects-card">
            <h3 className="section-title">Teaching Subjects</h3>
            <div className="subject-tags">
              {currentUser.subjects.map((subject, index) => (
                <span key={index} className="subject-tag">
                  {subject}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Middle - Main Feed */}
        <div className="main-feed">
          {/* Create Post */}
          <div className="create-post-card">
            <div className="post-input-area">
              <img src= {Chris} alt="User" className="post-avatar" />
              <div className="post-input">
                Share a resource or upload...
              </div>
            </div>
            <hr className="divider" />
            <div className="post-actions">
              <button className="action-button">
                <Book className="action-icon" size={18} />
                Upload Resource
              </button>
              <button className="action-button">
                <Image className="action-icon" size={18} />
                Add Image
              </button>
            </div>
          </div>

          {/* Posts */}
          {posts.map(post => (
            <div key={post.id} className="post-card">
              <div className="post-header">
                <img src={post.author.avatar} alt={post.author.name} className="post-author-avatar" />
                <div className="post-author-info">
                  <h3 className="post-author-name">{post.author.name}</h3>
                  <p className="post-author-title">{post.author.title}</p>
                </div>
              </div>
              <h2 className="post-title">{post.title}</h2>
              {post.description && <p className="post-description">{post.description}</p>}
              {post.image && (
                <div className="post-image-container">
                  <img src={post.image} alt={post.title} className="post-image" />
                </div>
              )}
              <div className="post-engagement">
                <div className="engagement-stat">
                  <ThumbsUp size={16} />
                  <span>{post.likes}</span>
                </div>
                <div className="engagement-stat">
                  <MessageSquare size={16} />
                  <span>{post.comments}</span>
                </div>
                <div className="engagement-stat">
                  <Share2 size={16} />
                  <span>{post.shares}</span>
                </div>
              </div>
              {post.id === 1 && (
                <div className="post-buttons">
                  <button className="download-button">
                    <Download size={16} className="button-icon" />
                    Download
                  </button>
                  <button className="preview-button">
                    <Eye size={16} className="button-icon" />
                    Preview
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Right Sidebar */}
        <div className="sidebar-right">
          {/* Trending Resources */}
          <div className="trending-card">
            <h3 className="section-title">Trending Resources</h3>
            <ol className="trending-list">
              {trendingResources.map((resource, index) => (
                <li key={index} className="trending-item">
                  <a href="#" className="trending-link">
                    {resource}
                  </a>
                </li>
              ))}
            </ol>
          </div>

          {/* Teachers You May Know */}
          <div className="suggested-teachers-card">
            <h3 className="section-title">Teachers You May Know</h3>
            <div className="teacher-suggestions">
              {suggestedTeachers.map((teacher, index) => (
                <div key={index} className="teacher-suggestion">
                  <div className="teacher-info">
                    <img src={teacher.avatar} alt={teacher.name} className="teacher-avatar" />
                    <div className="teacher-details">
                      <div className="teacher-name">{teacher.name}</div>
                      <div className="teacher-title">{teacher.title}</div>
                    </div>
                  </div>
                  <button className="connect-button">
                    <Plus size={20} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
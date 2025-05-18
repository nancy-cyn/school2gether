import React, { useState } from 'react';
import './UploadLessonPlans.css';

const UploadLessonPlans = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [storage] = useState({ used: 75.6, total: 100 });
  const [recentUploads] = useState([
    { name: "Mathematics Lesson Week 1", type: "PDF", size: "2.4 MB", date: "Jan 15, 2025" },
    { name: "Science Experiment Guide", type: "DOCX", size: "1.8 MB", date: "Jan 10, 2025" }
  ]);

  const handleDragEnter = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => setIsDragging(false);

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const files = e.dataTransfer.files;
    console.log('Files dropped:', files);
    // Handle file upload logic here
  };

  return (
    <div className="upload-container">

      <header className="upload-header">
        <h1>Upload Lesson Plans</h1>
        <p className="subtitle">Store and organize your teaching materials securely</p>
      </header>

      <div className="divider"></div>

      <div 
        className={`drop-zone ${isDragging ? 'dragging' : ''}`}
        onDragEnter={handleDragEnter}
        onDragOver={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <div className="drop-content">

          <svg className="upload-icon" viewBox="0 0 24 24">
            <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
          </svg>
          <p>Drag and drop your files here or <span className="browse-link">click to browse</span></p>
          <p className="formats">Supported formats: PDF, DOCX, PPTX, XLS</p>
        </div>

        <input 
          type="file" 
          id="file-upload" 
          multiple 
          accept=".pdf,.docx,.pptx,.xls" 
          style={{ display: 'none' }} 
        />

      </div>

      <div className="guidelines">
        <h3>Upload Guidelines</h3>
        <ul>
          <li>Maximum file size: 100MB</li>
          <li>Use clear file names</li>
          <li>Add tags for easy search</li>
          <li>You have 2 attempts for this quiz</li>
        </ul>
      </div>

      <div className="divider"></div>

      <div className="storage-section">
        <h3>Storage</h3>
        <div className="storage-bar">
          <div 
            className="storage-used" 
            style={{ width: `${(storage.used / storage.total) * 100}%` }}
          ></div>
        </div>
        <p>{storage.used} GB used of {storage.total} GB</p>
      </div>

      <div className="divider"></div>

      <div className="recent-uploads">
        <h3>Recent Uploads</h3>
        {recentUploads.map((file, index) => (
          <div key={index} className="file-item">
            <div className="file-icon">{file.type}</div>
            <div className="file-details">
              <p className="file-name">{file.name}</p>
              <p className="file-meta">{file.size} • {file.date}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="divider"></div>

      
    </div>
  );
};

export default UploadLessonPlans;
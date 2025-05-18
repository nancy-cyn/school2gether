import React, { useState } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMessage, faPenToSquare, faClock, faCheck, faCalendarDays, faBars } from '@fortawesome/free-solid-svg-icons';
import './StudentPerformance.css';
import dp from '../components/student.png';
import pic2 from '../images/boy1.jpg';
import pic3 from '../images/boy2.jpg';
import pic4 from '../images/girl1.jpg';
import pic5 from '../images/girl2.jpg';
import { Bar, Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import Navbar from '../components/TeacherLMSNavbar.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, PointElement, LineElement, Title, Tooltip, Legend);

// Mock student data for the sidebar with image URLs
const mockStudents = [
  { id: '1', name: 'Nkululeko Mdhluli', grade: '12', lastSession: 'Feb 28', enrolled: 'Jan 2024', image: dp },
  { id: '2', name: 'Christopher Skinner', grade: '11', lastSession: 'Mar 01', image: pic2 },
  { id: '3', name: 'Stephen Skinner', grade: '12', lastSession: 'Feb 25', image: pic3 },
  { id: '4', name: 'Sarah Williams', grade: '10', lastSession: 'Mar 05', image: pic4 },
  { id: '5', name: 'Jessica Brown', grade: '11', lastSession: 'Feb 22', image: pic5 },
];

// Mock subject performance data
const mockSubjectPerformanceData = {
  labels: ['Math', 'English', 'Life Sciences', 'Physical Sciences', 'LO'],
  datasets: [
    {
      label: 'Days of the week',
      data: [85, 60, 55, 95, 70],
      backgroundColor: 'rgba(255, 255, 255, 0.7)', // Light color for bars
      borderColor: 'rgba(255, 255, 255, 1)',
      borderWidth: 1,
    },
  ],
};

const mockSubjectPerformanceOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
    },
    tooltip: {
      enabled: true,
    },
  },
  scales: {
    y: {
      beginAtZero: true,
      max: 100,
      ticks: {
        color: '#fff',
      },
      grid: {
        display: false,
      },
    },
    x: {
      ticks: {
        color: '#fff',
      },
      grid: {
        display: false,
      },
    },
  },
};

// Mock attendance rate data
const mockAttendanceRateData = {
  labels: ['Sept', 'Oct', 'Nov', 'Dec'],
  datasets: [
    {
      label: 'Attendance Rate',
      data: [98, 95, 92, 96],
      fill: false,
      backgroundColor: 'rgba(255, 255, 255, 0.6)',
      borderColor: '#fff',
      tension: 0.3,
      pointRadius: 5,
      pointBackgroundColor: '#fff',
    },
  ],
};

const mockAttendanceRateOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
    },
    tooltip: {
      enabled: true,
    },
  },
  scales: {
    y: {
      beginAtZero: true,
      max: 100,
      ticks: {
        color: '#fff',
      },
      grid: {
        display: true,
        color: 'rgba(255, 255, 255, 0.1)',
      },
    },
    x: {
      ticks: {
        color: '#fff',
      },
      grid: {
        display: false,
      },
    },
  },
};

function StudentPerformance() {
  const { studentId: initialStudentId } = useParams();
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [selectedStudentId, setSelectedStudentId] = useState(initialStudentId || '1'); // Default to the first student
  const selectedStudent = mockStudents.find(student => student.id === selectedStudentId);

  const handleStudentSelect = (id) => {
    setSelectedStudentId(id);
    navigate(`/student-performance/${id}`);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const dashboardContainerClass = `dashboard-container ${!isSidebarOpen ? 'sidebar-closed-layout' : ''}`;

  if (!selectedStudent) {
    return <div>Error: Could not find student.</div>;
  }

  return (
    <div>
      <Navbar />
      <div className={dashboardContainerClass}>
        {/* Collapsible Sidebar */}
        <aside className={`student_perf_sidebar ${isSidebarOpen ? 'open' : 'closed'}`}>
          <button className="sidebar-toggle-button" onClick={toggleSidebar}>
            <FontAwesomeIcon icon={faBars} />
          </button>
          <input type="text" placeholder="Search students..." className="search-input" />
          <div className="student-list">
            {mockStudents.map(student => (
              <div
                key={student.id}
                className={`student-list-item ${selectedStudentId === student.id ? 'selected' : ''}`}
                onClick={() => handleStudentSelect(student.id)}
              >
                <img src={student.image} alt={student.name} className="student-avatar" />
                <div className="student-info">
                  <p className="student-name">{student.name}</p>
                  <p className="student-details">Grade {student.grade}, Last Session: {student.lastSession}</p>
                </div>
              </div>
            ))}
          </div>
        </aside>

        {/* Main Content Area */}
        <main className={`student_perf_page`}>
          <div className="top-section">
            <div className="top-left">
              <div className="student-info-card">
                <img src={selectedStudent.image} alt={selectedStudent.name} className="profile-img" />
                <div className="student-details">
                  <p className="student-name">{selectedStudent.name}</p>
                  <p className="student-details">Grade {selectedStudent.grade}</p>
                  <p className="student-details">Enrolled {selectedStudent.enrolled}</p>
                </div>
              </div>
              <div className="subject-performance-card">
                <h2 style={{ color: '#fff' }}>Subject Performance</h2>
                <div className="performance-graph">
                  <Bar data={mockSubjectPerformanceData} options={mockSubjectPerformanceOptions} />
                </div>
              </div>
            </div>
            <div className="top-right">
              <div className="top-top-right">
                <div className="task-action-cards">
                  <div className="last-active-card">
                    <p><FontAwesomeIcon icon={faClock} /> Last Active</p>
                    <p className="last-active-time">Today</p>
                  </div>
                  <div className="finished-tasks-card">
                    <p className="task-label">Finished Tasks</p>
                    <p className="task-count">23/30</p>
                  </div>
                </div>
                <div className="quick-actions-card">
                  <p className="card-header">Quick Action</p>
                  <div className="action-buttons">
                    <button><FontAwesomeIcon icon={faCalendarDays} /> Schedule Session</button>
                    <button><FontAwesomeIcon icon={faMessage} /> Send Message</button>
                    <button>Add Note</button>
                  </div>
                </div>
              </div>
              <div className="attendance-notes-cards">
                <div className="attendance-card">
                  <h2 style={{ color: '#fff' }}>Attendance Rate</h2>
                  <div style={{ height: '150px' }}>
                    <Line data={mockAttendanceRateData} options={mockAttendanceRateOptions} />
                  </div>
                </div>
                <div className="quick-notes-card">
                  <p className="card-header">Quick Notes</p>
                  <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                    <li>Needs help with geometry</li>
                    <li>Very engaged in problem solving</li>
                    <li>Very engaged in problem solving</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="bottom-section">
            <div className="recent-activities-card">
              <p className="card-header">Recent Activities</p>
              <div className="activity-item">
                <FontAwesomeIcon icon={faCheck} style={{ color: '#00c853', marginRight: '8px' }} />
                <span>Math Assignment Submitted</span>
                <p className="activity-details">Feb 23, 2025</p>
                <p className="activity-details">Completed Algebra homework with 88% score</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default StudentPerformance;
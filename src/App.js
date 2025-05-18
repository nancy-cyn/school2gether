import React from 'react';
import Navbar from './components/TeacherLMSNavbar.js';
import RequestPage from './TeacherLMSPages/RequestPage.js';
import MessagePage from './TeacherLMSPages/Messages.js';
import HomePage from './TeacherLMSPages/Homepage.js';
import TeacherDashboard from './TeacherLMSPages/TeacherDashboard.js';
import CalendarApp from './TeacherLMSPages/TeacherSchedule.js';
import CreateQuiz from './TeacherLMSPages/TeacherQuiz.js';
import MyStudents from './TeacherLMSPages/MyStudents.js';
import CallPageComponent from './TeacherLMSPages/CallPage.js';
import StudentPerformance from './TeacherLMSPages/StudentPerformance.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router> 
      <div className="App">
        <div className="content-area">
          <Routes> 
            <Route path="/" element={<HomePage />} /> 
            <Route path="/requests" element={<RequestPage />} />
            <Route path="/messages" element={<MessagePage />} />
            <Route path="/students" element={<MyStudents/>}/> 
            <Route path="/dashboard" element={<TeacherDashboard/>}/>
            <Route path="/schedule" element={<CalendarApp/>}/>
            <Route path="/quiz" element={<CreateQuiz/>}/>
            <Route path="/callpage" element={<CallPageComponent />} />
            <Route path="/" element={<MyStudents />} /> {/* root path renders MyStudents */}
            <Route path="/student-performance/:studentId" element={<StudentPerformance />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
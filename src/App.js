import React from 'react';
import Navbar from './components/Navbar';
import RequestPage from './pages/RequestPage.js';
import MessagePage from './pages/Messages.js';
import HomePage from './pages/Homepage.js';
import TeacherDashboard from './pages/TeacherDashboard.js';
import CalendarApp from './pages/TeacherSchedule.js';
import CreateQuiz from './pages/TeacherQuiz.js';
import MyStudents from './pages/MyStudents.js';
import CallPageComponent from './pages/CallPage.js';
import StudentPerformance from './pages/StudentPerformance.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router> 
      <div className="App">
        <Navbar />
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
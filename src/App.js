import CallPage from './components/CallPage.js';
import MyStudents from './components/MyTutors.js';
import StudentDashboard from './components/dashboard.js';
import Quizzes from './components/quizes';
import QuizInstructions from './components/instructions';
import ActualQuiz from './components/actual_quiz';
import Timetable from './components/timetable';
import Messages from './components/messages.js';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/quizes" element={<Quizzes />} />
        <Route path="/instructions" element={<QuizInstructions />} />
        <Route path="/actual_quiz" element={<ActualQuiz />} />
        <Route path="/timetable" element={<Timetable />} />
      <Route path="/callpage" element={<CallPage />} />
      <Route path="/tutors" element={<MyStudents/>}/>
      <Route path="/dashboard" element={<StudentDashboard/>}/> 
       <Route path="/messages" element={<Messages/>}/> 

      </Routes>
    </Router>
  );
}

export default App;

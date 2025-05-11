import Quizzes from './components/quizes';
import QuizInstructions from './components/instructions';
import ActualQuiz from './components/actual_quiz';
import Timetable from './components/timetable'; // assuming this is your new component
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/quizes" element={<Quizzes />} />
        <Route path="/instructions" element={<QuizInstructions />} />
        <Route path="/actual_quiz" element={<ActualQuiz />} />
        <Route path="/timetable" element={<Timetable />} />
      </Routes>
    </Router>
  );
}

export default App;

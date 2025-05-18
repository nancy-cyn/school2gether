import Curriculum from './component/CurriculumPage.js';
import Grade from './component/CurriculumGrades.js';
import Home from './component/home.js';
import Subjects from './component/Subjects.js';
import Maths from './component/MathResources.js';
import Messages from './component/messages.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/grade" element={<Grade />} />
        <Route path="/curriculum" element={<Curriculum />} /> 
        <Route path="/subject" element={<Subjects/>} /> 
        <Route path="/maths" element={<Maths/>} /> 
        <Route path="/messages" element={<Messages/>} /> 

      </Routes>
    </Router>
  );
}

export default App;

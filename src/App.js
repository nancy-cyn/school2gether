import Navbar from './Components/Navbar';
// import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Performance from './Pages/Performance/Performance';
import StudentFindApp from './Pages/FindTutors/StudentFindTutorApp';
import MessagesPage from './Pages/Messages/Messages';
import MyTutors from './Pages/CurrentTutors/MyTutors';

function App() {
  return (
    <Router>
       
        <Navbar/>
        <Routes>
            <Route path='/' element={<StudentFindApp/>}/>
            <Route path='/performance' element={<Performance/>}/>
            <Route path='/messages' element={<MessagesPage/>}/>
            <Route path='/tutors' element={<MyTutors/>}/>
        </Routes>


    </Router>
    
  );
}

export default App;

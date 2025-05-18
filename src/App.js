import './App.css';
import './sessions.css';
import './Tasks.css';
import './Study.css';
import './Assignment.css';
import './Progress.css';
import './Resources.css';
import './Recent.css'

import Session from './sessions';
import Tasks from './Tasks';
import Study from './Study';
import Assignment from './Assignment';
import Progress from './Progress';
import Resources from './Resources';
import Recent from './Recent';
import Navbar from './Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
        <div>
        <Navbar/>
        <Routes>
          {/* <Route path='' element={}/> */}
        </Routes>
      <div className="App">
        <Session />
        <Tasks />
        <Study /> 
        <Assignment /> 
        <Progress /> 
        <Resources /> 
        <Recent /> 
      </div>
    </div>
    </Router>
    
  );
}

export default App;

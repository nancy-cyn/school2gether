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

function App() {
  return (
    <div className="App">
      <Session />
      <Tasks />
      <Study /> 
      <Assignment /> 
      <Progress /> 
      <Resources /> 
      <Recent /> 
    </div>
  );
}

export default App;

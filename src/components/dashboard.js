import Navbar  from './navbar';
import Session from './Sessions';
import Progress from './Progress';
import Tasks from './Tasks';
import Week from './Week';
import Grade from './Grade';
import Study from './Study';
import Assignment from './Assignment';
import Resource from './Resource';
import Recent from './Recent';
function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="Session"></div>
      <Session/>
      <div className="Progress"></div>
      <Progress/>
      <div className="Tasks"></div>
      <Tasks/>
      <div className="Week"></div>
      <Week/>
      <div className="Grade"></div>
      <Grade/>
      <div className="Study"></div>
      <Study/>
      <div className="Assignment"></div>
      <Assignment/>
      <div className="Resource"></div>
      <Resource/>
      <div className="Recent"></div>
      <Recent/>
    </div>
    
    
  );
}

export default App;
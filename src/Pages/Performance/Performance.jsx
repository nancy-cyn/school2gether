import './Perfomance.css'

import Session from './sessions';
import Tasks from './Tasks';
import Study from './Study';
import Assignment from './Assignment';
import Progress from './Progress';
import Resources from './Resources';
import Recent from './Recent';
const Performance = () => {
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
 
export default Performance;
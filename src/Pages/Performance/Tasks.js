import './Tasks.css';

function Task() {
  return (
    <div className="task-row">
      <div className="task-box"><p id='PendingTasks'>Pending Tasks</p>
      <p id='PendingTasks'>4</p></div>
      <div className="task-box"><p id='PendingTasks'>Weekly Progress</p>
      <p id='PendingTasks'>85%</p></div>
      <div className="task-box"><p id='PendingTasks'>Overall Grade</p>
      <p id='PendingTasks'>75</p></div>
    </div>
  );
}

export default Task;

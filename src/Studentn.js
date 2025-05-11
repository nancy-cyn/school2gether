import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarDays } from '@fortawesome/free-regular-svg-icons'
import { faUserGroup } from '@fortawesome/free-solid-svg-icons/faUserGroup'
import { faBell } from '@fortawesome/free-regular-svg-icons'
import { faTableCells } from '@fortawesome/free-solid-svg-icons'
import { faMessage } from '@fortawesome/free-solid-svg-icons'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faClock } from '@fortawesome/free-solid-svg-icons'
import React, { useState } from "react";
import { faCheck } from '@fortawesome/free-solid-svg-icons'


function App() {
  const [isExpanded, setIsExpanded] = useState(true);
  return (
    <div className="App">
      <div className="content">
        <div className="content-header">
          <img src="images/sandile.jpg" alt="Profile" className="content-img" />
          <div className="content-text">
            <p>Ntuthuko Kubheka</p>
            <p>Grade: 12</p>
          </div>
        </div>
      </div>
      <div className="performance">
        <h1>Student Performance</h1>
        <img src="/images/barchart_ver_2.jpg" alt="Performance graph" className="performance-img" />
      </div>
      <div className="active">
        <p><FontAwesomeIcon icon={faClock} /> Last Active</p>
      </div>
      <div className="tasks">
        <p> Finished Tasks</p>
      </div>
      <div className="action">
        <div className="action-header">
          <p>Quick Action</p>
          <div className="action-buttons">
            <button>Schedule</button>
            <button><FontAwesomeIcon icon={faMessage}/> send sms</button>
            <button>Button 3</button>
          </div>
        </div>
      </div>
      <div className="notes">
        <h1>Notes</h1>
        <p><FontAwesomeIcon icon={faPenToSquare} /> needs help with statistics</p>
      </div>
      <div className="attendance">
        <h1>Attendance Rate</h1>
        <img src="/images/attendance-graph-6.11.15.png" alt="attendance graph" className="attendance-img" />
      </div>
      <div className={`sidebar ${isExpanded ? "expanded" : "collapsed"}`}>
        <button className="toggle-btn" onClick={() => setIsExpanded(!isExpanded)}>
          {isExpanded ? "<" : ">"}
        </button>
        {isExpanded && (
          <>
            <h2>My Students</h2>
            <p><FontAwesomeIcon icon={faUser}/> Destiny Mabwe</p>
            <p><FontAwesomeIcon icon={faUser}/> Ikaneng</p>
            <p><FontAwesomeIcon icon={faUser}/> Khwezi Mpumela</p>
            <p><FontAwesomeIcon icon={faUser}/> Nancy Kabobo</p>
            <p><FontAwesomeIcon icon={faUser}/> Christopher Skinner</p>
            <p><FontAwesomeIcon icon={faUser}/> Nkululeko Mdluli</p>
            <p><FontAwesomeIcon icon={faUser}/> Ntuthuko Kubheka</p>
          </>
        )}
      </div>
      <div className="navbar">
        <h2>Schools<span id="AppName">Together</span></h2>
        <ul className="navbar-menu">
          <li><h3 className="Dashboard_h3"><FontAwesomeIcon icon={faTableCells}/>Dashboard</h3></li>
          <li><h3 className="MyStudents_h3"><FontAwesomeIcon icon={faUserGroup} />My Students</h3></li>
          <li><h3 className="Requests_h3"><FontAwesomeIcon icon={faBell} />Requests</h3></li>
          <li><h3 className="Schedules_h3"><FontAwesomeIcon icon={faCalendarDays}/>Schedule</h3></li>
          <li><h3 className="Account_OwnerName">Session</h3></li>
        </ul>
      </div>

      <div className="activities">
        <p>Recent Activities</p>
        <p>Math Assignment: Submitted <FontAwesomeIcon icon={faCheck} /></p>
      </div>
    </div>
  );
}

export default App;
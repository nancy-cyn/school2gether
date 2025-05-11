import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMessage } from '@fortawesome/free-solid-svg-icons';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from "react";
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import styles from './StudentPerformance.module.css';
import profileimg from '../images/sandile.jpg';
import ba

function MyStudentsDashboard() {
  const [isExpanded, setIsExpanded] = useState(true);
  return (
    <div className={styles.App}>
      <div className={styles.content}>
        <div className={styles.contentHeader}>
          <img src={profileimg} alt="Profile" className={styles.contentImg} />
          <div className={styles.contentText}>
            <p>Ntuthuko Kubheka</p>
            <p>Grade: 12</p>
          </div>
        </div>
      </div>
      <div className={styles.performance}>
        <h1>Student Performance</h1>
        <img src="/images/barchart_ver_2.jpg" alt="Performance graph" className={styles.performanceImg} />
      </div>
      <div className={styles.active}>
        <p><FontAwesomeIcon icon={faClock} /> Last Active</p>
      </div>
      <div className={styles.tasks}>
        <p> Finished Tasks</p>
      </div>
      <div className={styles.action}>
        <div className={styles.actionHeader}>
          <p>Quick Action</p>
          <div className={styles.actionButtons}>
            <button>Schedule</button>
            <button><FontAwesomeIcon icon={faMessage} /> send sms</button>
            <button>Button 3</button>
          </div>
        </div>
      </div>
      <div className={styles.notes}>
        <h1>Notes</h1>
        <p><FontAwesomeIcon icon={faPenToSquare} /> needs help with statistics</p>
      </div>
      <div className={styles.attendance}>
        <h1>Attendance Rate</h1>
        <img src="/images/attendance-graph-6.11.15.png" alt="attendance graph" className={styles.attendanceImg} />
      </div>
      <div className={`${styles.sidebar} ${isExpanded ? styles.expanded : styles.collapsed}`}>
        <button className={styles.toggleBtn} onClick={() => setIsExpanded(!isExpanded)}>
          {isExpanded ? "<" : ">"}
        </button>
        {isExpanded && (
          <>
            <h2>My Students</h2>
            <p><FontAwesomeIcon icon={faUser} /> Destiny Mabwe</p>
            <p><FontAwesomeIcon icon={faUser} /> Ikaneng</p>
            <p><FontAwesomeIcon icon={faUser} /> Khwezi Mpumela</p>
            <p><FontAwesomeIcon icon={faUser} /> Nancy Kabobo</p>
            <p><FontAwesomeIcon icon={faUser} /> Christopher Skinner</p>
            <p><FontAwesomeIcon icon={faUser} /> Nkululeko Mdluli</p>
            <p><FontAwesomeIcon icon={faUser} /> Ntuthuko Kubheka</p>
          </>
        )}
      </div>
      <div className={styles.activities}>
        <p>Recent Activities</p>
        <p>Math Assignment: Submitted <FontAwesomeIcon icon={faCheck} /></p>
      </div>
    </div>
  );
}

export default MyStudentsDashboard;

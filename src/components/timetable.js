import styles from './timetable.module.css';
import { 
 Clock, Download, RefreshCw,  
} from 'lucide-react';
import Navbar from './navbar';
import { useNavigate } from 'react-router-dom';

const Time = () => {
  const navigate = useNavigate();

  const weeklySchedule = [
    {
      day: 'Monday',
      classes: [
        { time: '9:00', subject: 'Mathematics', teacher: 'Dr. Sarah Wilson' }
      ]
    },
    {
      day: 'Tuesday',
      classes: []
    },
    {
      day: 'Wednesday',
      classes: [
        { time: '11:00', subject: 'Chemistry', teacher: 'Dr. Lucy Brown' }
      ]
    },
    {
      day: 'Thursday',
      classes: [
        { time: '10:00', subject: 'English', teacher: 'Ms. Lisa Anderson' },
        { time: '14:00', subject: 'Physics', teacher: 'Prof. James Miller' }
      ]
    },
    {
      day: 'Friday',
      classes: [
        { time: '15:00', subject: 'Biology', teacher: 'Dr. Michael Chen' }
      ]
    }
  ];

  const todayClasses = [
    {
      subject: 'Mathematics',
      teacher: 'Ms Destiny Mabwe',
      timeSlot: '10:00AM-11:30AM'
    },
    {
      subject: 'Mathematics',
      teacher: 'Ms Destiny Mabwe',
      timeSlot: '10:00AM-11:30AM'
    }
  ];

  const handleJoinClass = (classItem) => {
    navigate('/CallPage', { 
    });
  };

  return (
    <div className={styles.dashboardContainer}>
      <Navbar />

      <div className={styles.contentContainer}>
        <div className={styles.weeklySchedule}>
          <div className={styles.timeColumn}>
            {[8, 9, 10, 11, 12, 13, 14, 15, 16, 17].map((hour) => (
              <div key={hour} className={styles.timeSlot}>
                <div className={styles.hour}>{hour}:00</div>
              </div>
            ))}
          </div>
          
          <div className={styles.scheduleGrid}>
            <div className={styles.daysRow}>
              {weeklySchedule.map((day) => (
                <div key={day.day} className={styles.dayHeader}>{day.day}</div>
              ))}
            </div>
            
            <div className={styles.classesContainer}>
              {weeklySchedule.map((day, dayIndex) => (
                <div key={day.day} className={styles.dayColumn}>
                  {day.classes.map((classItem, index) => {
                    const hour = parseInt(classItem.time.split(':')[0]);
                    const topPosition = (hour - 8) * 45;
                    
                    let subjectClass = '';
                    if (classItem.subject === 'Mathematics') subjectClass = styles.math;
                    else if (classItem.subject === 'English') subjectClass = styles.english;
                    else if (classItem.subject === 'Chemistry') subjectClass = styles.chemistry;
                    else if (classItem.subject === 'Physics') subjectClass = styles.physics;
                    else if (classItem.subject === 'Biology') subjectClass = styles.biology;
                    
                    return (
                      <div 
                        key={index} 
                        className={`${styles.classItem} ${subjectClass}`}
                        style={{ top: `${topPosition}px` }}
                      >
                        <div className={styles.classSubject}>{classItem.subject}</div>
                        <div className={styles.classTeacher}>{classItem.teacher}</div>
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className={styles.sidebar}>
          <div className={styles.todayClasses}>
            <h2 className={styles.sectionHeading}>Today's Classes</h2>
            
            {todayClasses.map((classItem, index) => (
              <div key={index} className={styles.todayClassCard}>
                <div className={styles.classHeader}>
                  <h3 className={styles.classTitle}>{classItem.subject}</h3>
                  <button 
                    className={styles.joinBtn}
                    onClick={() => handleJoinClass(classItem)}
                  >
                    Join Class
                  </button>
                </div>
                <div className={styles.classDetails}>
                  <p>{classItem.teacher}</p>
                  <div className={styles.timeInfo}>
                    <Clock size={16} />
                    <span>{classItem.timeSlot}</span>
                  </div>
                </div>
                <button className={styles.viewRecordingBtn}>View Recording</button>
              </div>
            ))}
          </div>
          
          <div className={styles.quickAccess}>
            <h2 className={styles.sectionHeading}>Quick Access</h2>
            
            <button className={styles.quickAccessBtn}>
              <Download size={18} />
              <span>Download Schedule</span>
            </button>
            
            <button className={styles.quickAccessBtn}>
              <RefreshCw size={18} />
              <span>Sync with Calendar</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Time;

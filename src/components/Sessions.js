import './Session.css';


const Session = () => {
    return ( 
      <div className="session">
        <h2>Today Session</h2>
        <div className="session-box">Mathemetics
            <p>7 AM</p>
            <p>1h</p>

        </div>
        <div className="session-box">Physical Sciences
        <p>9 AM</p>
        <p>1h</p>
        </div>
        <div className="session-box">Agricultural Sciences
        <p>2 PM</p>
        <p>1h</p>
        </div>
      </div>
    );
  }
  
  export default Session;
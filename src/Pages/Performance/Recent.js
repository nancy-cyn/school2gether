import './Recent.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faCheck } from '@fortawesome/free-solid-svg-icons';

function Recent() {
  return (
    <div className="recent-box">
      <h1 className="recent-title">
        <FontAwesomeIcon icon={faClock} className="icon-clock" /> 
        Recent Activity
      </h1>
      <div className="recent-content">
        <p><FontAwesomeIcon icon={faCheck} className="icon-check" /> Completed Math assignment</p>
        <p><FontAwesomeIcon icon={faCheck} className="icon-check" /> Viewed Science lecture</p>
      </div>
    </div>
  );
}

export default Recent;
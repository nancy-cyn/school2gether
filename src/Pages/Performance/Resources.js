import './Resources.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faClipboard,
  faVideo,
  faPenToSquare,
  faBook
} from '@fortawesome/free-solid-svg-icons';


function Resources() {
  return (
    <div className="resources-box">
      <h3 className="resources-title">Resources</h3>
      <div className="button-grid">
        <button className="resource-btn"><FontAwesomeIcon icon={faClipboard} className="resource-icon" /> Lecture Notes</button>
        <button className="resource-btn"><FontAwesomeIcon icon={faVideo} className="resource-icon" />   Video Tutorials</button>
        <button className="resource-btn"><FontAwesomeIcon icon={faPenToSquare} className="resource-icon" /> Practice Tests</button>
        <button className="resource-btn"><FontAwesomeIcon icon={faBook} className="resource-icon" /> Reference Books</button>
      </div>
    </div>
  );
}

export default Resources;
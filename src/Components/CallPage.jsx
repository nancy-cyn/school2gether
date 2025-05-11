import { Link } from 'react-router-dom';
import './CallPage.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMicrophone } from '@fortawesome/free-solid-svg-icons/faMicrophone';
import { faVideo } from '@fortawesome/free-solid-svg-icons';
import { faGear } from '@fortawesome/free-solid-svg-icons';

const VideoEmbedded = () => {
    return (
        <div className='Call_Page'>
            <div className='section1'>
                <div id='Video_div' style={{  height: 0 }}>
                    <iframe width="900" height="450" src="https://www.youtube.com/embed/qGFoZ8yodc4?si=tXk-74cYNZKe_8_7" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
                <div id='Contacts_List'>
                        <h2>Student Information</h2>
                        <p>Khwezi Mpumela</p>
                        <p>Grade 12</p>
                        <p>Subject: Accounting</p>
                        <p>Topic: Paper 1 Financial statements</p>
                        <h4>Mr Mmako is presenting</h4>
                        <p>01:09:30</p>

                </div>
                <div id='Resources'>
                        <h2>Learning Material</h2>
                        <p>Grade 12</p>
                        <p>Subject: Accounting</p>
                        <p>Statement of financial position</p>
                        <a href="/EC-Acc QP.pdf" download>Download Acconting Question paper</a>
                        <p>Accounting memorundum</p>
                        <a href="NSC-Acc memo.pdf" download>Download Memorundum</a>
                </div>
            </div>
            <div className="section2">
                <div id='First3Icons'>
                    <FontAwesomeIcon size='2x' icon={faMicrophone} />
                    <FontAwesomeIcon size='2x' icon={faGear} />
                    <FontAwesomeIcon size='2x' icon={faVideo} />
                </div>
                <div id='icon2'>
                   <button id='btn_file'><input type="file" name="Share file" id="" /></button>
                   <button id='btn_chat'>Chat</button>
                   <button id='btn_share_screen'>share screen</button>
                </div>
                <div id='icon3'>
                    <button>End Session</button>
                </div>
            </div>

        </div>
     );
}
 
export default VideoEmbedded;
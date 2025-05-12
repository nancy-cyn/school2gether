import './CallPage.css';
import Navbar from './navbar';

const VideoEmbedded = () => {
    return (
        <div>
            <Navbar />
            <div className='Call_Page'>
                <div id='Video_div' style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
                    <br />
                    <iframe 
                        width="900" 
                        height="500" 
                        src="https://www.youtube.com/embed/qGFoZ8yodc4?si=tXk-74cYNZKe_8_7" 
                        title="YouTube video player" 
                        frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        referrerPolicy="strict-origin-when-cross-origin" 
                        allowFullScreen
                    ></iframe>
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
                    <a href="/EC-Acc QP.pdf" download>Download Accounting Question paper</a>
                    <p>Accounting memorandum</p>
                    <a href="NSC-Acc memo.pdf" download>Download Memorandum</a>
                </div>
            </div>
                        {/* <div>
            <h2>Learning Material</h2>
                    <p>Grade 12</p>
                    <p>Subject: Accounting</p>
                    <p>Statement of financial position</p>
                    <a href="/EC-Acc QP.pdf" download>Download Acconting Question paper</a>
                    <p>Accounting memorundum</p>
                    <a href="NSC-Acc memo.pdf" download>Download Memorundum</a>
            </div> */}
        </div>
    );
}
 
export default VideoEmbedded;
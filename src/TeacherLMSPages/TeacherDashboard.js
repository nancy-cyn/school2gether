import './TeacherDashboard.css';
import Navbar from '../components/TeacherLMSNavbar.js';

const DashboardContent = () => {
    return ( 
        <div>
            <Navbar/>
            <div className="BashboardContent">
                <div className="card_Active_Students">
                    <p id='first_row'>+2 new students</p>
                    <h3>24</h3>
                    Active Students
                </div>
                <div className="card_Sessions">
                    <p id='first_row'>3 sessions remaining</p>
                    <h3>8</h3>
                    Sessions Today
                </div>
                <div className="card_New_Request">
                    <p id='first_row'>2 pending request</p>
                    <h3>2</h3>
                    New Request
                </div>
                <div className="card_This_month">
                    <p id='first_row'>+15% vs last month</p>
                    <h3>R3000</h3>
                    This month
                </div>
                <div className='card_Recent_Activities'>
                    <h2 className='Recent_Activities'>Recent Activities</h2>
                    <p className='students_availablep'>Nancy joined the your Maths class
                    <p className='time'>5 minutes ago</p>
                    </p>
                    <p className='students_availablep'>Chris joined your Life Science class
                    <p className='time'>2 hours ago</p>
                    </p>
                    <p className='students_availablep'>Chris joined your Business Studies class
                    <p className='time'>5 hours ago</p>
                    </p>
                    <p className='new_requests'>New tutoring request for Mathematics
                    <p className='time'>10 hours</p>
                    
                    </p>
                </div>
                <div className='TutoringRequest' >
                    <h2 className='TutRequests'>Tutoring Request</h2>
                    <p id='paragraphRequest'>Destiny Mabwe Mathematics
                        <br />
                    <button className='accept_btn'>Accept</button>
                    <button className='decline_btn'>Decline</button>
                    </p>
                    <p id='paragraphRequest'>Ntuthuko Kubheka Programming
                        <br />
                    <button className='accept_btn'>Accept</button>
                    <button className='decline_btn'>Decline</button>  
                    </p>
                </div>
                <div id='Sessions'>
                    <h2 id='todaysSession'>Today's Sessions</h2>
                    <p className='Session_p'>Ikaneng Mmnako
                    <p className='time'>1 hours ago</p>
                    </p>
                    <p className='Session_p'>Nkululeko Mdluli
                    <p className='time'>2 hours ago</p>
                    </p>
                    <p className='Session_p'>Mpumela Khwezi
                    <p className='time'>5 hours ago</p>
                    </p>
                </div>
                <div id='Performance'>
                    <h2 id='h2performance'>Performance</h2>
                    <p id='studentRate'>Student Retention
                        <p id='rate'>81.46%</p>
                    </p>
                    <p id='studentRate'>Average Rating
                        <p id='rate'>88.89%</p>
                    </p>
                </div>
            </div>
        </div>
     );
}
 
export default DashboardContent;
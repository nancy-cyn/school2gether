import { useState } from 'react';
import RequestCards from "../components/RequestCards.js";
import profilePic from '../components/student.png';
import { Link } from 'react-router-dom';
import './Requests.css'; 
import { BsHourglassSplit } from "react-icons/bs";
import { MdBlock } from "react-icons/md";
import { GiCheckMark } from "react-icons/gi";
import { LuCalendar } from "react-icons/lu";
import { BiRefresh } from 'react-icons/bi';
import { FiSearch, FiFilter, FiDownload } from "react-icons/fi";
import Navbar from '../components/TeacherLMSNavbar.js';

const RequestPage = () => {
    const [pendingRequestCount, setPendingRequestCount] = useState(10);
    const [rejectedRequestCount, setRejectedRequestCount] = useState(2);
    const [acceptedRequestCount, setAcceptedRequestCount] = useState(5);
    const [requests, setRequests] = useState([
        {
            id: 1,
            status: "Pending",
            avatar: profilePic,
            name: "Nancy Kabobo",
            grade: "10",
            subject: "Mathematics",
            time: "Mon, Wed 4-6 PM",
            message: "Looking for help with Algebra..."
        },
        {
            id: 2,
            status: "Pending",
            avatar: profilePic,
            name: "James Okello",
            grade: "11",
            subject: "Physics",
            time: "Tue, Thu 3-5 PM",
            message: "Need assistance with mechanics and vectors."
        },
        {
            id: 3,
            status: "Pending",
            avatar: profilePic,
            name: "Sarah Lubega",
            grade: "9",
            subject: "English",
            time: "Mon, Fri 5-6 PM",
            message: "Struggling with essay writing and grammar."
        },
        {
            id: 4,
            status: "Pending",
            avatar: profilePic,
            name: "Daniel Kato",
            grade: "12",
            subject: "Biology",
            time: "Wed, Sat 2-4 PM",
            message: "Need help reviewing for final exams."
        },
        {
            id: 5,
            status: "Pending",
            avatar: profilePic,
            name: "Amina Nalwanga",
            grade: "10",
            subject: "Chemistry",
            time: "Tue, Thu 4-6 PM",
            message: "Looking for help understanding chemical reactions."
        },
        {
            id: 6,
            status: "Pending",
            avatar: profilePic,
            name: "Michael Odongo",
            grade: "11",
            subject: "History",
            time: "Mon, Wed 3-5 PM",
            message: "Need guidance on writing better historical analysis essays."
        },
        {
            id: 7,
            status: "Pending",
            avatar: profilePic,
            name: "Ruth Kisembo",
            grade: "8",
            subject: "Geography",
            time: "Sat 10 AM - 12 PM",
            message: "Having trouble understanding maps and population topics."
        },
        {
            id: 8,
            status: "Pending",
            avatar: profilePic,
            name: "John Mugisha",
            grade: "9",
            subject: "Mathematics",
            time: "Tue, Thu 5-6 PM",
            message: "Need support with geometry and fractions."
        },
        {
            id: 9,
            status: "Pending",
            avatar: profilePic,
            name: "Lilian Nakato",
            grade: "12",
            subject: "Literature",
            time: "Fri 2-4 PM",
            message: "Would like help analyzing Shakespeare texts."
        },
        {
            id: 10,
            status: "Pending",
            avatar: profilePic,
            name: "Isaac Tumusiime",
            grade: "11",
            subject: "Computer Science",
            time: "Wed, Fri 4-5:30 PM",
            message: "Looking for help with programming basics."
        }
    ]);

    const handleAccept = (requestId) => {
        setPendingRequestCount(prevCount => prevCount - 1);
        setAcceptedRequestCount(prevCount=>prevCount+1)
        setRequests(prevRequests =>
        prevRequests.filter(req => req.id !== requestId) // Remove accepted request
    );
    };

    const handleDecline = (requestId) => {
        setPendingRequestCount(prevCount => prevCount - 1);
        setRejectedRequestCount(prevCount => prevCount + 1);
        setRequests(prevRequests =>
        prevRequests.filter(req => req.id !== requestId) // Remove accepted request
    );
    };
    

    return (
        <div>
            <Navbar/>
            <div className="requestpage">
                <div className="top-section">
                    <h1>Student Requests</h1>
                    <div className="request-summary" >
                        
                    <div className="request-status">
                        <div className="pending-request">
                            <BsHourglassSplit />
                            <span>Pending Request <br /><span className="number">{pendingRequestCount}</span></span>
                        </div>
                        <div className="rejected-request">
                            <MdBlock />
                            <span>Rejected Requests <br /><span className="number">{rejectedRequestCount}</span></span>
                        </div>
                        <div className="accepted-requests">
                            <GiCheckMark />
                            <span>Accepted Request <br /><span className="number">{acceptedRequestCount}</span></span> {/* Assuming count is 5 in the image */}
                        </div>
                    </div>
                    </div>
                    <div className="quick-action">
                        <h2>Quick Action</h2>
                        <Link to="/schedule" className="btn-schedule-link">
                        <button className='btn-schedule'>
                            <LuCalendar /> View Schedule
                        </button>
                        </Link>
                        
                        <button className="btn-availability">
                            <BiRefresh /> Update Availability
                        </button>
                    </div>
                </div>
                <div className="actions">
                    <div className="search-container">
                        <input type="text" placeholder="Search" className="ac-search-input" />
                        <button className="search-button">
                        <FiSearch />
                        </button>
                    </div>
                    <div className="filter-export">
                        <button className="filter-button">
                        <FiFilter /> Filter
                        </button>
                        <button className="export-button">
                        <FiDownload /> Export
                        </button>
                    </div>
                </div>
                <RequestCards
                    requests={requests}
                    onAccept={handleAccept}
                    onDecline={handleDecline}
                />
            </div>
        </div>
    );
}

export default RequestPage; 
/*import React, { useState } from 'react';*/
import './Requests.css'; 
import { BsHourglassSplit } from "react-icons/bs";
import { MdBlock } from "react-icons/md";
import { GiCheckMark } from "react-icons/gi";
import { LuCalendar } from "react-icons/lu";
import { BiRefresh } from 'react-icons/bi';
import { FiSearch, FiFilter, FiDownload } from "react-icons/fi";

const RequestPage = () => {
    /*const [pendingRequestCount, setPendingRequestCount] = useState(8);*/
    return (
        <div className="requestpage">
            <div className="top-section">
                <h1>Student Requests</h1>
                <div className="request-summary" >
                    
                <div className="request-status">
                    <div className="pending-request">
                        <BsHourglassSplit />
                        <span>Pending Request <br /><span className="number">8</span></span>
                    </div>
                    <div className="rejected-request">
                        <MdBlock />
                        <span>Rejected Requests <br /><span className="number">2</span></span>
                    </div>
                    <div className="accepted-requests">
                        <GiCheckMark />
                        <span>Accepted Request <br /><span className="number">5</span></span> {/* Assuming count is 5 in the image */}
                    </div>
                </div>
                </div>
                <div className="quick-action">
                    <h2>Quick Action</h2>
                    <button className="btn-schedule">
                        <LuCalendar /> View Schedule
                    </button>
                    <button className="btn-availability">
                        <BiRefresh /> Update Availability
                    </button>
                </div>
            </div>
            <div className="actions">
                <div className="search-container">
                    <input type="text" placeholder="Search" className="search-input" />
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
        </div>
    );
}

export default RequestPage; 
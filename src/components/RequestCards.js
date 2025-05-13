import React from 'react';
import './RequestCards.css';
import { FiClock } from "react-icons/fi";
import { Link } from 'react-router-dom';

const RequestCards = ({ requests, onAccept, onDecline }) => {

    return (
        <div className="student-requests">
            {requests.map((request) => (
                <div className="student-request-card" key={request.id}>
                    <div className="card-banner">{request.status}</div>
                    <div className="avatar-container">
                        <div className="avatar">
                            <img src={request.avatar} alt={request.name} />
                        </div>
                    </div>
                    <div className="card-info">
                        <h3>{request.name}</h3>
                        <p>Grade {request.grade}</p>
                        <p className="subject">Subject: {request.subject}</p>
                        <p className="card-time">
                            <FiClock /> {request.time}
                        </p>
                        <p>{request.message}</p>
                    </div>
                    <div className="card-actions">
                        <button className='btn-accept' onClick={() => onAccept(request.id)}>Accept</button>
                        <button className='btn-decline' onClick={() => onDecline(request.id)}>Decline</button>
                        <Link to="/messages">
                            <button className='btn-message'>Message</button>
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default RequestCards;
import React, { useState } from 'react';
import './RequestCards.css';
import profilePic from './student.png';
import { FiClock } from "react-icons/fi";

const RequestCards = () => {
  const [requests] = useState([ 
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
            <button className='btn-accept'>Accept</button>
            <button className='btn-decline'>Decline</button>
            <button className='btn-message'>Message</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default RequestCards;
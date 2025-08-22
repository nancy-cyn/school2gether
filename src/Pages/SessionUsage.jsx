// SessionUsage.js
import React from "react";
import "./SessionUsage.css";
import { Link } from "react-router-dom";

export default function SessionUsage() {
    // mock data
    const monthlyOverview = [
        { name: "Nancy", used: 3, total: 4 },
        { name: "Ikaneng", used: 2, total: 4 },
        { name: "Khwezi", used: 0, total: 4 },
    ];

    const upcomingSessions = [
        { name: "Nancy", date: "July 20, 2025 at 10:00 AM" },
        { name: "Ikaneng", date: "July 22, 2025 at 2:00 PM" },
        { name: "Khwezi", date: "July 25, 2025 at 11:00 AM" },
    ];

    return (
        <div className="SessionUsage">
            <aside className="sidebar">
                <ul>
                    <li className="active">Payment Station
                        {/*<Link to="/BillingStation"></Link>*/}
                    </li>
                    <li>
                        <Link to="/Checkout">Make a Payment</Link>
                    </li>
                    <li className="usage">
                        <Link to="/SessionUsage">Session Usage</Link>
                    </li>
                    <li >
                        <Link to="/BillingStation">Invoice</Link>
                    </li>

                </ul>
            </aside>

            {/* Main Content */}
            <div className="session-container">
                <h2>Session Usage</h2>
                <div className="session-card">
                    {/* Monthly Overview */}
                    <div className="overview">
                        <h3>Monthly Overview</h3>
                        {monthlyOverview.map((item, index) => (
                            <div key={index} className="overview-item">
                                <div className="overview-text">
                                    <span className="name">{item.name}</span>
                                    <span className="status">
                    {item.used} of {item.total} sessions used
                  </span>
                                </div>
                                <div className="progress-bar">
                                    <div
                                        className="progress"
                                        style={{ width: `${(item.used / item.total) * 100}%` }}
                                    ></div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Upcoming Sessions */}
                    <div className="upcoming">
                        <h3>Upcoming Sessions</h3>
                        {upcomingSessions.map((session, index) => (
                            <div key={index} className="upcoming-item">
                                <div className="upcoming-text">
                                    <span className="name">{session.name}</span>
                                    <span className="date">{session.date}</span>
                                </div>
                                <a href="/" className="view-link">
                                    View
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

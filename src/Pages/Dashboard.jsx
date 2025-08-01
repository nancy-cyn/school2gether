import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
    return (
        <div className="dashboard-container">
            <h2>Dashboard</h2>
            <p>Welcome back, Nancy! Here's what's happening today.</p>

            <div className="dashboard-actions">
                <div className="action-card"><br />Schedule Session</div>
                <div className="action-card"><br />Add Student</div>
                <div className="action-card"><br />Create Learning Plan</div>
                <div className="action-card"><br />View Reports</div>
                <div className="action-card"><br />Manage Invoices</div>
            </div>

            <div className="main-content">
                <div className="sessions">
                    <h3>Today's Sessions</h3>

                    <div className="session-card in-progress">
                        <div className="session-info">
                            <strong>Mathematics (Nancy)</strong>
                            <div className="session-meta"> 10:00AM–11:30 AM (In Progress)</div>
                        </div>
                        <button className="join-now">Join Now</button>
                    </div>

                    <div className="session-card upcoming">
                        <div className="session-info">
                            <strong>Physics (Ikaneng)</strong>
                            <div className="session-meta"> 1:00PM–2:30PM</div>
                        </div>
                        <button className="prepare-btn">Prepare</button>
                    </div>
                </div>

                <div className="snapshot">
                    <h3>Performance Snapshot</h3>
                    <div className="snapshot-grid">
                        <div className="snap-box">
                            <p>Total Students</p>
                            <strong>2</strong>
                            <span className="up">↑ +1 this month</span>
                        </div>
                        <div className="snap-box">
                            <p>Sessions This Week</p>
                            <strong>12</strong>
                        </div>
                        <div className="snap-box">
                            <p>Bookmarked by</p>
                            <strong>9 Clients</strong>
                        </div>
                        <div className="snap-box">
                            <p>Earnings This Month</p>
                            <strong>R250</strong>
                            <span className="up">↑ R20 vs last month</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;

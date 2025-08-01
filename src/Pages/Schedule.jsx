import './Schedule.css'

export default function SchedulePage() {
    return (
        <div className="container">
            <div className="main">
                <section className="schedule-section">
                    <div className="schedule-header">
                        <h2>My Weekly Schedule</h2>
                        <span>July 12 - July 18, 2025</span>
                    </div>

                    <div className="schedule-grid">
                        <div className="time-column">
                            {Array.from({ length: 13 }, (_, i) => (
                                <div className="time-slot" key={i}>
                                    {8 + i}:00
                                </div>
                            ))}
                        </div>

                        <div className="day-columns">
                            {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day) => (
                                <div className="day-column" key={day}>
                                    <div className="day-label">{day}</div>
                                    {day === 'Mon' && (
                                        <div className="event event-math">Math - Nancy</div>
                                    )}
                                    {day === 'Wed' && (
                                        <div className="event event-physics">Physic - Ikaneng</div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <aside className="live-classes">
                    <h2>Today's Live Classes</h2>

                    <div className="live-class">
                        <div className="info">
                            <strong>Math</strong>
                            <p>10:00AM - 11:30AM</p>
                            <p>Nancy</p>
                            <p className="status started">Started</p>
                        </div>
                        <button className="join-btn">Join Now</button>
                    </div>

                    <div className="live-class">
                        <div className="info">
                            <strong>Physics</strong>
                            <p>2:00PM - 3:30PM</p>
                            <p>Ikaneng</p>
                            <p className="status upcoming">Starts in 4h 45m</p>
                        </div>
                        <button className="join-btn disabled" disabled>
                            Starts Soon
                        </button>
                    </div>
                </aside>
            </div>
        </div>
    );
}


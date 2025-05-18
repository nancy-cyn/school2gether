import React, { useState } from 'react';
import { Calendar, Clock, User, ChevronLeft, ChevronRight, Save, X } from 'lucide-react';
import './TeacherSchedule.css';
import { useNavigate,  } from 'react-router-dom';
import Navbar from '../components/TeacherLMSNavbar.js';

const CalendarApp = () => {
    const navigate = useNavigate();
    const handleGoToSession = () => {
        navigate('/callpage');
    };
    const [currentDate, setCurrentDate] = useState(new Date());
    const [viewMode, setViewMode] = useState('week');
    const [sessions, setSessions] = useState([
        {
            id: 1,
            title: "Michael Emeka",
            subject: "Advanced Mathematics",
            date: new Date(2025, 8, 10, 10, 0),
            duration: 60
        },
        {
            id: 2,
            title: "Ikaneng Mmako",
            subject: "Mathematics",
            date: new Date(new Date().setHours(10, 0, 0, 0)),
            duration: 60
        },
        {
            id: 3,
            title: "Sarah Johnson",
            subject: "Physics",
            date: new Date(new Date().setHours(14, 30, 0, 0)),
            duration: 90
        }
    ]);
    const [showModal, setShowModal] = useState(false);
    const [modalMode, setModalMode] = useState('add');
    const [editingSession, setEditingSession] = useState(null);
    const [formData, setFormData] = useState({
        title: '',
        subject: '',
        date: '',
        time: '',
        duration: 60
    });

    const navigatePrevious = () => {
        const newDate = new Date(currentDate);
        if (viewMode === 'week') {
            newDate.setDate(newDate.getDate() - 7);
        } else {
            newDate.setMonth(newDate.getMonth() - 1);
        }
        setCurrentDate(newDate);
    };

    const navigateNext = () => {
        const newDate = new Date(currentDate);
        if (viewMode === 'week') {
            newDate.setDate(newDate.getDate() + 7);
        } else {
            newDate.setMonth(newDate.getMonth() + 1);
        }
        setCurrentDate(newDate);
    };

    const getDaysToDisplay = () => {
        const days = [];
        if (viewMode === 'week') {
            const startOfWeek = new Date(currentDate);
            const day = currentDate.getDay();
            startOfWeek.setDate(currentDate.getDate() - day);
            for (let i = 0; i < 7; i++) {
                const date = new Date(startOfWeek);
                date.setDate(startOfWeek.getDate() + i);
                days.push(date);
            }
        } else {
            const year = currentDate.getFullYear();
            const month = currentDate.getMonth();
            const firstDay = new Date(year, month, 1);
            const startDate = new Date(firstDay);
            startDate.setDate(firstDay.getDate() - firstDay.getDay());
            for (let i = 0; i < 42; i++) {
                const date = new Date(startDate);
                date.setDate(startDate.getDate() + i);
                days.push(date);
            }
        }
        return days;
    };

    const handleAddSession = () => {
        setModalMode('add');
        const today = new Date();
        setFormData({
            title: '',
            subject: '',
            date: today.toISOString().split('T')[0],
            time: '10:00',
            duration: 60
        });
        setShowModal(true);
    };

    const handleEditSession = (session) => {
        setModalMode('edit');
        setEditingSession(session);
        const sessionDate = new Date(session.date);
        const formattedDate = sessionDate.toISOString().split('T')[0];
        const formattedTime = sessionDate.getHours().toString().padStart(2, '0') + ':' +
            sessionDate.getMinutes().toString().padStart(2, '0');
        setFormData({
            title: session.title,
            subject: session.subject,
            date: formattedDate,
            time: formattedTime,
            duration: session.duration
        });
        setShowModal(true);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const [year, month, day] = formData.date.split('-').map(Number);
        const [hours, minutes] = formData.time.split(':').map(Number);
        const sessionDate = new Date(year, month - 1, day, hours, minutes);
        const sessionData = {
            title: formData.title,
            subject: formData.subject,
            date: sessionDate,
            duration: parseInt(formData.duration)
        };
        if (modalMode === 'add') {
            const newSession = {
                id: Date.now(),
                ...sessionData
            };
            setSessions([...sessions, newSession]);
        } else {
            const updatedSessions = sessions.map(session => {
                if (session.id === editingSession.id) {
                    return {
                        ...session,
                        ...sessionData
                    };
                }
                return session;
            });
            setSessions(updatedSessions);
        }
        setShowModal(false);
    };

    const formatTime = (date) => {
        const hours = date.getHours();
        const minutes = date.getMinutes();
        const period = hours >= 12 ? 'PM' : 'AM';
        const formattedHours = hours % 12 || 12;
        return `${formattedHours}:${minutes.toString().padStart(2, '0')} ${period}`;
    };

    const getMonthName = () => {
        const options = { month: 'long' };
        return currentDate.toLocaleDateString('en-US', options);
    };

    const getSessionsForTimeSlot = (date, hour) => {
        return sessions.filter(session => {
            const sessionDate = new Date(session.date);
            return sessionDate.getDate() === date.getDate() &&
                sessionDate.getMonth() === date.getMonth() &&
                sessionDate.getFullYear() === date.getFullYear() &&
                sessionDate.getHours() === hour;
        });
    };

    const timeSlots = Array.from({ length: 13 }, (_, i) => i + 8);

    return (
        <div>
            <Navbar/>
            <div className="app-container">
                <div className="calendar-container">
                    <div className="calendar-header">
                        <div className="month-nav">
                            <h2>{getMonthName()}</h2>
                            <div className="nav-buttons">
                                <button onClick={navigatePrevious}><ChevronLeft size={18} /></button>
                                <button onClick={navigateNext}><ChevronRight size={18} /></button>
                            </div>
                        </div>
                        <div className="view-toggle">
                            <button
                                className={viewMode === 'week' ? 'active' : ''}
                                onClick={() => setViewMode('week')}
                            >
                                Week
                            </button>
                            <button
                                className={viewMode === 'month' ? 'active' : ''}
                                onClick={() => setViewMode('month')}
                            >
                                <Calendar size={16} /> Month
                            </button>
                        </div>
                        <div className="calendar-actions">
                            <button className="filter-button">
                                <span>Filter</span>
                            </button>
                            <button className="export-button">
                                Export
                            </button>
                            <button className="add-session-button" onClick={handleAddSession}>
                                + New Session
                            </button>
                        </div>
                    </div>
                    <div className={`calendar-grid ${viewMode}-view`}>
                        <div className="day-headers">
                            {viewMode === 'week' && <div className="time-column-header"></div>}
                            {getDaysToDisplay().slice(0, viewMode === 'week' ? 7 : 7).map((day, index) => (
                                <div key={index} className="day-header">
                                    <div className="day-name">{day.toLocaleDateString('en-US', { weekday: 'short' })}</div>
                                    <div className="day-number">{day.getDate()}</div>
                                </div>
                            ))}
                        </div>
                        {viewMode === 'week' ? (
                            <div className="week-grid">
                                <div className="time-labels">
                                    {timeSlots.map((hour) => (
                                        <div key={hour} className="time-slot">
                                            <div className="time-label">{hour % 12 || 12}:00</div>
                                        </div>
                                    ))}
                                </div>
                                {getDaysToDisplay().map((day, dayIndex) => (
                                    <div key={dayIndex} className="day-column">
                                        {timeSlots.map((hour) => {
                                            const sessionsAtTime = getSessionsForTimeSlot(day, hour);
                                            return (
                                                <div key={hour} className="time-slot">
                                                    {sessionsAtTime.map((session) => (
                                                        <div
                                                            key={session.id}
                                                            className="session-card"
                                                            onClick={() => handleEditSession(session)}
                                                        >
                                                            <div className="session-time">{formatTime(new Date(session.date))}</div>
                                                            <div className="session-title">{session.title}</div>
                                                            <div className="session-subject">{session.subject}</div>
                                                        </div>
                                                    ))}
                                                </div>
                                            );
                                        })}
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="month-grid">
                                {getDaysToDisplay().map((day, index) => {
                                    const isCurrentMonth = day.getMonth() === currentDate.getMonth();
                                    const dayClasses = `month-day ${isCurrentMonth ? 'current-month' : 'other-month'}`;
                                    const daysSessions = sessions.filter(session => {
                                        const sessionDate = new Date(session.date);
                                        return sessionDate.getDate() === day.getDate() &&
                                            sessionDate.getMonth() === day.getMonth() &&
                                            sessionDate.getFullYear() === day.getFullYear();
                                    });
                                    return (
                                        <div key={index} className={dayClasses}>
                                            <div className="day-number">{day.getDate()}</div>
                                            <div className="day-sessions">
                                                {daysSessions.map(session => (
                                                    <div
                                                        key={session.id}
                                                        className="month-session"
                                                        onClick={() => handleEditSession(session)}
                                                    >
                                                        <div className="session-time">{formatTime(new Date(session.date))}</div>
                                                        <div className="session-title">{session.title}</div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        )}
                    </div>
                    <div className="todays-sessions">
                        <h3>Today's Session</h3>
                        {sessions
                            .filter(session => {
                                const sessionDate = new Date(session.date);
                                const today = new Date();
                                return sessionDate.getDate() === today.getDate() &&
                                    sessionDate.getMonth() === today.getMonth() &&
                                    sessionDate.getFullYear() === today.getFullYear();
                            })
                            .map(session => (
                                <div key={session.id} className="today-session-card">
                                    <div className="today-session-time">
                                        <Clock size={16} />
                                        <span>{formatTime(new Date(session.date))}</span>
                                    </div>
                                    <div className="today-session-info">
                                        <div className="today-session-student">
                                            <User size={16} />
                                            <span>{session.title}</span>
                                        </div>
                                        <div className="today-session-subject">{session.subject}</div>
                                    </div>
                                    <div className="today-session-actions">
                                        <button onClick={handleGoToSession} className="join-button">Join Session</button>
                                        <button className="reschedule-button">Reschedule</button>
                                    </div>
                                </div>
                            ))}
                    </div>
                    {showModal && (
                        <div className="modal-overlay">
                            <div className="modal">
                                <div className="modal-header">
                                    <h3>{modalMode === 'add' ? 'Add New Session' : 'Edit Session'}</h3>
                                    <button className="close-button" onClick={() => setShowModal(false)}>
                                        <X size={18} />
                                    </button>
                                </div>
                                <form onSubmit={handleSubmit}>
                                    <div className="form-group">
                                        <label htmlFor="title">Student Name</label>
                                        <input
                                            type="text"
                                            id="title"
                                            name="title"
                                            value={formData.title}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="subject">Subject</label>
                                        <input
                                            type="text"
                                            id="subject"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group">
                                            <label htmlFor="date">Date</label>
                                            <input
                                                type="date"
                                                id="date"
                                                name="date"
                                                value={formData.date}
                                                onChange={handleInputChange}
                                                required
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="time">Time</label>
                                            <input
                                                type="time"
                                                id="time"
                                                name="time"
                                                value={formData.time}
                                                onChange={handleInputChange}
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="duration">Duration (minutes)</label>
                                        <select
                                            id="duration"
                                            name="duration"
                                            value={formData.duration}
                                            onChange={handleInputChange}
                                        >
                                            <option value="30">30 minutes</option>
                                            <option value="60">60 minutes</option>
                                            <option value="90">90 minutes</option>
                                            <option value="120">120 minutes</option>
                                        </select>
                                    </div>
                                    <div className="modal-actions">
                                        <button type="button" className="cancel-button" onClick={() => setShowModal(false)}>Cancel</button>
                                        <button type="submit" className="save-button">
                                            <Save size={16} /> {modalMode === 'add' ? 'Add Session' : 'Save Changes'}
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CalendarApp;
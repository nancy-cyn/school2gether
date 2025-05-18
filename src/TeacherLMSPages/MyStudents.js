import React, { useState, useEffect, useMemo } from "react";
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import styles from "./MyStudents.module.css";
import { Grid, List, MoreVertical, MessageCircle, User, ArrowUpDown, File } from "lucide-react";
import dp from '../components/student.png';
import pic2 from '../images/boy1.jpg';
import pic3 from '../images/boy2.jpg';
import pic4 from '../images/girl1.jpg';
import pic5 from '../images/girl2.jpg';
import { Link } from 'react-router-dom';
import Navbar from '../components/TeacherLMSNavbar.js';

// Placeholder data for students
const initialStudents = [
    { id: '1', name: 'Nkululeko Mdhluli', progress: 64, nextSession: 'Today, 2:00 PM', avatar: dp },
    { id: '2', name: 'Christopher Skinner', progress: 44, nextSession: 'Today, 2:00 PM', avatar: pic2 },
    { id: '3', name: 'Stephen Skinner', progress: 44, nextSession: 'Today, 2:00 PM', avatar: pic3 },
    { id: '4', name: 'Sarah Williams', progress: 75, nextSession: 'Tomorrow, 10:00 AM', avatar: pic4 },
    { id: '5', name: 'David Lee', progress: 20, nextSession: 'Next Week, 3:00 PM', avatar: dp },
    { id: '6', name: 'Jessica Brown', progress: 90, nextSession: 'Today, 1:00 PM', avatar: pic5 },
];

const MyStudents = () => {
    const [students, setStudents] = useState(initialStudents);
    const [view, setView] = useState("grid");
    const [searchTerm, setSearchTerm] = useState("");
    const [sortConfig, setSortConfig] = useState({ key: null, direction: "ascending" });
    const navigate = useNavigate(); // Initialize navigate

    useEffect(() => {
        setTimeout(() => setStudents(initialStudents), 500);
    }, []);

    const handleViewChange = (newView) => {
        setView(newView);
    };

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const getFilteredStudents = () =>
        students.filter((student) =>
            student.name.toLowerCase().includes(searchTerm.toLowerCase())
        );

    const sortedStudents = useMemo(() => {
        let sortableItems = [...getFilteredStudents()];
        if (sortConfig.key && sortableItems.every((s) => s.hasOwnProperty(sortConfig.key))) {
            sortableItems.sort((a, b) => {
                return sortConfig.direction === "ascending"
                    ? a[sortConfig.key] > b[sortConfig.key] ? 1 : -1
                    : a[sortConfig.key] < b[sortConfig.key] ? 1 : -1;
            });
        }
        return sortableItems;
    }, [getFilteredStudents(), sortConfig]);

    const requestSort = (key) => {
        setSortConfig((prev) => ({
            key,
            direction: prev.key === key && prev.direction === "ascending" ? "descending" : "ascending",
        }));
    };

    const getSortIcon = (key) => (
        <ArrowUpDown className={`ml-2 h-4 w-4 ${sortConfig.key === key && sortConfig.direction === "ascending" ? "rotate-180" : ""}`} />
    );

    const handleViewProfile = (studentId) => {
        navigate(`/student-performance/${studentId}`); // Navigate to the StudentPerformance page
    };
    const handleMessageButton =() =>{
        <Link to='/messages'></Link>; 
    }

    return (
        <div>
            <Navbar/>
            <div className={styles.container}>
                <h1 className={styles.heading}>My Students</h1>

                {/* Toolbar */}
                <div className={styles.toolbar}>
                    <input
                        type="text"
                        placeholder="Search Students..."
                        value={searchTerm}
                        onChange={handleSearch}
                        className={styles.searchInput}
                    />
                    <button onClick={() => handleViewChange("grid")} className={`${styles.viewButton} ${view === "grid" ? styles.activeView : ""}`}>
                        <Grid className="h-4 w-4" />
                    </button>
                    <button onClick={() => handleViewChange("list")} className={`${styles.viewButton} ${view === "list" ? styles.activeView : ""}`}>
                        <List className="h-4 w-4" />
                    </button>
                    <button className={styles.exportButton}>
                        <File className="mr-2 h-4 w-4" /> Export
                    </button>
                </div>

                {/* Student Display */}
                {view === "grid" ? (
                    <div className={styles.grid}>
                        {sortedStudents.map((student) => (
                            <div key={student.id} className={styles.studentCard}>
                                <div className={styles.cardHeader}>
                                    <div className={styles.studentName}>
                                        <img src={student.avatar} alt={student.name} className={styles.avatar} />
                                        {student.name}
                                    </div>
                                    <MoreVertical className="h-4 w-4 text-gray-500" />
                                </div>
                                <div className={styles.cardDescription}>
                                    Progress: <span className={styles.progressBadge}>{student.progress}%</span>
                                </div>
                                <div className={styles.cardContent}>
                                    <div className={styles.nextSession}>
                                        <span className="font-medium">Next Session:</span> {student.nextSession}
                                    </div>
                                    <div className={styles.buttonContainer}>
                                        
                                        <button className={styles.messageButton}>
                                            <MessageCircle className="mr-2 h-4 w-4" /> Message
                                        </button>
                                        <button
                                            className={styles.profileButton}
                                            onClick={() => handleViewProfile(student.id)} // Use handleViewProfile
                                        >
                                            <User className="mr-2 h-4 w-4" /> View Profile
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <table className={styles.table}>
                        <thead className={styles.thead}>
                            <tr>
                                <th>
                                    <button className={styles.sortButton} onClick={() => requestSort("name")}>
                                        Name {getSortIcon("name")}
                                    </button>
                                </th>
                                <th>
                                    <button className={styles.sortButton} onClick={() => requestSort("progress")}>
                                        Progress {getSortIcon("progress")}
                                    </button>
                                </th>
                                <th>Next Session</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {sortedStudents.map((student) => (
                                <tr key={student.id}>
                                    <td>
                                        <div className={styles.studentName}>
                                            <img src={student.avatar} alt={student.name} className={styles.avatar} />
                                            {student.name}
                                        </div>
                                    </td>
                                    <td>
                                        <span className={styles.progressBadge}>{student.progress}%</span>
                                    </td>
                                    <td>{student.nextSession}</td>
                                    <td>
                                        <button className={styles.iconButton} onClick={()=> handleMessageButton()}>
                                            <MessageCircle className="h-4 w-4" />
                                        </button>
                                        <button
                                            className={styles.iconButton}
                                            onClick={() => handleViewProfile(student.id)}
                                        >
                                            <User className="h-4 w-4" />
                                        </button>
                                        <MoreVertical className="h-4 w-4 text-gray-500" />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    );
};

export default MyStudents;
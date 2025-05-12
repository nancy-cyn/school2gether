import React, { useState, useEffect, useMemo } from "react";
import styles from "./MyTutors.module.css"; // Ensure correct CSS import
import { Grid, List, MoreVertical, MessageCircle, User, ArrowUpDown, File } from "lucide-react";
import Navbar from './navbar';


// Placeholder data for students (replace with actual data fetching)
const initialStudents = [
    { id: '1', name: 'Christopher Skinner', progress: 44, nextSession: 'Today, 2:00 PM', avatar: '/path/to/avatar1.jpg' },
    { id: '2', name: 'Christopher Skinner', progress: 44, nextSession: 'Today, 2:00 PM', avatar: '/path/to/avatar2.jpg' },
    { id: '3', name: 'Christopher Skinner', progress: 44, nextSession: 'Today, 2:00 PM', avatar: '/path/to/avatar3.jpg' },
    { id: '4', name: 'Sarah Williams', progress: 75, nextSession: 'Tomorrow, 10:00 AM', avatar: '/path/to/avatar4.jpg' },
    { id: '5', name: 'David Lee', progress: 20, nextSession: 'Next Week, 3:00 PM', avatar: '/path/to/avatar5.jpg' },
    { id: '6', name: 'Jessica Brown', progress: 90, nextSession: 'Today, 1:00 PM', avatar: '/path/to/avatar6.jpg' },
];


const MyStudents = () => {
    const [students, setStudents] = useState(initialStudents);
    const [view, setView] = useState("grid"); // Removed TypeScript type
    const [searchTerm, setSearchTerm] = useState("");
    const [sortConfig, setSortConfig] = useState({ key: null, direction: "ascending" });

    // Simulate fetching data (replace with actual API call)
    useEffect(() => {
        setTimeout(() => setStudents(initialStudents), 500); // Simulated delay
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

    return (
        
        <div className={styles.container}>
                  <Navbar />

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
                                    <button className={styles.profileButton}>
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
                                    <button className={styles.iconButton}>
                                        <MessageCircle className="h-4 w-4" />
                                    </button>
                                    <button className={styles.iconButton}>
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
    );
};

export default MyStudents;


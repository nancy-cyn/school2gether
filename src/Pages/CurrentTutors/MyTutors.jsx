import React, { useState, useEffect } from 'react';
import { Search, Users, Star, Clock, MessageCircle, XCircle, ArrowUpDown } from 'lucide-react';
import styles from './MyTutors.module.css'; // Import CSS Module

// Placeholder data for tutors (replace with actual data fetching)
const initialTutors = [
    { id: '1', name: 'Mr Christopher Skinner', subject: 'Mathematics', rating: 4.5, lastSession: '2 days ago', sessions: 18, avatar: './black haired boy.jpg' },
    { id: '2', name: 'Mr Ntuthuko Kubeka', subject: 'Mathematics', rating: 4.5, lastSession: '2 days ago', sessions: 18, avatar: './black haired boy.jpg' },
    { id: '3', name: 'Mr Nkululeko Mdhluli', subject: 'Mathematics', rating: 4.5, lastSession: '2 days ago', sessions: 18, avatar: './black haired boy.jpg' },
    { id: '4', name: 'Miss Destiny Mabwe', subject: 'Mathematics', rating: 4.5, lastSession: '7 days ago', sessions: 10, avatar: './girl2.jpg' },
    { id: '5', name: 'Miss Khwezi Mpumela', subject: 'Mathematics', rating: 4.5, lastSession: '7 days ago', sessions: 10, avatar: './girl2.jpg' },
    { id: '6', name: 'Mr John Smith', subject: 'Mathematics', rating: 4.5, lastSession: '7 days ago', sessions: 10, avatar: './girl2.jpg' },
];

const MyTutors = () => {
    const [tutors, setTutors] = useState(initialTutors);
    const [searchTerm, setSearchTerm] = useState('');
    const [sortBy, setSortBy] = useState('recent');
    const [sortConfig, setSortConfig] = useState({ key: null, direction: 'ascending' });

    useEffect(() => {
        const timer = setTimeout(() => {
            setTutors(initialTutors);
        }, 500);

        return () => clearTimeout(timer);
    }, []);

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSort = (newSortBy) => {
        setSortBy(newSortBy);
    };

    const getFilteredTutors = () => {
        return tutors.filter(tutor =>
            tutor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            tutor.subject.toLowerCase().includes(searchTerm.toLowerCase())
        );
    };

    const sortedTutors = React.useMemo(() => {
        let sortableItems = [...getFilteredTutors()];
        if (sortConfig.key !== null) {
            sortableItems.sort((a, b) => {
                if (a[sortConfig.key] < b[sortConfig.key]) {
                    return sortConfig.direction === 'ascending' ? -1 : 1;
                }
                if (a[sortConfig.key] > b[sortConfig.key]) {
                    return sortConfig.direction === 'ascending' ? 1 : -1;
                }
                return 0;
            });
        } else if (sortBy === 'rating') {
            sortableItems.sort((a, b) => b.rating - a.rating);
        } else {
            sortableItems.sort((a, b) => {
                const dateA = new Date(a.lastSession.replace(/(\d+) days? ago/, (match, days) => {
                    const today = new Date();
                    today.setDate(today.getDate() - parseInt(days, 10));
                    return today.toISOString().split('T')[0];
                }));
                const dateB = new Date(b.lastSession.replace(/(\d+) days? ago/, (match, days) => {
                    const today = new Date();
                    today.setDate(today.getDate() - parseInt(days, 10));
                    return today.toISOString().split('T')[0];
                }));
                return dateB.getTime() - dateA.getTime();
            });
        }
        return sortableItems;
    }, [getFilteredTutors(), sortBy, sortConfig]);

    const requestSort = (key) => {
        let direction = 'ascending';
        if (sortConfig.key === key && sortConfig.direction === 'ascending') {
            direction = 'descending';
        }
        setSortConfig({ key, direction });
    };

    const getSortIcon = (key) => {
        if (!sortConfig || sortConfig.key !== key) {
            return <ArrowUpDown className="ml-2 h-4 w-4" />;
        }
        return sortConfig.direction === 'ascending' ? (
            <ArrowUpDown className="ml-2 h-4 w-4 rotate-180" />
        ) : (
            <ArrowUpDown className="ml-2 h-4 w-4" />
        );
    };

    const handleRemoveTutor = (tutorId) => {
        setTutors(prevTutors => prevTutors.filter(tutor => tutor.id !== tutorId));
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.heading}>My Tutors</h1>

            <div className={styles.toolbar}>
                <div className={styles.toolbarSearchAndSort}>
                    <div className={styles.search}>
                        <Search className={styles.searchIcon} />
                        <input
                            type="text"
                            placeholder="Search tutors..."
                            value={searchTerm}
                            onChange={handleSearch}
                            className={styles.searchInput}
                        />
                    </div>
                    <div className={styles.sort}>
                        <span className={styles.sortByText}>Sort by:</span>
                        <button className={`${styles.sortButton} ${sortBy === 'recent' ? styles.activeSort : ''}`} onClick={() => handleSort('recent')}>
                            Recent
                        </button>
                        <button className={`${styles.sortButton} ${sortBy === 'rating' ? styles.activeSort : ''}`} onClick={() => handleSort('rating')}>
                            Rating
                        </button>
                    </div>
                    <div className={styles.sort}>
                        <span className={styles.sortByText}>Sort:</span>
                        <button className={styles.sortButton} onClick={() => requestSort('name')}>
                            <span>Name</span>
                            {getSortIcon('name')}
                        </button>
                    </div>
                </div>
            </div>

            <div className={styles.tutorList}>
                {sortedTutors.map((tutor) => (
                    <div key={tutor.id} className={styles.tutorCard}>
                        <div className={styles.tutorCardHeader}>
                            <div className={styles.tutorAvatar}>
                                <img src={tutor.avatar} alt={tutor.name} />
                            </div>
                            <div className={styles.tutorInfo}>
                                <div className={styles.tutorName}>{tutor.name}</div>
                                <div className={styles.tutorSubject}>{tutor.subject}</div>
                                <div className={styles.tutorRating}>
                                    <Star className={styles.starIcon} />
                                    {tutor.rating}
                                </div>
                            </div>
                        </div>
                        <div className={styles.tutorDetails}>
                            <div className={styles.detailItem}>
                                <Clock className={styles.clockIcon} />
                                <span>Last Session: {tutor.lastSession}</span>
                            </div>
                            <div className={styles.detailItem}>
                                <Users className={styles.usersIcon} />
                                <span>{tutor.sessions} Sessions</span>
                            </div>
                        </div>
                        <div className={styles.tutorActions}>
                            <button className={styles.messageButton}>
                                <MessageCircle className="mr-2 h-4 w-4" /> Message
                            </button>
                            <button className={styles.removeButton} onClick={() => handleRemoveTutor(tutor.id)}>
                                <XCircle className="mr-2 h-4 w-4" /> Remove
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MyTutors;

import './Messages.css';
import React, { useState, useRef, useEffect } from 'react';
import { FiSend, FiSmile, FiPaperclip } from 'react-icons/fi';
import pic from '../../Components/student.png';
import teacherprofile from '../../Components/dp.jpg';
// import Navbar from '../components/TeacherLMSNavbar.js';

const MessagesPage = () => {
    const [selectedUser, setSelectedUser] = useState(null); // Start with null
    const mockUserList = [
        { id: '1', name: 'Nkululeko M.', avatar: pic, subject: 'Mathematics' },
        { id: '3', name: 'Siya P', avatar: pic, subject: 'Science' },
        { id: '2', name: 'Sarah S.', avatar: pic, subject: 'Maths' },
    ];

    return (
        <div>
            {/* <Navbar/> */}
            <div className="messages-page">
                <div className="user-list-sidebar">
                    <input
                        type="text"
                        placeholder="Search students..."
                        className="search-input"
                    />
                    <div className="user-list">
                        {mockUserList.map((user) => {
                            const isSelected = selectedUser === user.id;
                            return (
                                <div
                                    key={user.id}
                                    className={`user-item ${isSelected ? 'selected' : ''}`}
                                    onClick={() => setSelectedUser(user.id)}
                                >
                                    <img src={user.avatar} alt={user.name} className="avatar" />
                                    <div className="user-info">
                                        <div className="user-name">{user.name}</div>
                                        <div className="user-subject">{user.subject}</div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            
                <ConversationArea selectedUser={selectedUser} mockUserList={mockUserList} />
            </div>
        </div>
    );
};


const ConversationArea = ({ selectedUser, mockUserList }) => { // Receive props
    const [messages, setMessages] = useState([]); // Start with empty messages
    const [currentMessage, setCurrentMessage] = useState('');
    const messagesEndRef = useRef(null);

    // Find selected user's data *using the prop*
    const selectedUserData = mockUserList.find((user) => user.id === selectedUser);
    const currentUser = 'user2';

    const handleSendMessage = () => {
        if (currentMessage.trim()) {
            const newMessage = {
                id: crypto.randomUUID(),
                sender: currentUser,
                senderName: 'Sarah S.',
                text: currentMessage,
                timestamp: 'Now',
                avatar: teacherprofile,
                isCurrentUser: true,
            };
            setMessages([...messages, newMessage]);
            setCurrentMessage('');
        }
    };

    useEffect(() => {
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [messages]);

    useEffect(() => {
        
        setMessages(selectedUser ? initialMessages : []);
    }, [selectedUser]);

    return (
        <div className="chat-window-area">
            <div className="chat-header">
                {selectedUserData ? (
                    <>
                        <img src={selectedUserData.avatar} alt={selectedUserData.name} className="avatar" />
                        <div className="user-info">
                            <div className="user-name">{selectedUserData.name}</div>
                            <div className="user-subject">{selectedUserData.subject}</div>
                        </div>
                    </>
                ) : (
                    <div>Select a user to start chatting</div>
                )}
            </div>
            <div className="chat-window">
                <div className="message-area">
                    {messages.map((message) => (
                        <ChatMessage key={message.id} message={message} />
                    ))}
                    <div ref={messagesEndRef} />
                </div>

                <div className="input-area">
                    <button className="input-button">
                        <FiPaperclip className="input-icon" />
                    </button>
                    <input
                        type="text"
                        placeholder="Type your message..."
                        value={currentMessage}
                        onChange={(e) => setCurrentMessage(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter' && !e.shiftKey) {
                                e.preventDefault();
                                handleSendMessage();
                            }
                        }}
                        className="message-input"
                    />
                    <button className="input-button">
                        <FiSmile className="input-icon" />
                    </button>

                    <button
                        onClick={handleSendMessage}
                        className="send-button"
                        disabled={!currentMessage.trim()}
                    >
                        <FiSend className="send-icon" />
                    </button>
                </div>
            </div>
        </div>
    );
};

const ChatMessage = ({ message }) => {
    const isCurrentUser = message.isCurrentUser;

    return (
        <div className={`message-container ${isCurrentUser ? 'justify-end' : 'justify-start'}`}>
            <div className={`message-bubble ${isCurrentUser ? 'sent' : 'received'}`}>
                {!isCurrentUser && (
                    <div className="sender-info">
                        <span className="sender-name">{message.senderName}</span>
                    </div>
                )}
                <p className="message-text">{message.text}</p>
                <span className="message-timestamp">{message.timestamp}</span>
            </div>
        </div>
    );
};

const initialMessages = [
    {
        id: '1',
        sender: 'user1',
        senderName: 'Nkululeko M.',
        text: 'Please help with fractions',
        timestamp: '10:30 AM',
        avatar: pic,
        isCurrentUser: false,
    },
    {
        id: '2',
        sender: 'user2',
        senderName: 'Sarah S.',
        text: 'What do you not understand?',
        timestamp: '10:35 AM',
        avatar: teacherprofile,
        isCurrentUser: true,
    },
    {
        id: '3',
        sender: 'user1',
        senderName: 'Nkululeko M.',
        text: 'I don\'t understand improper fractions',
        timestamp: '11:00 AM',
        avatar: pic,
        isCurrentUser: false,
    },
];

export default MessagesPage;

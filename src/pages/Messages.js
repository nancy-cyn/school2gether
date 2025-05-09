import '../components/Messages.css';

function MessagePage() {
    return (
        <div className="messages-page-container">
        <aside className="contact-list-sidebar">
          <div className="search-contacts">
            <input type="text" placeholder="Search contacts..." />
            <button>Search</button>
          </div>
          <div className="contact-item">
            <div className="avatar-placeholder"></div>
            <div className="contact-info">
              <span className="contact-name">Nkululeko Mdhuli</span>
              <span className="subject">Mathematics</span>
              <span className="message-preview">Please help with fractions...</span>
            </div>
            <span className="unread-count">2</span>
          </div>
          <div className="contact-item">
            <div className="avatar-placeholder"></div>
            <div className="contact-info">
              <span className="contact-name">Another Student</span>
              <span className="subject">Science</span>
              <span className="message-preview">Question about the experiment...</span>
            </div>
            <span className="unread-count">1</span>
          </div>
          {/* Add more contact items here */}
        </aside>
        <main className="conversation-area">
          <div className="conversation-header">
            <div className="avatar-placeholder large"></div>
            <div className="conversation-info">
              <span className="contact-name large">Nkululeko Mdhuli</span>
              <span className="subject large">Mathematics</span>
            </div>
          </div>
          <div className="message-display">
            <div className="message received">
              <div className="avatar-placeholder small"></div>
              <div className="message-content">Canva</div>
            </div>
            <div className="message sent">
              <div className="message-content">Canva</div>
              <div className="avatar-placeholder small user"></div>
            </div>
            <div className="message received">
              <div className="avatar-placeholder small"></div>
              <div className="message-content">Canva</div>
            </div>
            {/* More messages will go here */}
          </div>
          <div className="message-input-area">
            <div className="attachment-icon">📎</div>
            <textarea placeholder="Type your message..."></textarea>
            <button className="send-button">▶️</button>
          </div>
        </main>
      </div>
  
    );
  }
  
  export default MessagePage;
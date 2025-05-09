import React from 'react';
import './Homepage.css'; 

function HomePage() {
  return (
    <div className="home-page-container">
      <header className="home-header">
        <h1>Welcome to Our Tutoring Platform</h1>
        <p>Connect with students and provide valuable learning assistance.</p>
        <button className="get-started-button">Get Started</button>
      </header>

      <main className="home-main">
        <section className="features-section">
          <h2>Key Features</h2>
          <div className="feature-cards">
            <div className="feature-card">
              <h3>Find Students</h3>
              <p>Browse through student requests and find those that match your expertise.</p>
            </div>
            <div className="feature-card">
              <h3>Manage Schedule</h3>
              <p>Set your availability and manage your tutoring schedule effectively.</p>
            </div>
            <div className="feature-card">
              <h3>Communicate</h3>
              <p>Communicate with students through direct messaging and provide support.</p>
            </div>
          </div>
        </section>

        <section className="testimonials-section">
          <h2>What Tutors Say</h2>
          <div className="testimonial-cards">
            <div className="testimonial-card">
              <p>"This platform has made it easy for me to connect with students and make a difference."</p>
              <p className="author">- Sarah M.</p>
            </div>
            <div className="testimonial-card">
              <p>"The scheduling tools are great!  It's so easy to manage my tutoring sessions."</p>
              <p className="author">- David K.</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="home-footer">
        <p>&copy; 2024 Tutoring Platform. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default HomePage;

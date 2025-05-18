import React from 'react';
import './Homepage.css';
import logo from '../components/logo.png'; 

function HomePage() {
  return (
    <div className="home-page-container">
      <header className="home-header">
        {logo && <img src={logo} alt="School2Gether Logo" className="home-logo" />}
        <h1>Welcome to School2Gether</h1>
        <p className="tagline">
          Empowering learning communities by connecting teachers, parents, and students.
        </p>
        <button className="get-started-button">Get Started</button>
      </header>

      <main className="home-main">
        <section className="value-proposition-section">
          <h2>Our Platform's Value</h2>
          <div className="value-proposition-grid">
            <div className="value-proposition">
              <h3>For Teachers</h3>
              <ul>
                <li>Connect with motivated students</li>
                <li>Manage your schedule efficiently</li>
                <li>Access tools to enhance teaching</li>
              </ul>
            </div>
            <div className="value-proposition">
              <h3>For Parents</h3>
              <ul>
                <li>Find qualified and trusted teachers</li>
                <li>Track student progress and engagement</li>
                <li>Communicate directly with educators</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="features-section">
          <h2>Key Features</h2>
          <div className="feature-cards">
            <div className="feature-card">
              <h3>Find the Right Match</h3>
              <p>
                Teachers, parents, and students can find the connections they need
                for effective learning and support.
              </p>
            </div>
            <div className="feature-card">
              <h3>Seamless Communication</h3>
              <p>
                Our platform facilitates direct messaging for easy collaboration
                between all members of the learning community.
              </p>
            </div>
            <div className="feature-card">
              <h3>Personalized Learning</h3>
              <p>
                We empower tailored instruction and active support for every
                student's educational journey.
              </p>
            </div>
          </div>
        </section>

        <section className="testimonials-section">
          <h2>What Our Users Say</h2>
          <div className="testimonial-cards">
            <div className="testimonial-card">
              <p>
                "This platform has revolutionized how I connect with parents. It's so much easier to stay on the same page and work together for the student's success."
              </p>
              <p className="author">- Ms. Johnson, Teacher</p>
            </div>
            <div className="testimonial-card">
              <p>
                "I was struggling to find a tutor who understood my child's learning style. This platform made it simple, and the communication features are fantastic."
              </p>
              <p className="author">- Mr. Davis, Parent</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="home-footer">
        <p>&copy; 2025 School2Gether. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default HomePage;
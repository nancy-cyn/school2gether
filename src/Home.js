// src/Home.js
import React from 'react';
// import './Home.css'; // You might want to create a Home.css later if you move styles out of inline

function Home() {
  return (
    <div style={{
      backgroundColor: "#4A7C88",
      width: "100%",
      height: "1580px", // You might want to reconsider fixed height for responsiveness
      position: "relative",
      margin: "0 auto",
      overflow: "hidden"
    }}>
      {/* Logo - Added at top right */}
      <img
        src="/images/logo.png" // Using public folder path
        alt="School2Gether Logo"
        style={{
          width: "197.69px",
          height: "55px",
          position: "absolute",
          top: "32px",
          left: "959px",
          zIndex: 10 // Same high z-index as button
        }}
      />
      {/* Background Image */}
      <img
        src="/images/techwave.jpg"
        alt="TechWave"
        style={{
          width: "100%",
          height: "800px",
          position: "absolute",
          top: "-2px",
          left: "-1px",
          borderRadius: "40px",
          objectFit: "cover",
          zIndex: 1
        }}
      />
      {/* New Gradient Text Box */}
      <div style={{
        display: "flex",
        flexDirection: "column",
        position: "absolute",
        top: "175px",
        left: "782px",
        width: "544px",
        height: "fit-content", // Hug content
        gap: "28px",
        zIndex: 4
      }}>
        {/* Main Heading with Gradient */}
        <div style={{
          width: "544px",
          height: "168px",
          background: "linear-gradient(to right, #FFFFFF, #000000)",
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          color: "transparent",
          fontSize: "64px",
          fontWeight: "700",
          lineHeight: "84px"
        }}>
          Welcome to School2Gether
        </div>

        {/* Subtext */}
        <div style={{
          width: "544px",
          height: "62px",
          opacity: "0.7",
          color: "white",
          fontSize: "24px",
          lineHeight: "31px"
        }}>
          Empowering learning communities by connecting teachers, parents, and students.
        </div>
      </div>

      {/* "Get Started" Button - Updated Styling */}
      <button style={{
        width: "285.27px",
        height: "53.17px",
        position: "absolute",
        top: "485px",
        left: "866px",
        backgroundColor: "white", // Changed to white
        color: "#007BFF", // Changed to blue text
        border: "1px solid #007BFF", // Added subtle border
        borderRadius: "8px",
        fontSize: "18px",
        fontWeight: "400", // Changed to thin/normal weight (400)
        cursor: "pointer",
        zIndex: 10,
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)", // Lighter shadow
        transition: "all 0.3s ease",
        // Note: ':hover' is not valid for inline styles in React.
        // You'd typically use a state variable or a CSS file for hover effects.
        // For now, I'll comment it out, but keep it in mind for future refactoring.
        // ':hover': {
        //   backgroundColor: "#F5F9FF", // Light blue on hover
        //   transform: "translateY(-2px)"
        // }
      }}>
        Get Started
      </button>

      {/* "Key Features" Text */}
      <div style={{
        width: "464px",
        height: "66px",
        position: "absolute",
        top: "1067px",
        left: "50%",
        transform: "translateX(-50%)",
        fontWeight: "700",
        fontSize: "40px",
        lineHeight: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#05FFFF",
        textAlign: "center",
        zIndex: 3,
        textShadow: "0 2px 4px rgba(0,0,0,0.3)"
      }}>
        Key Features
      </div>

      {/* Horizontal Line */}
      <div style={{
        width: "100%",
        height: "0px",
        position: "absolute",
        top: "1131px",
        left: "0",
        border: "2px solid #145DA0",
        zIndex: 2
      }}></div>

      {/* Original Two Boxes (Top Section) - Use a parent container to center them */}
      <div style={{
        position: "absolute",
        top: "837px",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        gap: "40px",
        zIndex: 4
      }}>
        {/* Box 1 */}
        <div style={{
          width: "400px",
          height: "188px",
          borderRadius: "15px",
          backgroundColor: "white",
          padding: "20px",
          boxSizing: "border-box",
          boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
        }}>
          <h3 style={{ margin: "0 0 15px 0", fontSize: "20px", color: "#145DA0" }}>
            For Parents and Learners
          </h3>
          <ul style={{ margin: "0", paddingLeft: "20px", color: "#555", lineHeight: "1.5" }}>
            <li>Find qualified and trusted teachers</li>
            <li>Track student progress and engagement</li>
            <li>Communicate directly with educators</li>
          </ul>
        </div>

        {/* Box 2 */}
        <div style={{
          width: "400px",
          height: "188px",
          borderRadius: "15px",
          backgroundColor: "white",
          padding: "20px",
          boxSizing: "border-box",
          boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
        }}>
          <h3 style={{ margin: "0 0 15px 0", fontSize: "20px", color: "#145DA0" }}>
            For Educators
          </h3>
          <ul style={{ margin: "0", paddingLeft: "20px", color: "#555", lineHeight: "1.5" }}>
            <li>Connect with students in your area</li>
            <li>Manage your teaching schedule</li>
            <li>Receive secure payments</li>
          </ul>
        </div>
      </div>

      {/* New Three Boxes (Bottom Section) */}
      <div style={{
        position: "absolute",
        top: "1178px",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        gap: "30px",
        zIndex: 4,
        boxSizing: "border-box"
      }}>
        {/* Box 1 (Right) */}
        <div style={{
          width: "390px",
          height: "200px",
          borderRadius: "15px",
          backgroundColor: "white",
          boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
          padding: "20px",
          boxSizing: "border-box"
        }}>
          <h3 style={{
            margin: "0 0 15px 0",
            fontSize: "20px",
            color: "#145DA0",
            textAlign: "center"
          }}>
            Personalized Learning
          </h3>
          <div style={{
            color: "#555",
            textAlign: "center",
            lineHeight: "1.5",
            padding: "10px 0"
          }}>
            We empower tailored instruction and active support for every student's educational journey
          </div>
        </div>

        {/* Box 2 (Middle) */}
        <div style={{
          width: "390px",
          height: "200px",
          borderRadius: "15px",
          backgroundColor: "white",
          boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
          padding: "20px",
          boxSizing: "border-box"
        }}>
          <h3 style={{
            margin: "0 0 15px 0",
            fontSize: "20px",
            color: "#145DA0",
            textAlign: "center"
          }}>
            Seamless Communication
          </h3>
          <div style={{
            color: "#555",
            textAlign: "center",
            lineHeight: "1.5",
            padding: "10px 0"
          }}>
            Our platform facilitates direct messaging for easy collaboration between all members of the learning community.
          </div>
        </div>

        {/* Box 3 (Left) */}
        <div style={{
          width: "390px",
          height: "200px",
          borderRadius: "15px",
          backgroundColor: "white",
          boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
          padding: "20px",
          boxSizing: "border-box"
        }}>
          <h3 style={{
            margin: "0 0 15px 0",
            fontSize: "20px",
            color: "#145DA0",
            textAlign: "center"
          }}>
            Find the Right Match
          </h3>
          <div style={{
            color: "#555",
            textAlign: "center",
            lineHeight: "1.5",
            padding: "10px 0"
          }}>
            Teachers, parents, and students can find the connections they need for effective learning and support.
          </div>
        </div>
      </div>

      {/* Footer - Added exactly as specified */}
      <div style={{
        width: "100%",
        height: "93px",
        position: "absolute",
        top: "1487px",
        left: "0",
        backgroundColor: "#333333",
        zIndex: 5,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        fontSize: "16px"
      }}>
        © {new Date().getFullYear()} SchoolTogether. All rights reserved.
      </div>

    </div>
  );
}

export default Home;
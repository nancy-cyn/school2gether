import React, { useState } from "react";
import "./loginpage.css";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Username:", username);
    console.log("Password:", password);
    console.log("Remember Me:", rememberMe);
  };

  return (
    <div className="login-container">
      <form className="login-box" onSubmit={handleSubmit}>
        <h2>LOGIN</h2>

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        <div className="password-wrapper">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <span
            className="password-toggle"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? (
              // Eye icon (password visible)
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#6a0dad" viewBox="0 0 24 24">
                <path d="M12 5c-7.633 0-12 7-12 7s4.367 7 12 7 12-7 12-7-4.367-7-12-7zm0 12c-2.761 0-5-2.239-5-5s2.239-5 5-5 5 2.239 5 5-2.239 5-5 5zm0-8c-1.654 0-3 1.346-3 3s1.346 3 3 3 3-1.346 3-3-1.346-3-3-3z"/>
              </svg>
            ) : (
              // Eye with slash icon (password hidden)
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#6a0dad" viewBox="0 0 24 24">
                <path d="M12 5c-7.633 0-12 7-12 7s2.421 3.853 6.913 5.759l-2.659 2.659 1.414 1.414 17.899-17.899-1.414-1.414-2.693 2.693c-1.489-.606-3.139-.912-4.854-.912zm0 2c1.224 0 2.373.264 3.415.735l-1.637 1.637c-.559-.234-1.171-.372-1.778-.372-2.485 0-4.5 2.015-4.5 4.5 0 .607.138 1.219.372 1.778l-1.637 1.637c-.471-1.042-.735-2.191-.735-3.415 0-3.309 2.691-6 6-6zm0 4c.552 0 1 .448 1 1 0 .201-.06.387-.158.544l-1.386 1.386c-.157.098-.343.158-.544.158-.552 0-1-.448-1-1 0-.201.06-.387.158-.544l1.386-1.386c.157-.098.343-.158.544-.158z"/>
              </svg>
            )}
          </span>
        </div>

        <div className="login-options">
          <label>
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            />
            Remember me
          </label>
          <a href="#forgot">Forgot password?</a>
        </div>

        <button type="submit">Login</button>

        <p className="register-text">
          Don’t have an account? <a href="#register">Register</a>
        </p>
      </form>
    </div>
  );
}

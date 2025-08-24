import React, { useEffect } from "react";
import "./App.css";

export default function App() {
  useEffect(() => {
    // Inject Chatling script
    const script = document.createElement("script");
    script.src = "https://chatling.ai/js/embed.js";
    script.async = true;
    script.id = "chtl-script";
    script.setAttribute("data-id", "8638196866");
    document.body.appendChild(script);

    // Config
    window.chtlConfig = { chatbotId: "8638196866" };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="App">
      <h1>My Website</h1>
      <p>Welcome to my site. You can chat with our assistant below!</p>
      {/* Floating Chat Box will auto-appear */}
    </div>
  );
}

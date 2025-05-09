import React from 'react';
import Navbar from './components/Navbar';
import RequestPage from './pages/RequestPage.js';
import MessagePage from './pages/Messages.js';
import HomePage from './pages/Homepage.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router> {/* Wrap your content with Router */}
      <div className="App">
        <Navbar />
        <div className="content-area">
              <Routes> {/* Changed to Routes */}
                <Route path="/" element={<HomePage />} /> {/* Route syntax changed */}
                <Route path="/requests" element={<RequestPage />} />
                <Route path="/messages" element={<MessagePage />} />
                {/* Add other routes */}
              </Routes>
            </div>
      </div>
    </Router>
  );
}

export default App;
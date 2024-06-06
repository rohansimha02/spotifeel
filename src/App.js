import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './home';
import Search from './search';
import Profile from './profile';
import './index.css';

/**
 * Main App component that sets up routing for the SpotiFeel application.
 * Handles navigation between Home (recommendations), Search (by emotion), and Profile pages.
 * 
 * @returns {JSX.Element} The main application component with router configuration
 */
function App() {
    return (
        <Router>
            <Routes>
                {/* Main recommendation page */}
                <Route path="/" element={<Home />} />
                {/* Emotion-based search page */}
                <Route path="/search" element={<Search />} />
                {/* User authentication and profile page */}
                <Route path="/profile" element={<Profile />} />
            </Routes>
        </Router>
    );
}

export default App;
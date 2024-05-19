// src/components/Home.js
import React, { useState } from 'react';
import '../src/index.css';
import logo from '../src/img/logo.png';

const Header = () => (
    <header>
        <div className="headerCon">
            <img src={logo} alt="Logo for Spotifeel" />
            <h1>SpotiFeel</h1>
        </div>
    </header>
);

const Dashboard = () => (
    <div className="dash">
        <ul>
            <a href="/">
                <li className="home" aria-label="Home page">
                    <span className="material-symbols-outlined">home</span>
                    <span className="dashText">HOME</span>
                </li>
            </a>
            <a href="/search">
                <li className="search" aria-label="Search Page">
                    <span className="material-symbols-outlined">search</span>
                    <span className="dashText">SEARCH</span>
                </li>
            </a>
            <a href="/profile">
                <li className="profile" aria-label="User profile">
                    <span className="material-symbols-outlined">person</span>
                    <span className="dashText">PROFILE</span>
                </li>
            </a>
        </ul>
    </div>
);

const RecommendationSection = () => {
    const [emotion, setEmotion] = useState('Joyful');
    const [songs, setSongs] = useState([
        { name: 'Happy Now', artist: 'Zedd, Elley Duhé' },
        { name: 'Joy', artist: 'Bastille' },
        { name: 'Walking on Sunshine', artist: 'Katrina and the Waves' },
    ]);

    return (
        <div className="recommend">
            <div className="recommendation-section">
                <div className="section-header">
                    <h3 className="recommendation-title">
                        Find Songs by Emotion
                    </h3>
                    <div className="sortSelection">
                        <label htmlFor="sortSelect">Sort by:</label>
                        <select id="sortSelect" className="sortDropdown">
                            <option value="song">Song Name</option>
                            <option value="artist">Artist Name</option>
                        </select>
                    </div>
                </div>
                <p className="recommendation-description">
                    Enter one or more songs to discover new music matching the
                    emotion of your selection.
                </p>
                <div className="song-input-container">
                    <input
                        type="text"
                        id="songInput"
                        className="song-input"
                        placeholder="Type song names separated by commas"
                    />
                    <button type="button" className="recommend-button">
                        Get Recommendations
                    </button>
                </div>
                <div className="recommendation-results">
                    <p className="emotion-detected">
                        Emotion Detected:{' '}
                        <span className="emotion">{emotion}</span>
                    </p>
                    <div className="recommended-songs">
                        <h4>Recommended Songs:</h4>
                        <ul>
                            {songs.map((song, index) => (
                                <li key={index}>
                                    "{song.name}" by {song.artist}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Footer = () => (
    <footer>
        <p>&copy; INFO340</p>
        <p className="contact">
            <a href="mailto:rohans24@uw.edu">rohans24@uw.edu</a>
            <a href="mailto:bingsen@uw.edu">bingsen@uw.edu</a>
            <a href="mailto:amanch@uw.edu">amanch@uw.edu</a>
        </p>
    </footer>
);

const Home = () => (
    <div className="Home">
        <Header />
        <main>
            <div className="mainContainer">
                <Dashboard />
                <RecommendationSection />
            </div>
        </main>
        <Footer />
    </div>
);

export default Home;



import React, { useState } from 'react';
import './index.css';

const Dashboard = ({ navigate }) => (
    <div className="dash">
        <ul>
            <li className="home" aria-label="Home page" onClick={() => navigate('home')}>
                <span className="material-symbols-outlined">home</span>
                <span className="dashText">HOME</span>
            </li>
            <li className="search" aria-label="Search Page" onClick={() => navigate('search')}>
                <span className="material-symbols-outlined">search</span>
                <span className="dashText">SEARCH</span>
            </li>
            <li className="profile" aria-label="User profile" onClick={() => navigate('profile')}>
                <span className="material-symbols-outlined">person</span>
                <span className="dashText">PROFILE</span>
            </li>
        </ul>
    </div>
);

const Search = ({ navigate, songs }) => {
    const [selectedSongs, setSelectedSongs] = useState(["", "", ""]);
    const [recommendation, setRecommendation] = useState(null);

    const handleSongChange = (index, value) => {
        const newSelectedSongs = [...selectedSongs];
        newSelectedSongs[index] = value;
        setSelectedSongs(newSelectedSongs);
    };

    const handleGetRecommendation = async () => {
        try {
            const response = await fetch(`http://localhost:5000/api/recommend`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ songs: selectedSongs }),
            });
            const data = await response.json();
            setRecommendation(data.emotion);
        } catch (error) {
            console.error("Failed to get recommendation:", error);
        }
    };

    return (
        <div className="body">
            <header>
                <div className="headerCon">
                    <img src="../img/logo.png" alt="Logo for Spotifeel" />
                    <h1>SpotiFeel</h1>
                </div>
            </header>
            <main>
                <div className="mainContainer">
                    <Dashboard navigate={navigate} />
                    <div className="searchContainer">
                        <div className="songInputs">
                            {selectedSongs.map((song, index) => (
                                <div key={index} className="songInputContainer">
                                    <label htmlFor={`song${index + 1}`}>Song {index + 1}</label>
                                    <input
                                        type="text"
                                        id={`song${index + 1}`}
                                        value={song}
                                        placeholder="Search for song..."
                                        onChange={(e) => handleSongChange(index, e.target.value)}
                                    />
                                </div>
                            ))}
                        </div>
                        <button className="recommend-button" onClick={handleGetRecommendation}>
                            Generate Emotion based on Songs
                        </button>
                        <div className="recommendation-results">
                            {recommendation && (
                                <p className="emotion-detected">
                                    The mutual emotion for the selected songs is: <span className="emotion">{recommendation}</span>
                                </p>
                            )}
                        </div>
                    </div>
                </div>
            </main>
            <footer className="searchFooter">
                <p>&copy; INFO340</p>
                <p className="contact">
                    <a href="mailto:rohans24@uw.edu">rohans24@uw.edu</a>
                    <a href="mailto:bingsen@uw.edu">bingsen@uw.edu</a>
                    <a href="mailto:amanch@uw.edu">amanch@uw.edu</a>
                </p>
            </footer>
        </div>
    );
};

export default Search;








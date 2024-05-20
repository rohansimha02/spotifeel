import React, { useState } from 'react';
import '../src/index.css';

const Home = ({ navigate }) => (
    <div className="body">
        <header>
        <div className="headerCon">
                <img src="../img/logo.png" alt="Logo for Spotifeel" />
                <h1>SpotiFeel</h1>
            </div>
        </header>
        <main>
            <div className="mainContainer">
                <div className="dash">
                    <ul>
                        <li
                            className="home"
                            aria-label="Home page"
                            onClick={() => navigate('home')}
                        >
                            <span className="material-symbols-outlined">
                                home
                            </span>
                            <span className="dashText">HOME</span>
                        </li>
                        <li
                            className="search"
                            aria-label="Search Page"
                            onClick={() => navigate('search')}
                        >
                            <span className="material-symbols-outlined">
                                search
                            </span>
                            <span className="dashText">SEARCH</span>
                        </li>
                        <li
                            className="profile"
                            aria-label="User profile"
                            onClick={() => navigate('profile')}
                        >
                            <span className="material-symbols-outlined">
                                person
                            </span>
                            <span className="dashText">PROFILE</span>
                        </li>
                    </ul>
                </div>
                <div className="recommend">
                    <div className="recommendation-section">
                        <div className="section-header">
                            <h3 className="recommendation-title">
                                Find Songs by Emotion
                            </h3>
                            <div className="sortSelection">
                                <label htmlFor="sortSelect">Sort by:</label>
                                <select
                                    id="sortSelect"
                                    className="sortDropdown"
                                >
                                    <option value="song">Song Name</option>
                                    <option value="artist">Artist Name</option>
                                </select>
                            </div>
                        </div>
                        <p className="recommendation-description">
                            Enter one or more songs to discover new music
                            matching the emotion of your selection.
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
                                <span className="emotion">Joyful</span>
                            </p>
                            <div className="recommended-songs">
                                <h4>Recommended Songs:</h4>
                                <ul>
                                    <li>"Happy Now" by Zedd, Elley Duhé</li>
                                    <li>"Joy" by Bastille</li>
                                    <li>
                                        "Walking on Sunshine" by Katrina and the
                                        Waves
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        <footer>
            <p>&copy; INFO340</p>
            <p className="contact">
                <a href="mailto:rohans24@uw.edu">rohans24@uw.edu</a>
                <a href="mailto:bingsen@uw.edu">bingsen@uw.edu</a>
                <a href="mailto:amanch@uw.edu">amanch@uw.edu</a>
            </p>
        </footer>
    </div>
);

export default Home;

import React, { useState } from 'react';
import '../src/index.css';

const Search = ({ navigate }) => (
    <div className="Search">
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
                <div className="searchContainer">
                    <div className="searchHead">
                        <h3>Search</h3>
                        <div className="spacer"></div>
                        <div className="searchButton">
                            <input
                                type="text"
                                className="searchInput"
                                placeholder="Choose Your Emotion"
                            />
                        </div>
                        <div className="sortSelection">
                            <label htmlFor="sortSelect">Sort by:</label>
                            <select id="sortSelect" className="sortDropdown">
                                <option value="song">Song Name</option>
                                <option value="artist">Artist Name</option>
                            </select>
                        </div>
                    </div>
                    <div className="searchBody">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="row">Song</th>
                                    <th scope="row">Artist</th>
                                    <th scope="row">Emotion</th>
                                    <th scope="row">Cover</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td scope="row">Bandaid</td>
                                    <td>Keshi</td>
                                    <td>Sad</td>
                                    <td>
                                        <img
                                            src="../img/bandaid.png"
                                            alt="Bandaid cover"
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td scope="row">Evermore</td>
                                    <td>Taylor Swift</td>
                                    <td>Sad</td>
                                    <td>
                                        <img
                                            src="../img/evermore.webp"
                                            alt="Evermore cover"
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td scope="row">Gabriel</td>
                                    <td>Keshi</td>
                                    <td>Slow, Sad</td>
                                    <td>
                                        <img
                                            src="../img/gabriel.jpg"
                                            alt="Gabriel cover"
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td scope="row">Haru Dorobo</td>
                                    <td>Yorushika</td>
                                    <td>Lively, Sad</td>
                                    <td>
                                        <img
                                            src="../img/haru.jpg"
                                            alt="Harudorobo cover"
                                        />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
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

export default Search;

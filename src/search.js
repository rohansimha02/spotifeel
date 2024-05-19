import React, { useState } from 'react';
import '../src/index.css';
import logo from '../src/img/logo.png';
import bandaidCover from '../src/img/bandaid.png';
import evermoreCover from '../src/img/evermore.webp';
import gabrielCover from '../src/img//gabriel.jpg';
import haruCover from '../src/img/haru.jpg';

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

const SearchBody = () => {
    const [songs, setSongs] = useState([
        {
            name: 'Bandaid',
            artist: 'Keshi',
            emotion: 'Sad',
            cover: bandaidCover,
        },
        {
            name: 'Evermore',
            artist: 'Taylor Swift',
            emotion: 'Sad',
            cover: evermoreCover,
        },
        {
            name: 'Gabriel',
            artist: 'Keshi',
            emotion: 'Slow, Sad',
            cover: gabrielCover,
        },
        {
            name: 'Haru Dorobo',
            artist: 'Yorushika',
            emotion: 'Lively, Sad',
            cover: haruCover,
        },
    ]);

    return (
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
                    {songs.map((song, index) => (
                        <tr key={index}>
                            <td scope="row">{song.name}</td>
                            <td>{song.artist}</td>
                            <td>{song.emotion}</td>
                            <td>
                                <img
                                    src={song.cover}
                                    alt={`${song.name} cover`}
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

const Search = () => (
    <div className="Search">
        <Header />
        <main>
            <div className="mainContainer">
                <Dashboard />
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
                    <SearchBody />
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

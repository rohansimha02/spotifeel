import React, { useState } from 'react';
import '../src/index.css';

const Dashboard = ({ navigate }) => (
    <div className="dash">
        <ul>
            <li
                className="home"
                aria-label="Home page"
                onClick={() => navigate('home')}
            >
                <span className="material-symbols-outlined">home</span>
                <span className="dashText">HOME</span>
            </li>
            <li
                className="search"
                aria-label="Search Page"
                onClick={() => navigate('search')}
            >
                <span className="material-symbols-outlined">search</span>
                <span className="dashText">SEARCH</span>
            </li>
            <li
                className="profile"
                aria-label="User profile"
                onClick={() => navigate('profile')}
            >
                <span className="material-symbols-outlined">person</span>
                <span className="dashText">PROFILE</span>
            </li>
        </ul>
    </div>
);

const Search = ({ navigate }) => {
    const [songs, setSongs] = useState([
        {
            song: 'Bandaid',
            artist: 'Keshi',
            emotion: 'Sad',
            popularity: 'The Goat',
        },
        {
            song: 'Evermore',
            artist: 'Taylor Swift',
            emotion: 'Sad',
            popularity: 'Queen Taylor',
        },
        {
            song: 'Gabriel',
            artist: 'Keshi',
            emotion: 'Slow, Sad',
            popularity: 'Top Tier',
        },
        {
            song: 'Haru Dorobo',
            artist: 'Yorushika',
            emotion: 'Lively, Sad',
            popularity: 'So Good',
        },
    ]);

    const [filteredSongs, setFilteredSongs] = useState([]);

    const handleSearch = (e) => {
        const userInput = e.target.value.toLowerCase();
        const filteredSongs = songs.filter(
            (song) => song.emotion.toLowerCase() === userInput
        );
        setFilteredSongs(filteredSongs);
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
                        <div className="searchHead">
                            <h3>Search</h3>
                            <div className="spacer"></div>
                            <div className="searchButton">
                                <input
                                    type="text"
                                    className="searchInput"
                                    placeholder="Choose Your Emotion"
                                    onChange={handleSearch}
                                />
                            </div>
                        </div>
                        <div className="searchBody">
                            {filteredSongs.length === 0 ? (
                                <p>Type in your emotion to search for songs.</p>
                            ) : (
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th scope="row">Song</th>
                                            <th scope="row">Artist</th>
                                            <th scope="row">Emotion</th>
                                            <th scope="row">Popularity</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {filteredSongs.map((song, index) => (
                                            <tr key={index}>
                                                <td>{song.song}</td>
                                                <td>{song.artist}</td>
                                                <td>{song.emotion}</td>
                                                <td>{song.popularity}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
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

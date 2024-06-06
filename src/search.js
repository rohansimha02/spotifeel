import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { songs } from './songs';
import './index.css';

/**
 * Search component that allows users to search for songs by emotion.
 * Provides filtering and sorting capabilities for the music database.
 * 
 * @returns {JSX.Element} Search page with emotion-based filtering and sorting
 */
const Search = () => {
    const navigate = useNavigate();
    const [filteredSongs, setFilteredSongs] = useState([]);
    const [sortCriteria, setSortCriteria] = useState('song');

    /**
     * Filters songs based on user input emotion.
     * Performs case-insensitive matching against emotion classifications.
     * 
     * @param {Event} e - Input change event
     */
    const handleSearch = (e) => {
        const userInput = e.target.value.toLowerCase();
        const filtered = songs.filter(
            (song) => song.emotion && song.emotion.toLowerCase() === userInput
        );
        setFilteredSongs(filtered);
    };

    /**
     * Updates the sorting criteria for the results table.
     * 
     * @param {Event} e - Select change event
     */
    const handleSortChange = (e) => {
        setSortCriteria(e.target.value);
    };

    /**
     * Sorts the filtered songs based on the selected criteria.
     * Supports sorting by song name or artist name alphabetically.
     */
    const sortedSongs = filteredSongs.sort((a, b) => {
        if (sortCriteria === 'song') {
            return a.song.localeCompare(b.song);
        } else if (sortCriteria === 'artist') {
            return a.artist.localeCompare(b.artist);
        }
        return 0;
    });

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
                    {/* Navigation sidebar */}
                    <div className="dash">
                        <ul>
                            <li className="home" aria-label="Home page" onClick={() => navigate('/')}>
                                <span className="material-symbols-outlined">home</span>
                                <span className="dashText">HOME</span>
                            </li>
                            <li className="search" aria-label="Search Page" onClick={() => navigate('/search')}>
                                <span className="material-symbols-outlined">search</span>
                                <span className="dashText">SEARCH</span>
                            </li>
                            <li className="profile" aria-label="User profile" onClick={() => navigate('/profile')}>
                                <span className="material-symbols-outlined">person</span>
                                <span className="dashText">PROFILE</span>
                            </li>
                        </ul>
                    </div>
                    
                    {/* Search interface */}
                    <div className="searchContainer">
                        <div className="searchHead">
                            <h2>Search</h2>
                            <div className="spacer"></div>
                            {/* Emotion search input */}
                            <div className="searchButton">
                                <input
                                    type="text"
                                    className="searchInput"
                                    placeholder="Choose Your Emotion"
                                    onChange={handleSearch}
                                />
                            </div>
                            
                            {/* Sort options dropdown */}
                            <div className="sortSelection">
                                <label htmlFor="sortSelect">Sort by:</label>
                                <select
                                    id="sortSelect"
                                    className="sortDropdown"
                                    onChange={handleSortChange}
                                >
                                    <option value="song">Song Name</option>
                                    <option value="artist">Artist Name</option>
                                </select>
                            </div>
                        </div>

                        {/* Results display */}
                        <div className="searchBody">
                            {sortedSongs.length === 0 ? (
                                <p className='searchTextType'>Type in your emotion to search for songs.</p>
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
                                        {sortedSongs.map((song, index) => (
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
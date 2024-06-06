import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { songs } from './songs';
import './index.css';

/**
 * Home component that provides emotion-based music recommendations.
 * Users can input up to 5 songs to receive recommendations based on the most common emotion.
 * 
 * @returns {JSX.Element} Home page with song input and recommendation functionality
 */
const Home = () => {
  const navigate = useNavigate();
  
  // State for managing user input and recommendations
  const [inputSongs, setInputSongs] = useState([]);
  const [songInput, setSongInput] = useState('');
  const [recommendations, setRecommendations] = useState([]);
  const [mostCommonEmotion, setMostCommonEmotion] = useState('');

  /**
   * Adds a new song to the input list (maximum 5 songs allowed)
   */
  const handleAddSong = () => {
    if (songInput && inputSongs.length < 5) {
      setInputSongs([...inputSongs, songInput]);
      setSongInput('');
    }
  };

  /**
   * Analyzes input songs for emotions and generates recommendations.
   * Finds the most common emotion and returns up to 10 matching songs.
   */
  const handleGetRecommendations = () => {
    // Map each input song to its emotion classification
    const emotions = inputSongs.map(songName => {
      const song = songs.find(s => s.song.toLowerCase() === songName.toLowerCase());
      return song ? song.emotion : 'Undefined';
    });
    
    // Count occurrences of each emotion
    const emotionCount = emotions.reduce((acc, emotion) => {
      acc[emotion] = (acc[emotion] || 0) + 1;
      return acc;
    }, {});
    
    // Find the most frequently occurring emotion
    const commonEmotion = Object.keys(emotionCount).reduce((a, b) => 
      emotionCount[a] > emotionCount[b] ? a : b, 'Undefined'
    );
    
    setMostCommonEmotion(commonEmotion);
    // Filter songs by the most common emotion and limit to 10 results
    setRecommendations(songs.filter(song => song.emotion === commonEmotion).slice(0, 10));
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
          
          {/* Main recommendation interface */}
          <div className="recommend">
            <div className="recommendation-section">
              <div className="section-header">
                <h2 className="recommendation-title">Find Songs by Emotion</h2>
              </div>
              <p className="recommendation-description">
                Enter 5 songs to discover new music matching the most common emotion of your selection.
              </p>
              
              {/* Song input form */}
              <div className="song-input-container">
                <input
                  type="text"
                  id="songInput"
                  className="song-input"
                  value={songInput}
                  onChange={(e) => setSongInput(e.target.value)}
                  placeholder="Type a song name"
                />
                <button type="button" className="recommend-button" onClick={handleAddSong}>
                  Add Song
                </button>
              </div>
              
              {/* Display list of input songs */}
              <div className="input-songs-list">
                {inputSongs.map((song, index) => (
                  <p key={index}>{song}</p>
                ))}
              </div>
              <button type="button" className="recommend-button" onClick={handleGetRecommendations}>
                Get Recommendations
              </button>
              {mostCommonEmotion && (
                <div className="recommendation-results">
                  <p className="emotion-detected">Most Common Emotion: <span className="emotion">{mostCommonEmotion}</span></p>
                  <div className="recommended-songs">
                    <h3>Recommended Songs:</h3>
                    <ul>
                      {recommendations.map((rec, index) => (
                        <li key={index}>"{rec.song}" by {rec.artist}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
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
};

export default Home;
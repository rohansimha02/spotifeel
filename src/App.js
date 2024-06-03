import React, { useState, useEffect } from 'react';
import Home from './Home';
import Search from './Search';
import Profile from './Profile';
import { getSongs, getRecommendations } from './api';
import './index.css';

function App() {
    const [currentPage, setCurrentPage] = useState('home');
    const [songs, setSongs] = useState([]);
    const [recommendations, setRecommendations] = useState([]);

    useEffect(() => {
        const fetchSongs = async () => {
            const songsData = await getSongs();
            setSongs(songsData);
        };
        fetchSongs();
    }, []);

    const fetchRecommendations = async (emotion) => {
        const recommendationsData = await getRecommendations(emotion);
        setRecommendations(recommendationsData);
    };

    const renderPage = () => {
        switch (currentPage) {
            case 'home':
                return <Home navigate={setCurrentPage} fetchRecommendations={fetchRecommendations} recommendations={recommendations} />;
            case 'search':
                return <Search navigate={setCurrentPage} songs={songs} />;
            case 'profile':
                return <Profile navigate={setCurrentPage} />;
            default:
                return <Home navigate={setCurrentPage} />;
        }
    };

    return <div className="App">{renderPage()}</div>;
}

export default App;

import React, { useState, useEffect } from 'react';
import Home from './home.js';
import Search from './search.js';
import Profile from './profile.js';
import { getSongs, getRecommendations } from './Spotify.js';
import './index.css';

function App() {
    const [currentPage, setCurrentPage] = useState('home');
    const [songs, setSongs] = useState([]);
    const [recommendations, setRecommendations] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchSongs = async () => {
            setLoading(true);
            const songsData = await getSongs();
            setSongs(songsData || []);
            setLoading(false);
        };
        fetchSongs();
    }, []);

    const fetchRecommendations = async (emotion) => {
        setLoading(true);
        const recommendationsData = await getRecommendations(emotion);
        setRecommendations(recommendationsData || []);
        setLoading(false);
    };

    const renderPage = () => {
        switch (currentPage) {
            case 'home':
                return (
                    <Home
                        navigate={setCurrentPage}
                        fetchRecommendations={fetchRecommendations}
                        recommendations={recommendations}
                        loading={loading}
                    />
                );
            case 'search':
                return <Search navigate={setCurrentPage} songs={songs} loading={loading} />;
            case 'profile':
                return <Profile navigate={setCurrentPage} />;
            default:
                return <Home navigate={setCurrentPage} />;
        }
    };

    return <div className="App">{renderPage()}</div>;
}

export default App;

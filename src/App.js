import React from 'react';
import Home from '../src/home';
import Search from '../src/search';
import Profile from '../src/profile';
import { useState } from 'react';
import '../src/index.css';

function App() {
    const [currentPage, setCurrentPage] = useState('home');

    const renderPage = () => {
        switch (currentPage) {
            case 'home':
                return <Home navigate={setCurrentPage} />;
            case 'search':
                return <Search navigate={setCurrentPage} />;
            case 'profile':
                return <Profile navigate={setCurrentPage} />;
            default:
                return <Home navigate={setCurrentPage} />;
        }
    };

    return <div className="App">{renderPage()}</div>;
}

export default App;

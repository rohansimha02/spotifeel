import React from 'react';
import Home from '../src/home';
import Search from '../src/search';
import Profile from '../src/profile';
import '../src/index.css';

function App() {
    return (
        <div className="App">
            <Home />
            <Search />
            <Profile />
        </div>
    );
}

export default App;

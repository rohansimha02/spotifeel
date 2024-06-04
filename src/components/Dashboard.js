import React from 'react';
import '../index.css';

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

export default Dashboard;

import React from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css';

const Dashboard = () => {
  const navigate = useNavigate();

  return (
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
  );
};

export default Dashboard;
import React from 'react';
import '../App.css'; 
import logo from '../public/img/logo.png';

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

const Profile = () => (
  <div className="Profile">
    <Header />
    <main>
      <div className="mainContainer">
        <Dashboard />
        <div className="userProfile">
          <h2>Profile</h2>
          <div className="login">
            <form action="/submit" method="post">
              <label htmlFor="username">User ID:</label>
              <input type="text" name="name" /><br /><br />
              <label htmlFor="password">Password:</label>
              <input type="password" name="password" /><br /><br />
              <input type="submit" value="Submit" />
            </form>
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

export default Profile;

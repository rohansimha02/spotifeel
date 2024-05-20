import React from 'react';
import '../src/index.css';

const Profile = ({ navigate }) => (
    <div className="body">
        <header>
            <div className="headerCon">
                <img src="../img/logo.png" alt="Logo for Spotifeel" />
                <h1>SpotiFeel</h1>
            </div>
        </header>
        <main>
            <div className="mainContainer">
                <div className="dash">
                    <ul>
                        <li
                            className="home"
                            aria-label="Home page"
                            onClick={() => navigate('home')}
                        >
                            <span className="material-symbols-outlined">
                                home
                            </span>
                            <span className="dashText">HOME</span>
                        </li>
                        <li
                            className="search"
                            aria-label="Search Page"
                            onClick={() => navigate('search')}
                        >
                            <span className="material-symbols-outlined">
                                search
                            </span>
                            <span className="dashText">SEARCH</span>
                        </li>
                        <li
                            className="profile"
                            aria-label="User profile"
                            onClick={() => navigate('profile')}
                        >
                            <span className="material-symbols-outlined">
                                person
                            </span>
                            <span className="dashText">PROFILE</span>
                        </li>
                    </ul>
                </div>
                <div className="userProfile">
                    <h2>Profile</h2>
                    <div className="login">
                        <form action="/submit" method="post">
                            <label htmlFor="username">User ID:</label>
                            <input type="text" name="name" />
                            <br />
                            <br />
                            <label htmlFor="password">Password:</label>
                            <input type="password" name="password" />
                            <br />
                            <br />
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

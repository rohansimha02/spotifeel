import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, database, createUserWithEmailAndPassword, signInWithEmailAndPassword } from './firebase';
import { ref, set, onValue } from 'firebase/database';
import { onAuthStateChanged } from 'firebase/auth';
import './index.css';

/**
 * Profile component that handles user authentication and profile management.
 * Provides sign-up and login functionality using Firebase Authentication.
 * 
 * @returns {JSX.Element} Profile page with authentication forms
 */
const Profile = () => {
  // Authentication state
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [feedback, setFeedback] = useState('');
  const [loading, setLoading] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const navigate = useNavigate();

  /**
   * Sets up authentication state listener on component mount.
   * Monitors user authentication status and loads user data from Firebase.
   */
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, load their data from database
        const userRef = ref(database, 'users/' + user.uid);
        onValue(userRef, (snapshot) => {
          const data = snapshot.val();
          if (data) {
            setUserId(user.uid);
            setEmail(data.email);
          }
        });
      } else {
        // User is signed out
        setUserId('');
      }
    });
  }, []);

  /**
   * Handles user authentication (both sign-up and login).
   * Creates new accounts or authenticates existing users with Firebase.
   * 
   * @param {Event} e - Form submission event
   */
  const handleAuth = (e) => {
    e.preventDefault();
    setLoading(true);
    
    if (isSignUp) {
      // Create new user account
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          // Store user data in Firebase Realtime Database
          const userRef = ref(database, 'users/' + user.uid);
          set(userRef, { email: email }).then(() => {
            setFeedback('Sign-up successful!');
            setLoading(false);
          });
        })
        .catch((error) => {
          setFeedback('Sign-up failed: ' + error.message);
          setLoading(false);
        });
    } else {
      // Sign in existing user
      signInWithEmailAndPassword(auth, email, password)
        .then(() => {
          setFeedback('Login successful!');
          setLoading(false);
          navigate('/profile');
        })
        .catch((error) => {
          setFeedback('Login failed: ' + error.message);
          setLoading(false);
        });
    }
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
          
          {/* Authentication form */}
          <div className="userProfile">
            <h2>{isSignUp ? 'Sign Up' : 'Login'}</h2>
            <div className="login">
              <form onSubmit={handleAuth}>
                <label htmlFor="email">Email:</label>
                <input 
                  type="email" 
                  name="email" 
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)} 
                />
                <br />
                <label htmlFor="password">Password:</label>
                <input 
                  type="password" 
                  name="password" 
                  value={password} 
                  onChange={(e) => setPassword(e.target.value)} 
                />
                <br />
                <input 
                  type="submit" 
                  value={isSignUp ? 'Sign Up' : 'Login'} 
                  disabled={loading} 
                />
              </form>
              
              {/* Loading and feedback messages */}
              {loading && <p>Loading...</p>}
              {feedback && <p>{feedback}</p>}
              
              {/* Toggle between sign-up and login modes */}
              <button onClick={() => setIsSignUp(!isSignUp)}>
                {isSignUp ? 'Already have an account? Login' : "Don't have an account? Sign Up"}
              </button>
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

export default Profile;

/**
 * Firebase configuration and initialization for SpotiFeel application.
 * Provides authentication and real-time database functionality.
 */
import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
} from 'firebase/auth';

// Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyDSVJijUnzEn_K5FSPm1p6cpJ5T6fv70pY",
    authDomain: "spotifeel-57b89.firebaseapp.com",
    projectId: "spotifeel-57b89",
    storageBucket: "spotifeel-57b89.appspot.com",
    messagingSenderId: "1081144319509",
    appId: "1:1081144319509:web:cbc3da932c17ae36d5381c"
};
  
// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Initialize and export Firebase services
export const auth = getAuth(app);
export const database = getDatabase(app);

// Export authentication functions for use in components
export { createUserWithEmailAndPassword, signInWithEmailAndPassword };

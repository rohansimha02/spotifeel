import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
} from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDSVJijUnzEn_K5FSPm1p6cpJ5T6fv70pY",
    authDomain: "spotifeel-57b89.firebaseapp.com",
    projectId: "spotifeel-57b89",
    storageBucket: "spotifeel-57b89.appspot.com",
    messagingSenderId: "1081144319509",
    appId: "1:1081144319509:web:cbc3da932c17ae36d5381c"
  };
  
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth(app);

export {
    database,
    auth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
};

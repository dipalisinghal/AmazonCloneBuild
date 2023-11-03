import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBY0E8FaTJe5ETOP9HrwBilTYe4TG9_kDM",
    authDomain: "clone-ca1e4.firebaseapp.com",
    projectId: "clone-ca1e4",
    storageBucket: "clone-ca1e4.appspot.com",
    messagingSenderId: "355580867330",
    appId: "1:355580867330:web:1fffa069048458dab4c81b",
    measurementId: "G-1G7G2F4MHG"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth }








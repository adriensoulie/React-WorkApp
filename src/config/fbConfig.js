import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


var config = {
    apiKey: "AIzaSyDEe_ehZVwCDu-xO7tQIq9x-Bhf_4lVZn8",
    authDomain: "reactredux-aea5e.firebaseapp.com",
    databaseURL: "https://reactredux-aea5e.firebaseio.com",
    projectId: "reactredux-aea5e",
    storageBucket: "reactredux-aea5e.appspot.com",
    messagingSenderId: "718919528628",
    appId: "1:718919528628:web:aa4c4cd4a54ad670cfa7e1",
    measurementId: "G-PLKJFHVKG3"
};

// Initialize Firebase
firebase.initializeApp(config);
firebase.firestore();


export default firebase;
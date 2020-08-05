import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDv_2BUDoMlppy6WDd9V_hf1Du05_CHDlc",
    authDomain: "react-messenger-1be88.firebaseapp.com",
    databaseURL: "https://react-messenger-1be88.firebaseio.com",
    projectId: "react-messenger-1be88",
    storageBucket: "react-messenger-1be88.appspot.com",
    messagingSenderId: "641039756269",
    appId: "1:641039756269:web:f908f9fcaac839394855e4"
});

const db = firebaseApp.firestore();

export default db;
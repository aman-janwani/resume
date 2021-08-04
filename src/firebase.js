import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCHnAJ86CwfXXpU5FWqpkpqrXcMtYil0oQ",
    authDomain: "resume-dcc28.firebaseapp.com",
    projectId: "resume-dcc28",
    storageBucket: "resume-dcc28.appspot.com",
    messagingSenderId: "909398179802",
    appId: "1:909398179802:web:21b1312d31dae1227b8ae3",
    measurementId: "G-VV5XS04CB9"
  };

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const db = app.firestore();

export {db}
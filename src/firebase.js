import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB9GoDhfOcNgNZcG17GUDKccVLyQlOvT6k",
  authDomain: "tinder-clone-75d67.firebaseapp.com",
  databaseURL: "https://tinder-clone-75d67.firebaseio.com",
  projectId: "tinder-clone-75d67",
  storageBucket: "tinder-clone-75d67.appspot.com",
  messagingSenderId: "963655126852",
  appId: "1:963655126852:web:1e33b34eaf3231a9771111",
  measurementId: "G-01KZV0JJTB",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const database = firebaseApp.firestore();

export default database;

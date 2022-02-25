import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';
// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getFirestore } from 'firebase/firestore';
// import { GoogleAuthProvider } from 'firebase/auth';
const firebaseConfig = {
    apiKey: "AIzaSyC0_we-VxbAPYGhnFGZblsW0TD2mB6kP6U",
    authDomain: "react-app-journal-7dd5d.firebaseapp.com",
    projectId: "react-app-journal-7dd5d",
    storageBucket: "react-app-journal-7dd5d.appspot.com",
    messagingSenderId: "782102793164",
    appId: "1:782102793164:web:148181c2a93f84ff8b2b69",
    measurementId: "G-PDXWVM26ZK"
  };
  
  // Initialize Firebase
//   const app = initializeApp(firebaseConfig);
  firebase.initializeApp(firebaseConfig);  

  const db = firebase.firestore();

  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();


  export {
      db,
      firebase,
      googleAuthProvider
  }
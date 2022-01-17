// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCV8NxWBHQF9BCLvNDJFJ_2-KdHfYKR0Rc",
  authDomain: "yt-b3a1d.firebaseapp.com",
  projectId: "yt-b3a1d",
  storageBucket: "yt-b3a1d.appspot.com",
  messagingSenderId: "793253932037",
  appId: "1:793253932037:web:45c4d13e0b9f30ae1c006c",
  measurementId: "G-72P5FG4ZGJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

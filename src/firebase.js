// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDAHObS0E6xR-N8qX4sBPWMeNW8tJyTFlE",
  authDomain: "netflix-gpt-bf595.firebaseapp.com",
  projectId: "netflix-gpt-bf595",
  storageBucket: "netflix-gpt-bf595.appspot.com",
  messagingSenderId: "339138239624",
  appId: "1:339138239624:web:d3f10e857c8df77c29533d",
  measurementId: "G-2GSWX3M9XS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

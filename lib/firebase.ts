// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCbzrt5kbjWvgdhaKCJqTuUWxIb3c8BZZI",
  authDomain: "ezer-ccee7.firebaseapp.com",
  projectId: "ezer-ccee7",
  storageBucket: "ezer-ccee7.firebasestorage.app",
  messagingSenderId: "713848364178",
  appId: "1:713848364178:web:a4efd4884a23cce90e1a4b",
  measurementId: "G-WEPDW0204S",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

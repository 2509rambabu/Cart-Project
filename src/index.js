import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import firebase from "firebase/app";
import 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyDi_DSVORoL_aEGwEq8ZwWuD4ZNrxAJbn0",
  authDomain: "cart2-615fa.firebaseapp.com",
  projectId: "cart2-615fa",
  storageBucket: "cart2-615fa.appspot.com",
  messagingSenderId: "363677243327",
  appId: "1:363677243327:web:33c693e587f4bacb0c330a"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCDUApu8qyXSDXYUpJheoeuq0lJ2v0ndEA",
  authDomain: "react-chat-app-b6199.firebaseapp.com",
  projectId: "react-chat-app-b6199",
  storageBucket: "react-chat-app-b6199.appspot.com",
  messagingSenderId: "1035969809250",
  appId: "1:1035969809250:web:8b43c8aec4e2725691ba3b"
};

// Initialize Firebase
 initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  {/* //<React.StrictMode> */}
    <App />
  {/* //</React.StrictMode> */}
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals


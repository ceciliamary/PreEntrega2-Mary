import React from 'react'
import ReactDOM from 'react-dom/client'
import { initializeApp } from "firebase/app";
import App from './App.jsx'
import './index.css'


const firebaseConfig = {
  apiKey: "AIzaSyChU4blvuMwI-v2K_EJIFHWHGGic88cZik",
  authDomain: "cecilia-mary-react.firebaseapp.com",
  projectId: "cecilia-mary-react",
  storageBucket: "cecilia-mary-react.appspot.com",
  messagingSenderId: "96752064517",
  appId: "1:96752064517:web:e549e37b0cbb48cfe8e46c"
};

initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

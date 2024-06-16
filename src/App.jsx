/*import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg' */
import React from 'react';
import './App.css'
import { CartProvider } from './context/CartContext';
import MainRouter from './routes/MainRouter';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {  
  return (
  <CartProvider>
   <MainRouter />
  </CartProvider>
);
}

export default App;

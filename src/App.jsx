import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarComponent from './components/NavBarComponent/NavBarComponent'
import ItemListContainerComponent from './components/ItemListContainerComponent/ItemListContainerComponent';
function App() {

  return (
    <>
    <NavBarComponent/>
    <ItemListContainerComponent greeting="Bienvenidos al sitio de venta de Dulces de la Patagonia"/>
     </>
  );
}


export default App

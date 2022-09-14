import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home/home';
import Download from './pages/Download/download';
import OFirmie from './pages/O-firmie/O_firmie';
import Pomoc from './pages/Pomoc/Pomoc'
import Kontakt from './pages/Kontakt/Kontakt'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/O_Firmie' element={<OFirmie />}/>
        <Route path='/Download' element={<Download />}/>
        <Route path='/Pomoc' element={<Pomoc />}/>
        <Route path='/Kontakt' element={<Kontakt />}/>
      </Routes>
    </BrowserRouter>
  // </React.StrictMode>
);

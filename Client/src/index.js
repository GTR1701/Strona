import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home/home';
import Download from './pages/Download/download';
import OFirmie from './pages/O-firmie/O_firmie';
import Pomoc from './pages/Pomoc/Pomoc'
import Kontakt from './pages/Kontakt/Kontakt'
import Panel from './pages/Panel/Panel'
import { Auth0Provider } from "@auth0/auth0-react";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
    domain="dev-fgt2m3h01s1v1upz.us.auth0.com"
    clientId="Ug3JttwQqQRs5IYvdVffPlCkgoN2Pzpa"
    redirectUri={"http://localhost:3000/Panel"}
  >
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/O_Firmie' element={<OFirmie />} />
        <Route path='/Download' element={<Download />} />
        <Route path='/Pomoc' element={<Pomoc />} />
        <Route path='/Kontakt' element={<Kontakt />} />
        <Route path='/Panel' element={<Panel />} />
      </Routes>
    </BrowserRouter>
  </Auth0Provider>
);

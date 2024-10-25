import React from 'react';
import './App.css';
import smb from './media/SideBar/smb.png';
import splatoon from './media/SideBar/splatoon.png';
import acnh from './media/SideBar/acnh.png';
import ssbu from './media/SideBar/ssbu.png';
import zelda from './media/SideBar/zelda.png';
import fireEmblem from './media/SideBar/FireEmblem.png';
import link from './media/Amiibos/link.jpg';

function App() {
  return (
    <div className="App">
      <div className="sidebar">
        <img src={smb} alt="SMB" />
        <img src={splatoon} alt="Splatoon" />
        <img src={acnh} alt="Leaf" />
        <img src={ssbu} alt="Smash" />
        <img src={zelda} alt="Triforce" />
        <img src={fireEmblem} alt="Sword" />
      </div>
      
      <div className="main-content">
        <div className="search-bar">
          <input type="text" placeholder="Buscar..." />
        </div>
        <div className="amiibo-container">
          <div className="amiibo-card">
            <img src={link} alt="Link" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

// App.js
import React, { useState } from 'react';
import './App.css';
import smb from './media/SideBar/smb.png';
import splatoon from './media/SideBar/splatoon.png';
import acnh from './media/SideBar/acnh.png';
import ssbu from './media/SideBar/ssbu.png';
import zelda from './media/SideBar/zelda.png';
import fireEmblem from './media/SideBar/FireEmblem.png';
import link from './media/Amiibos/link.jpg';
import  marina_pearl from './media/Amiibos/marina_pearl.png';

function App() {
  const [selectedFranchise, setSelectedFranchise] = useState(null);

  const handleIconClick = (franchise) => {
    setSelectedFranchise(franchise);
  };

  const renderAmiibos = () => {
    switch (selectedFranchise) {
      case 'zelda':
        return <div className="amiibo-card"><img src={link} alt="Link" /></div>;
      case 'splatoon':
        return <div className="amiibo-card"><img src={marina_pearl} alt="Marina_Pearl" /></div>;
      default:
        return <p>usted no debería estar viendo este mensaje :3</p>;
    }
  };

  return (
    <div className="App">
      <div className="sidebar">
        <img 
          src={smb} 
          alt="SMB" 
          onClick={() => handleIconClick('smb')}
          className={selectedFranchise === 'smb' ? 'selected' : ''}
        />
        <img 
          src={splatoon} 
          alt="Splatoon" 
          onClick={() => handleIconClick('splatoon')}
          className={selectedFranchise === 'splatoon' ? 'selected' : ''}
        />
        <img 
          src={acnh} 
          alt="Leaf" 
          onClick={() => handleIconClick('acnh')}
          className={selectedFranchise === 'acnh' ? 'selected' : ''}
        />
        <img 
          src={ssbu} 
          alt="Smash" 
          onClick={() => handleIconClick('ssbu')}
          className={selectedFranchise === 'ssbu' ? 'selected' : ''}
        />
        <img 
          src={zelda} 
          alt="Triforce" 
          onClick={() => handleIconClick('zelda')}
          className={selectedFranchise === 'zelda' ? 'selected' : ''}
        />
        <img 
          src={fireEmblem} 
          alt="Sword" 
          onClick={() => handleIconClick('fireEmblem')}
          className={selectedFranchise === 'fireEmblem' ? 'selected' : ''}
        />
      </div>
      
      <div className="main-content">
        <div className="search-bar">
          <input type="text" placeholder="Buscar..." />
        </div>
        <div className="amiibo-container">
          {renderAmiibos()}
        </div>
      </div>
    </div>
  );
}

export default App;

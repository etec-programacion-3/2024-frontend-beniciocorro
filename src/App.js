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
import  marina from './media/Amiibos/marina.jpg';
import isabelle from './media/Amiibos/isabelle-ssbu.png';
import mario from './media/Amiibos/mario.png';
import kazuya from './media/Amiibos/kazuya.png';
import chrom from './media/Amiibos/chrom.png';

function App() {
  const [selectedFranchise, setSelectedFranchise] = useState(null);

  const handleIconClick = (franchise) => {
    setSelectedFranchise(franchise);
  };

  const renderAmiibos = () => {
    switch (selectedFranchise) {
      case 'smb':
        return (
          <div className="amiibo-card">
            <img src={mario} alt="Mario" />
            <p className="price">$12.99</p>
            <button className="buy-button">Comprar</button>
          </div>
        );
      case 'splatoon':
        return (
          <div className="amiibo-card">
            <img src={marina} alt="Marina" />
            <p className="price">$15.99</p>
            <button className="buy-button">Comprar</button>
          </div>
        );
      case 'acnh':
        return (
          <div className="amiibo-card">
            <img src={isabelle} alt="Isabelle" />
            <p className="price">$9.99</p>
            <button className="buy-button">Comprar</button>
          </div>
        );
      case 'ssbu':
        return (
          <div className="amiibo-card">
            <img src={kazuya} alt="Kazuya" />
            <p className="price">$14.99</p>
            <button className="buy-button">Comprar</button>
          </div>
        );
      case 'zelda':
        return (
          <div className="amiibo-card">
            <img src={link} alt="Link" />
            <p className="price">$13.99</p>
            <button className="buy-button">Comprar</button>
          </div>
        );
      case 'fireEmblem':
        return (
          <div className="amiibo-card">
            <img src={chrom} alt="Chrom" />
            <p className="price">$16.99</p>
            <button className="buy-button">Comprar</button>
          </div>
        );
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

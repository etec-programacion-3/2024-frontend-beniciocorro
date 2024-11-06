import React, { useState } from 'react';
import './App.css';
import smb from './media/SideBar/smb.png';
import splatoon from './media/SideBar/splatoon.png';
import acnh from './media/SideBar/acnh.png';
import ssbu from './media/SideBar/ssbu.png';
import zelda from './media/SideBar/zelda.png';
import fireEmblem from './media/SideBar/FireEmblem.png';
import link from './media/Amiibos/link.jpg';
import marina from './media/Amiibos/marina.jpg';
import isabelle from './media/Amiibos/isabelle-ssbu.png';
import mario from './media/Amiibos/mario.png';
import kazuya from './media/Amiibos/kazuya.png';
import chrom from './media/Amiibos/chrom.png';

function App() {
  const [selectedFranchise, setSelectedFranchise] = useState(null);

  const amiibos = [
    { franchise: 'smb', src: mario, alt: 'Mario', price: '$10' },
    { franchise: 'splatoon', src: marina, alt: 'Marina', price: '$15' },
    { franchise: 'acnh', src: isabelle, alt: 'Isabelle', price: '$12' },
    { franchise: 'ssbu', src: kazuya, alt: 'Kazuya', price: '$18' },
    { franchise: 'zelda', src: link, alt: 'Link', price: '$20' },
    { franchise: 'fireEmblem', src: chrom, alt: 'Chrom', price: '$14' },
  ];

  const handleIconClick = (franchise) => {
    setSelectedFranchise((prevFranchise) => 
      prevFranchise === franchise ? null : franchise
    );
  };

  const renderAmiibos = () => {
    const filteredAmiibos = selectedFranchise
      ? amiibos.filter((amiibo) => amiibo.franchise === selectedFranchise)
      : amiibos;

    return filteredAmiibos.map((amiibo, index) => (
      <div key={index} className="amiibo-card">
        <img src={amiibo.src} alt={amiibo.alt} />
        <p>{amiibo.alt}</p>
        <p className="price">{amiibo.price}</p>
        <button className="buy-button">Buy</button>
      </div>
    ));
  };

  return (
    <div className="App">
      {/* Header con la barra de búsqueda */}
      <header className="header">
        <div className="search-bar">
          <input type="text" placeholder="Search..." />
        </div>
      </header>

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
        <div className="amiibo-container">
          {renderAmiibos()}
        </div>
      </div>
    </div>
  );
}

export default App;

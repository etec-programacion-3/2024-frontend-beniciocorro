import React from 'react';
import { FaHome } from 'react-icons/fa';
import smb from '../media/SideBar/smb.png';
import splatoon from '../media/SideBar/splatoon.png';
import acnh from '../media/SideBar/acnh.png';
import ssbu from '../media/SideBar/ssbu.png';
import zelda from '../media/SideBar/zelda.png';
import fireEmblem from '../media/SideBar/FireEmblem.png';
import './Sidebar.css';

const CATEGORIES = [
  { id: 'smb', name: 'Super Mario', icon: smb },
  { id: 'splatoon', name: 'Splatoon', icon: splatoon },
  { id: 'acnh', name: 'Animal Crossing', icon: acnh },
  { id: 'ssbu', name: 'Super Smash Bros', icon: ssbu },
  { id: 'zelda', name: 'The Legend of Zelda', icon: zelda },
  { id: 'fireEmblem', name: 'Fire Emblem', icon: fireEmblem }
];

const Sidebar = ({ selectedCategory, onCategorySelect }) => {
  return (
    <aside className="sidebar">
      <div className="sidebar-content">
        <button 
          className={`category-item ${!selectedCategory ? 'active' : ''}`}
          onClick={() => onCategorySelect(null)}
        >
          <div className="category-icon all-games">
            <FaHome />
          </div>
          <span>Todos</span>
        </button>

        {CATEGORIES.map((category) => (
          <button
            key={category.id}
            className={`category-item ${selectedCategory === category.id ? 'active' : ''}`}
            onClick={() => onCategorySelect(category.id)}
          >
            <div className="category-icon">
              <img src={category.icon} alt={category.name} />
            </div>
            <span>{category.name}</span>
          </button>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar; 
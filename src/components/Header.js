import React from 'react';
import { FaShoppingCart, FaUser, FaSearch } from 'react-icons/fa';
import './Header.css';

const Header = ({ cartItems, isLoggedIn, onLoginClick, onCartClick, searchQuery, onSearchChange }) => {
  return (
    <header className="header">
      <div className="header-logo">
        <img src="/media/Miibo.png" alt="Miibo" />
      </div>

      <div className="search-bar">
        <FaSearch className="search-icon" />
        <input
          type="text"
          placeholder="Search games..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </div>

      <div className="header-buttons">
        <button className="cart-button" onClick={onCartClick}>
          <FaShoppingCart />
          <span className="cart-count">{cartItems.length}</span>
          <span className="button-text">Cart</span>
        </button>

        <button className="login-button" onClick={onLoginClick}>
          <FaUser />
          <span className="button-text">
            {isLoggedIn ? 'Sign Out' : 'Sign In'}
          </span>
        </button>
      </div>
    </header>
  );
};

export default Header; 
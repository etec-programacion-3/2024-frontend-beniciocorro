import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaShoppingCart, FaUser, FaSearch, FaBars } from 'react-icons/fa';
import './Navbar.css';
import miboLogo from '../media/Miibo.png';

const Navbar = ({ cartCount, onSearchChange, onLoginClick, user, onLogout }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <img src={miboLogo} alt="Miibo" className="logo-img" />
          <span className="logo-text">Miibo</span>
        </Link>

        <div className="navbar-search">
          <div className={`search-container ${showSearch ? 'active' : ''}`}>
            <input
              type="text"
              placeholder="Search amiibo..."
              onChange={(e) => onSearchChange(e.target.value)}
              className="search-input"
            />
            <FaSearch className="search-icon" onClick={() => setShowSearch(!showSearch)} />
          </div>
        </div>

        <div className="navbar-actions">
          {user ? (
            <div className="user-menu">
              <span className="user-name">{user.name}</span>
              <button className="logout-button" onClick={onLogout}>
                Sign out
              </button>
            </div>
          ) : (
            <button className="login-button" onClick={onLoginClick}>
              <FaUser />
              <span>Sign in</span>
            </button>
          )}

          <Link to="/cart" className="cart-button">
            <FaShoppingCart />
            {cartCount > 0 && (
              <span className="cart-count" key={cartCount}>
                {cartCount}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 
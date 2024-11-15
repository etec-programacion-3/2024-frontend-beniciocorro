import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { FaShoppingCart, FaUser, FaSearch, FaHome } from 'react-icons/fa';

// Componentes
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import ProductGrid from './components/ProductGrid';
import Cart from './components/Cart';
import LoginModal from './components/LoginModal';

// Imágenes
import smb from './media/SideBar/smb.png';
import splatoon from './media/SideBar/splatoon.png';
import acnh from './media/SideBar/acnh.png';
import ssbu from './media/SideBar/ssbu.png';
import zelda from './media/SideBar/zelda.png';
import fireEmblem from './media/SideBar/FireEmblem.png';
import linkAmiibo from './media/Amiibos/link.jpg';
import marina from './media/Amiibos/marina.jpg';
import isabelle from './media/Amiibos/isabelle-ssbu.png';
import mario from './media/Amiibos/mario.png';
import kazuya from './media/Amiibos/kazuya.png';
import chrom from './media/Amiibos/chrom.png';

// Estilos
import './App.css';

const PRODUCTS = [
  { id: 1, franchise: 'smb', src: mario, name: 'Mario', price: 29.99, description: 'Super Mario Bros. Amiibo' },
  { id: 2, franchise: 'splatoon', src: marina, name: 'Marina', price: 34.99, description: 'Splatoon Amiibo' },
  { id: 3, franchise: 'animal-crossing', src: isabelle, name: 'Isabelle', price: 24.99, description: 'Animal Crossing Amiibo' },
  { id: 4, franchise: 'smash', src: kazuya, name: 'Kazuya', price: 39.99, description: 'Super Smash Bros. Amiibo' },
  { id: 5, franchise: 'zelda', src: linkAmiibo, name: 'Link', price: 44.99, description: 'The Legend of Zelda Amiibo' },
  { id: 6, franchise: 'fire-emblem', src: chrom, name: 'Chrom', price: 29.99, description: 'Fire Emblem Amiibo' },
];

const categories = [
  {
    id: 1,
    name: "Mario",
    franchise: "mario",
    icon: "/icons/mario.png"
  },
  {
    id: 2,
    name: "Zelda",
    franchise: "zelda",
    icon: "/icons/zelda.png"
  },
  // ... más categorías
];

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const addToCart = (product) => {
    setCartItems(prev => [...prev, { ...product, cartId: Date.now() }]);
  };

  const removeFromCart = (cartId) => {
    setCartItems(prev => prev.filter(item => item.cartId !== cartId));
  };

  const handleLogin = (userData) => {
    setUser(userData);
    setIsLoggedIn(true);
    setShowLoginModal(false);
  };

  const handleLogout = () => {
    setUser(null);
    setIsLoggedIn(false);
  };

  return (
    <Router>
      <div className="app">
        <Navbar 
          cartCount={cartItems.length}
          onSearchChange={setSearchQuery}
          onLoginClick={() => setShowLoginModal(true)}
          user={user}
          onLogout={handleLogout}
        />
        
        <div className="main-container">
          <Sidebar 
            categories={categories} 
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
          />
          
          <Routes>
            <Route 
              path="/" 
              element={
                <ProductGrid 
                  products={PRODUCTS}
                  selectedCategory={selectedCategory}
                  searchQuery={searchQuery}
                  onAddToCart={addToCart}
                />
              } 
            />
            <Route 
              path="/cart" 
              element={
                <Cart 
                  items={cartItems}
                  onRemoveItem={removeFromCart}
                />
              } 
            />
          </Routes>
        </div>

        {showLoginModal && (
          <LoginModal 
            onClose={() => setShowLoginModal(false)}
            onLogin={handleLogin}
          />
        )}
      </div>
    </Router>
  );
}

export default App;

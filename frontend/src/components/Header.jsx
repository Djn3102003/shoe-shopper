import React, { useState, useContext } from 'react';
import { CartContext } from '../context/CartContext';
import '../styles/Header.css';

const Header = ({ onNavigate, currentPage }) => {
  const { cart } = useContext(CartContext);

  return (
    <header className="header">
      <div className="container">
        <h1 className="logo">👟 Shoe Shopper</h1>
        <nav className="nav">
          <button 
            className={`nav-btn ${currentPage === 'home' ? 'active' : ''}`}
            onClick={() => onNavigate('home')}
          >
            Home
          </button>
          <button 
            className={`nav-btn ${currentPage === 'cart' ? 'active' : ''}`}
            onClick={() => onNavigate('cart')}
          >
            Cart ({cart.length})
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;

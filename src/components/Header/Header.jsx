import React from 'react';
import './Header.css';

function Header({ totalItems, onCartClick }) {
  return (
    <header className="header">
      <div className="header-inner">
        <div className="header-brand">
          <span className="brand-mark">◆</span>
          <span className="brand-name">Maison</span>
        </div>

        <nav className="header-nav">
          <a href="#">Shop</a>
          <a href="#">Collections</a>
          <a href="#">About</a>
        </nav>

        <button className="cart-trigger" onClick={onCartClick}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
            <line x1="3" y1="6" x2="21" y2="6"/>
            <path d="M16 10a4 4 0 01-8 0"/>
          </svg>
          <span className="cart-label">Cart</span>
          {totalItems > 0 && (
            <span className="cart-badge">{totalItems}</span>
          )}
        </button>
      </div>
    </header>
  );
}

export default Header;
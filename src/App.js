import React, { useState } from 'react';
import Header from './components/Header/Header';
import ProductGrid from './components/ProductGrid/ProductGrid';
import Cart from './components/Cart/Cart';
import products from './data/products';
import './App.css';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);

  const handleAddToCart = (product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const handleIncrement = (id) => {
    setCartItems((prev) =>
      prev.map((item) => item.id === id ? { ...item, quantity: item.quantity + 1 } : item)
    );
  };

  const handleDecrement = (id) => {
    setCartItems((prev) =>
      prev.map((item) => item.id === id ? { ...item, quantity: item.quantity - 1 } : item)
           .filter((item) => item.quantity > 0)
    );
  };

  const handleRemove = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleClearCart = () => setCartItems([]);

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalCost  = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="app">
      <Header
        totalItems={totalItems}
        onCartClick={() => setCartOpen((o) => !o)}
      />

      {/* Overlay backdrop */}
      <div
        className={`cart-overlay ${cartOpen ? 'overlay-visible' : ''}`}
        onClick={() => setCartOpen(false)}
      />

      <main className="main-layout">
        <ProductGrid
          products={products}
          cartItems={cartItems}
          onAddToCart={handleAddToCart}
        />
      </main>

      {/* Cart is now a fixed drawer */}
      <Cart
        isOpen={cartOpen}
        cartItems={cartItems}
        totalCost={totalCost}
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
        onRemove={handleRemove}
        onClearCart={handleClearCart}
        onClose={() => setCartOpen(false)}
      />
    </div>
  );
}

export default App;
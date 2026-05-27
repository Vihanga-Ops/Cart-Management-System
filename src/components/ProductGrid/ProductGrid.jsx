import React, { useState } from 'react';
import './ProductGrid.css';

const BADGE_COLORS = {
  Bestseller: '#c4714a',
  New:        '#7a9e7e',
  Sale:       '#b05c5c',
};

function ProductGrid({ products, cartItems, onAddToCart }) {
  const [added, setAdded] = useState(null);

  const getQty = (id) => {
    const item = cartItems.find((i) => i.id === id);
    return item ? item.quantity : 0;
  };

  const handleAdd = (product) => {
    onAddToCart(product);
    setAdded(product.id);
    setTimeout(() => setAdded(null), 900);
  };

  return (
    <div className="product-section">
      <div className="section-header">
        <h1 className="section-title">
          <span>Our</span> Collection
        </h1>
        <p className="section-sub">{products.length} thoughtfully sourced pieces</p>
      </div>

      <div className="product-grid">
        {products.map((product, i) => {
          const qty    = getQty(product.id);
          const isAdded = added === product.id;

          return (
            <div
              key={product.id}
              className="product-card"
              style={{ animationDelay: `${i * 0.04}s` }}
            >
              {/* Image */}
              <div className="card-image-wrap">
                <img
                  src={product.image}
                  alt={product.name}
                  className="card-image"
                  loading="lazy"
                />
                {product.badge && (
                  <span
                    className="card-badge"
                    style={{ background: BADGE_COLORS[product.badge] }}
                  >
                    {product.badge.toUpperCase()}
                  </span>
                )}
                {qty > 0 && (
                  <span className="in-cart-pill">{qty} in cart</span>
                )}
              </div>

              {/* Body — matches screenshot layout exactly */}
              <div className="card-body">
                <p className="card-category">{product.category.toUpperCase()}</p>
                <h3 className="card-name">{product.name}</h3>
                <div className="card-footer">
                  <span className="card-price">${Number(product.price).toFixed(2)}</span>
                  <button
                    className={`add-btn ${isAdded ? 'added' : ''}`}
                    onClick={() => handleAdd(product)}
                  >
                    {isAdded ? '✓ Added' : '+ Add'}
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProductGrid;
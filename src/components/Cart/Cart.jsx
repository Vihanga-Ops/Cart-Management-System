import React from 'react';
import CartItem from '../CartItem/CartItem';
import './Cart.css';

function Cart({ isOpen, cartItems, totalCost, onIncrement, onDecrement, onRemove, onClearCart, onClose }) {
  return (
    <aside className={`cart-panel ${isOpen ? 'cart-open' : ''}`}>
      {/* Cart header */}
      <div className="cart-header">
        <div className="cart-title-row">
          <h2 className="cart-title">Your Cart</h2>
          {cartItems.length > 0 && (
            <span className="cart-count">
              {cartItems.reduce((s, i) => s + i.quantity, 0)} items
            </span>
          )}
        </div>
        <button className="cart-close" onClick={onClose} aria-label="Close cart">✕</button>
      </div>

      {/* Empty state */}
      {cartItems.length === 0 ? (
        <div className="cart-empty">
          <div className="empty-icon">🛍</div>
          <p>Your cart is empty.</p>
          <p className="empty-sub">Add something beautiful.</p>
        </div>
      ) : (
        <>
          {/* Items */}
          <div className="cart-items">
            {cartItems.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                onIncrement={onIncrement}
                onDecrement={onDecrement}
                onRemove={onRemove}
              />
            ))}
          </div>

          {/* Footer */}
          <div className="cart-footer">
            <div className="cart-summary">
              <div className="summary-row">
                <span>Subtotal</span>
                <span>${totalCost.toFixed(2)}</span>
              </div>
              <div className="summary-row summary-row-shipping">
                <span>Shipping</span>
                <span className="free-tag">Free</span>
              </div>
              <div className="summary-divider" />
              <div className="summary-row summary-total">
                <span>Total</span>
                <span>${totalCost.toFixed(2)}</span>
              </div>
            </div>

            <button className="checkout-btn">
              Proceed to Checkout
            </button>

            <button className="clear-btn" onClick={onClearCart}>
              Clear Cart
            </button>
          </div>
        </>
      )}
    </aside>
  );
}

export default Cart;
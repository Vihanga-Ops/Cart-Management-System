import React from 'react';
import './CartItem.css';

function CartItem({ item, onIncrement, onDecrement, onRemove }) {
  return (
    <div className="cart-item">
      <img src={item.image} alt={item.name} className="item-image" />

      <div className="item-details">
        <p className="item-name">{item.name}</p>
        <p className="item-price">${(item.price * item.quantity).toFixed(2)}</p>

        <div className="item-controls">
          <div className="qty-stepper">
            <button
              className="qty-btn"
              onClick={() => onDecrement(item.id)}
            >−</button>
            <span className="qty-value">{item.quantity}</span>
            <button
              className="qty-btn"
              onClick={() => onIncrement(item.id)}
            >+</button>
          </div>

          <button
            className="remove-btn"
            onClick={() => onRemove(item.id)}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
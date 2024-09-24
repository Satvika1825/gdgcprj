
import React from 'react';

const Cart = ({ cart, increaseQuantity, decreaseQuantity, removeFromCart }) => {
  return (
    <div className="cart">
      <h2>Cart</h2>
      {cart.map(item => (
        <div key={item.id} className="cart-item">
          <img src={item.image} alt={item.title} className="cart-image"/>
          <div className="cart-info">
            <h4>{item.title}</h4>
            <p>₹{item.price}</p>
            <div className="cart-controls">
              <button onClick={() => decreaseQuantity(item.id)}>-</button>
              <span>{item.quantity}</span>
              <button onClick={() => increaseQuantity(item.id)}>+</button>
            </div>
          </div>
          <button className="remove-item" onClick={() => removeFromCart(item.id)}>×</button>
        </div>
      ))}
    </div>
  );
};

export default Cart;

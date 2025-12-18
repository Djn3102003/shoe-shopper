import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import '../styles/Cart.css';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, getTotalPrice } = useContext(CartContext);

  if (cart.length === 0) {
    return <div className="empty-cart">Your cart is empty</div>;
  }

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      <div className="cart-items">
        {cart.map(item => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.name} className="cart-item-image" />
            <div className="cart-item-details">
              <h4>{item.name}</h4>
              <p>${item.price}</p>
            </div>
            <div className="cart-item-quantity">
              <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
              <input 
                type="number" 
                value={item.quantity}
                onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                min="1"
              />
              <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
            </div>
            <p className="item-total">${(item.price * item.quantity).toFixed(2)}</p>
            <button 
              className="remove-btn"
              onClick={() => removeFromCart(item.id)}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
      <div className="cart-summary">
        <h3>Total: ${getTotalPrice().toFixed(2)}</h3>
        <button className="checkout-btn">Proceed to Checkout</button>
      </div>
    </div>
  );
};

export default Cart;

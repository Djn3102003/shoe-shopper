import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (shoe) => {
    const existingItem = cart.find(item => item.id === shoe.id);
    
    if (existingItem) {
      setCart(cart.map(item =>
        item.id === shoe.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCart([...cart, { ...shoe, quantity: 1 }]);
    }
  };

  const removeFromCart = (shoeId) => {
    setCart(cart.filter(item => item.id !== shoeId));
  };

  const updateQuantity = (shoeId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(shoeId);
    } else {
      setCart(cart.map(item =>
        item.id === shoeId ? { ...item, quantity } : item
      ));
    }
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity, getTotalPrice }}>
      {children}
    </CartContext.Provider>
  );
};

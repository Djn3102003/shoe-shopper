import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import '../styles/ShoeCard.css';

const ShoeCard = ({ shoe }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="shoe-card">
      <img src={shoe.image} alt={shoe.name} className="shoe-image" />
      <div className="shoe-info">
        <p className="brand">{shoe.brand}</p>
        <h3>{shoe.name}</h3>
        <p className="description">{shoe.description}</p>
        <p className="category">{shoe.category}</p>
        <div className="shoe-footer">
          <span className="price">${shoe.price}</span>
          <button 
            className="add-btn"
            onClick={() => addToCart(shoe)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShoeCard;

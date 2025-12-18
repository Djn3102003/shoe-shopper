import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ShoeCard from './ShoeCard';
import '../styles/ShoeList.css';

const ShoeList = () => {
  const [shoes, setShoes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchShoes();
  }, []);

  const fetchShoes = async () => {
    try {
      const response = await axios.get('/api/shoes');
      setShoes(response.data);
      setLoading(false);
    } catch (err) {
      setError('Failed to fetch shoes');
      setLoading(false);
    }
  };

  if (loading) return <div className="loading">Loading shoes...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="shoe-list">
      <h2>Our Collection</h2>
      <div className="shoe-grid">
        {shoes.map(shoe => (
          <ShoeCard key={shoe.id} shoe={shoe} />
        ))}
      </div>
    </div>
  );
};

export default ShoeList;

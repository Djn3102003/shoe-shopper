import React, { useState } from 'react';
import Header from './components/Header';
import ShoeList from './components/ShoeList';
import Cart from './components/Cart';
import { CartProvider } from './context/CartContext';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <CartProvider>
      <Header onNavigate={setCurrentPage} currentPage={currentPage} />
      <main className="main-content">
        {currentPage === 'home' ? <ShoeList /> : <Cart />}
      </main>
      <footer className="footer">
        <p>&copy; 2024 Shoe Shopper. All rights reserved.</p>
      </footer>
    </CartProvider>
  );
}

export default App;

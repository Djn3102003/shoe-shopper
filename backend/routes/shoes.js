const express = require('express');
const router = express.Router();

// Mock shoe data
const shoes = [
  {
    id: 1,
    name: 'Air Runner Pro',
    brand: 'Nike',
    price: 129.99,
    image: '/images/shoe-1.jpg',
    description: 'Comfortable running shoes with excellent support',
    category: 'Running'
  },
  {
    id: 2,
    name: 'Urban Step',
    brand: 'Adidas',
    price: 99.99,
    image: '/images/shoe-2.jpg',
    description: 'Stylish casual sneakers perfect for everyday wear',
    category: 'Casual'
  },
  {
    id: 3,
    name: 'Court Master',
    brand: 'Puma',
    price: 89.99,
    image: '/images/shoe-3.jpg',
    description: 'Classic basketball-inspired design',
    category: 'Sports'
  },
  {
    id: 4,
    name: 'Comfort Walk',
    brand: 'New Balance',
    price: 119.99,
    image: '/images/shoe-4.jpg',
    description: 'Lightweight and comfortable for all-day wear',
    category: 'Casual'
  },
  {
    id: 5,
    name: 'Trail Blazer',
    brand: 'Salomon',
    price: 139.99,
    image: '/images/shoe-5.jpg',
    description: 'Rugged outdoor hiking shoes',
    category: 'Hiking'
  },
  {
    id: 6,
    name: 'Swift Runner',
    brand: 'Nike',
    price: 149.99,
    image: '/images/shoe-6.jpg',
    description: 'High-performance running shoes',
    category: 'Running'
  }
];

// Get all shoes
router.get('/', (req, res) => {
  res.json(shoes);
});

// Get single shoe by ID
router.get('/:id', (req, res) => {
  const shoe = shoes.find(s => s.id === parseInt(req.params.id));
  if (!shoe) {
    return res.status(404).json({ message: 'Shoe not found' });
  }
  res.json(shoe);
});

module.exports = router;

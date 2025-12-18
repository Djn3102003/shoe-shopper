const express = require('express');
const cors = require('cors');
const path = require('path');
const shoeRoutes = require('./routes/shoes');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Serve static files from frontend public folder
app.use(express.static(path.join(__dirname, '../frontend/public')));

// Routes
app.use('/api/shoes', shoeRoutes);

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'Server is running' });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

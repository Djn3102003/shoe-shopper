# Shoe Shopper - Portfolio Project

A simple full-stack e-commerce application for browsing and shopping for shoes. Built with React, Vite, Node.js, and Express.

## Project Structure

```
shoe-shopper/
├── frontend/          # React + Vite frontend
│   ├── src/
│   │   ├── components/  # React components (Header, ShoeList, Cart, etc.)
│   │   ├── context/     # React Context for state management (CartContext)
│   │   ├── styles/      # CSS files
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── index.html
│   ├── vite.config.js
│   └── package.json
└── backend/           # Express API server
    ├── routes/        # API routes
    ├── server.js
    └── package.json
```

## Features

- **Browse Shoes**: View a collection of shoes with details
- **Shopping Cart**: Add/remove items, update quantities
- **Responsive Design**: Works on desktop and mobile
- **Context API**: State management for shopping cart
- **RESTful API**: Backend API with Express.js

## Prerequisites

- Node.js (v14 or higher)
- npm (comes with Node.js)

## Installation & Setup

### 1. Install Backend Dependencies

```bash
cd backend
npm install
```

### 2. Install Frontend Dependencies

```bash
cd ../frontend
npm install
```

## Running the Application

### Start the Backend Server

Open a terminal and run:

```bash
cd backend
npm start
```

The backend will run on `http://localhost:5000`

### Start the Frontend Development Server

Open another terminal and run:

```bash
cd frontend
npm run dev
```

The frontend will run on `http://localhost:3000`

## API Endpoints

- `GET /api/health` - Server health check
- `GET /api/shoes` - Get all shoes
- `GET /api/shoes/:id` - Get a specific shoe by ID

## Technologies Used

**Frontend:**
- React 18
- Vite (build tool)
- Axios (HTTP client)
- Context API (state management)
- CSS3

**Backend:**
- Node.js
- Express.js
- CORS (for cross-origin requests)

## Available Scripts

**Backend:**
- `npm start` - Start the server

**Frontend:**
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## Features to Build Upon

This is a great portfolio project! You can extend it with:

1. **User Authentication** - Add login/signup with JWT
2. **Database Integration** - Replace mock data with MongoDB/PostgreSQL
3. **Payment Integration** - Add Stripe or PayPal checkout
4. **Order Management** - Track orders and delivery status
5. **Product Filters** - Filter by brand, price, category
6. **Product Search** - Search functionality
7. **User Reviews** - Add ratings and reviews
8. **Admin Dashboard** - Manage products and orders
9. **Deployment** - Deploy to Heroku, Vercel, or AWS

## File Structure Details

### Frontend Components

- **Header.jsx** - Navigation bar with cart count
- **ShoeList.jsx** - Main product listing page
- **ShoeCard.jsx** - Individual shoe product card
- **Cart.jsx** - Shopping cart display and management

### Backend Routes

- **routes/shoes.js** - Shoe data endpoints with mock data

### State Management

- **context/CartContext.jsx** - Global cart state using React Context API

## Notes

- Mock shoe data is hardcoded in the backend (replace with a database)
- Product images use placeholder URLs (replace with actual images)
- No authentication is implemented yet
- This is a client portfolio project, ready to expand!

## License

MIT

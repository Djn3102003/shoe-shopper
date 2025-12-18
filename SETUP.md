# Quick Start Guide

## What You Need to Install

Before running the app, make sure you have **Node.js** installed on your computer.

### Download Node.js
Visit: https://nodejs.org/ and download the **LTS (Long Term Support)** version

Node.js comes with **npm** (Node Package Manager) included.

## Setup Instructions

### Step 1: Open PowerShell or Command Prompt
Navigate to the project directory:
```powershell
cd "c:\Users\dhananjayan\Desktop\Web dev\react apps\shoe-shopper"
```

### Step 2: Install Backend Dependencies
```powershell
cd backend
npm install
```
This will install:
- express (web framework)
- cors (handle cross-origin requests)

### Step 3: Install Frontend Dependencies
```powershell
cd ..\frontend
npm install
```
This will install:
- react (UI library)
- vite (build tool)
- axios (HTTP client)

### Step 4: Run the Backend
Open a PowerShell terminal and run:
```powershell
cd backend
npm start
```

You should see:
```
Server running on http://localhost:5000
```

### Step 5: Run the Frontend
Open another PowerShell terminal and run:
```powershell
cd frontend
npm run dev
```

You should see:
```
  VITE v4.x.x  ready in xxx ms

  ➜  Local:   http://localhost:3000/
```

### Step 6: Open in Browser
Go to: http://localhost:3000/

## Troubleshooting

**Node.js not found?**
- Restart your terminal after installing Node.js
- Verify installation: `node --version`

**Port already in use?**
- Change port in `frontend/vite.config.js` (line: `port: 3000`)
- Or change backend port in `backend/server.js` (line: `const PORT = 5000`)

**Module not found?**
- Make sure you ran `npm install` in both frontend and backend directories
- Delete `node_modules` folder and run `npm install` again

**Backend connection error?**
- Ensure backend is running on port 5000
- Check that the proxy in `vite.config.js` points to `http://localhost:5000`

## Project Features

✅ Browse shoe collection
✅ Add items to cart
✅ Manage cart (update quantities, remove items)
✅ Responsive design
✅ Simple backend API
✅ React Context API for state management

## What's Next?

Great portfolio projects you can build from here:

1. Add a database (MongoDB)
2. Add user authentication
3. Add payment processing (Stripe)
4. Deploy to production (Vercel, Heroku)
5. Add product search and filters
6. Add user reviews and ratings

Enjoy building! 🚀

# Budget Buddy

A full‑stack personal finance app to track income and expenses, visualize trends, and manage recent transactions. Built with a React (Vite) frontend and a Node.js/Express + MongoDB backend. Deployed as a monorepo on Vercel.

## Demo

- Frontend: <YOUR_FRONTEND_URL>
- Backend API: <YOUR_BACKEND_URL>

### Demo Account

- Email: `userdemo@gmail.com`
- Password: `userdemo123`

Use the account above to sign in and explore the dashboard charts, add income/expense, and download reports.

## Features

- Auth (register/login with JWT)
- Add, list, and delete income and expenses
- Dashboard with bar/line charts and recent transactions
- Excel download (blob download)
- Profile picture upload (configurable storage)

## Screenshots

> Replace the image paths if you store screenshots elsewhere (e.g., `/frontend/public`).

![Dashboard](src/assets/images/card3.png)

![Expense Chart](src/assets/images/card2.png)

## Local Development

### 1) Backend

```
cd ../backend
npm install
# backend/.env
# MONGO_URI=your_mongodb_uri
# JWT_SECRET=your_random_secret
# CLIENT_URL=http://localhost:5173
npm start
```

### 2) Frontend

```
cd frontend
npm install
# frontend/.env
# VITE_API_BASE_URL=http://localhost:5000
npm run dev
```

## Production (Vercel)

- Backend project (root: `backend/`) → Env: `MONGO_URI`, `JWT_SECRET`, `CLIENT_URL`
- Frontend project (root: `frontend/`) → Env: `VITE_API_BASE_URL`

Note: Vercel’s filesystem is ephemeral; use a persistent store (Cloudinary/Vercel Blob) for image uploads.

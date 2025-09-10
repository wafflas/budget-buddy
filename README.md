# Budget Buddy

A full‑stack personal finance app to track income and expenses, visualize trends, and manage recent transactions. Built with a React (Vite) frontend and a Node.js/Express + MongoDB backend(MERN stack). Deployed as a monorepo on Vercel.

## Screenshots

<img width="1894" height="887" alt="image" src="https://github.com/user-attachments/assets/762364d6-2da3-4b97-806c-67220790efd4" />

<img width="1900" height="937" alt="image" src="https://github.com/user-attachments/assets/3429f87a-2a20-4be0-acf3-add0f1505b3a" />

<img width="1901" height="911" alt="image" src="https://github.com/user-attachments/assets/115ae8bd-5fe5-41db-a5c3-6d40d0268d17" />

<img width="1884" height="935" alt="image" src="https://github.com/user-attachments/assets/b49543ae-4c07-4591-b066-4865e444767b" />


### Demo Account

- Email: `demouser@gmail.com`
- Password: `demouser123`

Use the account above to sign in and explore the dashboard charts, add income/expense, and download reports.

## Features

- Auth (register/login with JWT)
- Add, list, and delete income and expenses
- Dashboard with bar/line charts and recent transactions
- Excel download (blob download)
- Profile picture upload (configurable storage)


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

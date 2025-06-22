# ChatSphere

ChatSphere is a real-time messaging web application built with the MERN stack (MongoDB, Express, React, Node.js), TailwindCSS, DaisyUI, and Socket.io. It features secure authentication, profile management, image messaging, and a modern, responsive UI.

## Features

- Real-time 1:1 chat with Socket.io
- User authentication (signup, login, logout)
- Profile management with avatar upload (Cloudinary)
- Image and text messaging
- Online users indicator
- Theme switching (DaisyUI themes)
- Responsive design (TailwindCSS + DaisyUI)
- Email contact form (EmailJS)

## Tech Stack

- **Frontend:** React, Vite, Zustand, TailwindCSS, DaisyUI, React Router, Lucide Icons
- **Backend:** Node.js, Express, MongoDB (Mongoose), Socket.io, Cloudinary
- **Other:** EmailJS, JWT, Cookie-based auth

## Project Structure

```
backend/
  src/
    controllers/
    lib/
    middleware/
    models/
    routes/
    seeds/
  .env
  package.json

frontend/
  src/
    assets/
    components/
    constants/
    lib/
    pages/
    store/
    App.jsx
    main.jsx
    index.css
  .env
  package.json
  tailwind.config.js
  postcss.config.js
  vite.config.js
```

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- MongoDB database (Atlas or local)
- Cloudinary account (for image uploads)
- EmailJS account (for contact form)

### 1. Clone the repository

```sh
git clone https://github.com/yourusername/chatsphere.git
cd chatsphere
```

### 2. Setup Backend

```sh
cd backend
npm install
# Create a .env file (see .env.example for required variables)
npm run dev
```

### 3. Setup Frontend

```sh
cd frontend
npm install
# Create a .env file (see .env for required variables)
npm run dev
```

- Frontend runs on [http://localhost:5173](http://localhost:5173)
- Backend runs on [http://localhost:5001](http://localhost:5001)

### 4. Seed Users (Optional)

To seed demo users, run:

```sh
cd backend
node src/seeds/user.seed.js
```

## Environment Variables

### Backend (`backend/.env`)

```
MONGODB_URI=your_mongodb_uri
PORT=5001
JWT_SECRET=your_jwt_secret
NODE_ENV=development
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
FRONTEND_URI=http://localhost:5173
```

### Frontend (`frontend/.env`)

```
VITE_EMAILJS_SERVICE_ID=your_emailjs_service_id
VITE_EMAILJS_TEMPLATE_ID=your_emailjs_template_id
VITE_EMAILJS_PUBLIC_KEY=your_emailjs_public_key
VITE_API_URL=http://localhost:5001
```

## Scripts

- `npm run dev` — Start development server
- `npm run build` — Build for production
- `npm run preview` — Preview production build

## Deployment

- Deploy backend (Node.js) to platforms like Render, Railway, or Vercel (Serverless)
- Deploy frontend (React/Vite) to Vercel, Netlify, or similar

## License

MIT

---

Made with ❤️ by Bhavya Joshi
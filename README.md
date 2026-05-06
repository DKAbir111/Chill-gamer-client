<div align="center">

# 🎮 Chill Gamer II

### *A Game Review Platform — Explore, Rate & Chill*

[![Live Demo](https://img.shields.io/badge/🚀_Live_Demo-Visit_Site-4F46E5?style=for-the-badge)](https://chill-gamer-59231.web.app)
[![Server](https://img.shields.io/badge/🛠️_Live_Server-Vercel-000000?style=for-the-badge)](https://chill-gamer-server-sandy.vercel.app/)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://mongodb.com/)

</div>

---

## 📸 Preview

| Home Page | Reviews | Watchlist |
|:---------:|:-------:|:---------:|
| ![Home](https://i.ibb.co.com/ksW5sX3Z/1.png) | ![Reviews](https://i.ibb.co.com/chRp9PLn/2.png) | ![Watchlist](https://i.ibb.co.com/NnxdChyK/3.png) |

---

## 📌 Overview

**Chill Gamer** is a full-stack game review platform where users can explore, add, and manage game reviews. Users can rate games, build personal watchlists, and browse community reviews — all within a clean, responsive, and theme-switchable interface.

> 🔗 **Frontend:** [chill-gamer-59231.web.app](https://chill-gamer-59231.web.app)  
> 🔗 **Backend API:** [chill-gamer-server-sandy.vercel.app](https://chill-gamer-server-sandy.vercel.app/)

---

## ✨ Key Features

| Feature | Description |
|---|---|
| 🔐 **Authentication** | Email/password & Google Sign-In via Firebase |
| 📝 **Review Management** | Add, edit, and delete your own game reviews |
| 📋 **Watchlist** | Build a personal game watchlist |
| 🔍 **Sort & Filter** | Filter by genre, sort by rating or release year |
| 🌗 **Dark / Light Mode** | Toggle between themes for comfort |
| 🔒 **Protected Routes** | Private pages for authenticated users only |
| 🔄 **Persisted State** | Redirects users to their desired page after login |
| ⚡ **Real-Time Feedback** | Toast & SweetAlert notifications throughout |
| 🚫 **Custom 404** | Friendly error page for invalid routes |

---

## 🖥️ Tech Stack

### Frontend
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![React](https://img.shields.io/badge/React-20232A?style=flat-square&logo=react&logoColor=61DAFB)
![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)
![DaisyUI](https://img.shields.io/badge/DaisyUI-5A4F5A?style=flat-square)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=flat-square&logo=react-router&logoColor=white)
![Lottie](https://img.shields.io/badge/Lottie_React-FF6F61?style=flat-square)
![SweetAlert2](https://img.shields.io/badge/SweetAlert2-FFC107?style=flat-square)

### Backend
![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=nodedotjs&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=flat-square&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=flat-square&logo=mongodb&logoColor=white)
![Mongoose](https://img.shields.io/badge/Mongoose-880000?style=flat-square)
![JWT](https://img.shields.io/badge/JWT-000000?style=flat-square&logo=JSON-web-tokens&logoColor=white)
![Firebase](https://img.shields.io/badge/Firebase_Auth-FFCA28?style=flat-square&logo=firebase&logoColor=black)

### Deployment
![Firebase Hosting](https://img.shields.io/badge/Firebase_Hosting-FFCA28?style=flat-square&logo=firebase&logoColor=black)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat-square&logo=vercel&logoColor=white)

---

## 📁 Project Structure

```
chill-gamer/
├── client/                     # React frontend
│   ├── src/
│   │   ├── components/         # Reusable UI components
│   │   ├── pages/              # Home, Reviews, Watchlist, Login, 404
│   │   ├── context/            # Auth context (Firebase)
│   │   ├── hooks/              # Custom React hooks
│   │   └── routes/             # Protected & public routes
│   └── package.json
│
└── server/                     # Express backend
    ├── routes/                 # API route definitions
    ├── controllers/            # Business logic (MVC)
    ├── models/                 # Mongoose schemas
    ├── middleware/             # Auth checks, error handling
    └── package.json
```

---

## ⚙️ Getting Started

### Prerequisites
- Node.js `v18+`
- MongoDB (local or Atlas)
- Firebase project with Authentication enabled

### Installation

```bash
# Clone both repositories
git clone https://github.com/DKAbir111/Chill-gamer-client.git
git clone https://github.com/DKAbir111/Chill-gamer-server.git

# Install dependencies for both
cd Chill-gamer-client && npm install
cd ../Chill-gamer-server && npm install
```

### Running the App

```bash
# Start the backend server
cd Chill-gamer-server
npm start

# Start the frontend
cd Chill-gamer-client
npm run dev
```

---

## 🔐 Environment Variables

Create a `.env` file in the **server** directory:

```env
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

Create a `.env` file in the **client** directory:

```env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
```

---

## 🚀 Roadmap

- [ ] Advanced search by game title or developer
- [ ] User profile pages with review history
- [ ] Upvote / downvote system for reviews
- [ ] Email notifications for watchlist updates
- [ ] Admin dashboard for content moderation

---

## 👤 Author

**Darun Karas Abir**

[![GitHub](https://img.shields.io/badge/GitHub-DKAbir111-181717?style=for-the-badge&logo=github)](https://github.com/DKAbir111)

---

<div align="center">

⭐ **Found this useful? Drop a star and share it!** ⭐

*Built with ❤️ — Happy Gaming!*

</div>

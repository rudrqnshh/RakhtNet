# Lifeblood Network 🩸

A modern, full-stack blood donation platform connecting donors, recipients, and blood banks in real-time. Built with React, Node.js, and MongoDB, Lifeblood Network aims to revolutionize the blood donation ecosystem by making it more accessible, efficient, and user-friendly.

## 🌟 Vision

Lifeblood Network was created with a simple yet powerful vision: to save lives by making blood donation and access more efficient. We believe that no one should have to struggle to find blood in times of need. Our platform bridges the gap between blood donors and recipients, creating a seamless network of life-saving connections.

## ✨ Features

- 🔍 Real-time blood availability search
- 📍 Location-based donor matching
- 🔐 Secure user authentication
- 📱 Responsive design for all devices
- 🗺️ Interactive map integration
- 📊 Blood bank inventory management
- 🔔 Emergency blood request alerts
- 📱 Mobile-friendly interface

## 🛠️ Tech Stack

### Frontend
- React.js
- TailwindCSS
- Framer Motion
- Mapbox GL
- Axios
- React Router

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- Passport.js
- JWT Authentication

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/lifeblood-network.git
cd lifeblood-network
```

2. Install server dependencies
```bash
cd server
npm install
```

3. Install client dependencies
```bash
cd ../client
npm install
```

4. Set up environment variables

Create a `.env` file in the server directory:
```env
PORT=5000
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
```

Create a `.env` file in the client directory:
```env
REACT_APP_API_URL=http://localhost:5000
REACT_APP_MAPBOX_TOKEN=your_mapbox_token
```

5. Start the development servers

In the server directory:
```bash
npm run dev
```

In the client directory:
```bash
npm start
```

## 📁 Project Structure

```
lifeblood-network/
├── client/                 # React frontend
│   ├── public/            # Static files
│   └── src/               # Source files
├── server/                # Node.js backend
│   ├── controllers/       # Route controllers
│   ├── models/           # Database models
│   ├── routes/           # API routes
│   └── middleware/       # Custom middleware
└── README.md
```

## 🔒 Environment Variables

### Server (.env)
- `PORT`: Server port number
- `MONGODB_URI`: MongoDB connection string
- `JWT_SECRET`: Secret key for JWT token generation
- `GOOGLE_CLIENT_ID`: Google OAuth client ID
- `GOOGLE_CLIENT_SECRET`: Google OAuth client secret

### Client (.env)
- `REACT_APP_API_URL`: Backend API URL
- `REACT_APP_MAPBOX_TOKEN`: Mapbox API token

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the ISC License.

## 👥 Authors

- Chandan 

---

Made with ❤️ for humanity 

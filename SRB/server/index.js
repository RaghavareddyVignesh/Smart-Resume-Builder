import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';

import resumeRoutes from './routes/resumeRoutes.js';
import userRoutes from './routes/userRoutes.js';
import aiRoutes from './routes/aiRoutes.js'; // ✅ AI route

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5002;

// ✅ Allow CORS for Vite frontend (localhost:5173 or fixed port)
app.use(cors({
  origin: 'http://localhost:5173', // ✅ Adjust to match your frontend port
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

app.use(express.json());

// ✅ ROUTES
app.use('/api/resumes', resumeRoutes);
app.use('/api/users', userRoutes);
app.use('/api/ai', aiRoutes); // ✅ OpenAI Suggestion Route

// ✅ Debug Logger
app.use((req, res, next) => {
  console.log(`➡️ ${req.method} ${req.url}`);
  next();
});

// ✅ Health Check Route
app.get('/', (req, res) => {
  res.send('✅ Smart Resume Builder API is Running.');
});

// ✅ Connect to MongoDB and Start Server
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('✅ MongoDB connected');
    app.listen(PORT, () => console.log(`✅ Server running on http://localhost:${PORT}`));
  })
  .catch((err) => {
    console.error('❌ MongoDB connection error:', err);
    process.exit(1); // exit on DB failure
  });
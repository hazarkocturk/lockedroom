import express from 'express';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.routes.js';
import cookieParser from 'cookie-parser';
import messageRoutes from './routes/message.routes.js';
import userRoutes from './routes/user.routes.js';
import connectToMongoDB from './db/connectToMongoDB.js';
import cors from 'cors';

const app = express();

dotenv.config();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(cookieParser());

// Cors configuration
const allowedOrigins = ['https://lokkedroom.netlify.app'];
const corsOptions = {
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
  methods: ['GET', 'POST'], // Add the allowed methods here
  allowedHeaders: ['Content-Type', 'Authorization'], // Add the allowed headers here
};

app.use(cors(corsOptions));

// Routes
app.get('/', (req, res) => {
  res.send('Welcome to the Lokedroom APII');
});
app.use('/auth', authRoutes);
app.use('/messages', messageRoutes);
app.use('/users', userRoutes);

// Start the server
app.listen(PORT, () => {
  connectToMongoDB();
  console.log(`Server started on http://localhost:${PORT}`);
});

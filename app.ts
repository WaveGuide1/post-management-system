import express, { Application, Request, Response } from 'express';
import connectDB from './src/config/db_config';
import dotenv from 'dotenv';

dotenv.config();

const app: Application = express();

// Connect to database
connectDB();

// Middleware
app.use(express.json());

// Routes


// Error handling middleware


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

export default app;
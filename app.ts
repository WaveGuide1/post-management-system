import express from 'express';
import dotenv from 'dotenv';
import connectDB from './src/config/db_config';
import authRoutes from './src/routes/authRoutes';
import { errorHandler } from './src/utils/customException';
import { setupSwagger } from './src/utils/swagger';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 7000;

app.use(express.json());

connectDB();

app.use('/api/auth', authRoutes);

setupSwagger(app);

app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
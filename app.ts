import express from 'express';
import dotenv from 'dotenv';
import connectDB from './src/config/db_config';
import authRoutes from './src/routes/authRoutes';
import postRoutes from './src/routes/postRoutes';
import { errorHandler } from './src/utils/customException';
import { setupSwagger } from './src/utils/swagger';
import commentRoutes from './src/routes/commentRoutes';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 7000;

app.use(express.json());

connectDB();

app.use('/api/auth', authRoutes);
app.use('/api', postRoutes);
app.use('/api', commentRoutes);

setupSwagger(app);

app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
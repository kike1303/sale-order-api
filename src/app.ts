import dotenv from 'dotenv';
dotenv.config();

import express, { Express } from 'express';
import saleOrderItemRoutes from './routes/saleOrderItemRoutes';
import cors from 'cors';

const app: Express = express();

app.use(cors());

app.use(express.json());
app.use('/api', saleOrderItemRoutes);

export default app;

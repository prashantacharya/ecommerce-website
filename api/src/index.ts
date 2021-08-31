import express, { Request, Response, NextFunction } from 'express';

import apiRouter from './api.routes';
import createError from './utils/createError';

import { config } from 'dotenv';
config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded());

app.use('/api/v1/', apiRouter);

app.use((req: Request, res: Response, next: NextFunction) => {
  next(createError(404, 'Route not found'));
});

app.use((error: any, req: Request, res: Response, next: NextFunction) => {
  res.statusCode = error.statusCode || 503;
  res.send({
    status: 'Error',
    message: error.message || 'Something went wrong',
  });
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});

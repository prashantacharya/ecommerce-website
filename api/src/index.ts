import express from 'express';

import apiRouter from './api.routes';

import { config } from 'dotenv';
config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded());

app.use('/api/v1/', apiRouter);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});

import { Router } from 'express';
import { signUp } from './authController';

const authRouter = Router();

authRouter.post('/signup', signUp);

export default authRouter;

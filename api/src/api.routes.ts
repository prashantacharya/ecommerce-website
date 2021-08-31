import { Request, Response, Router } from 'express';
import successResponse from './utils/successResponse';

import authRouter from './Auth/authRoutes';

const router = Router();

router.get('/', (req: Request, res: Response) => {
  res.send(successResponse({ message: 'App Running Successfully' }));
});

router.use('/auth', authRouter);

export default router;

import { Request, Response } from 'express';

import successResponse from '../utils/successResponse';

export const signUp = (req: Request, res: Response): void => {
  res.send(successResponse('User created successfully'));
};

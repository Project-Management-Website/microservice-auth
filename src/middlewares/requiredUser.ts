import { Request, Response, NextFunction } from 'express';
import { ResponseWithAuth } from '../helpers/express.helper';

const requireUser = (_req: Request, res: ResponseWithAuth, next: NextFunction) => {
  const user = res.locals.user;
  if (!user) {
    return res.status(401).json({
      code: 401,
      message: 'missing auth information',
    });
  }

  return next();
};

export default requireUser;

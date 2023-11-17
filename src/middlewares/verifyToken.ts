import { NextFunction, Request, Response } from 'express';
import { verifyJwt } from '../lib/jwt.lib';
import * as dotenv from 'dotenv'
import createHttpError from 'http-errors';

export const verifyToken = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    dotenv.config();
    const accessToken = req.headers['jwt-token']
    
    if (!accessToken) {
      next(createHttpError[401]);
    }

    const { decoded } = verifyJwt(
      accessToken as string,
      process.env.JWT_SECRET as string
    );
    if (decoded) {
      res.locals.user = decoded;
    }
    
    return next();
  } catch (err) {
    next(err);
  }
};

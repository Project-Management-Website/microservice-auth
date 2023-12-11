import { Response } from 'express';
import { IJWTPayload } from '../lib/jwt.lib';

export interface ResponseWithAuth extends Response {
  locals: {
    user: IJWTPayload;
  };
}

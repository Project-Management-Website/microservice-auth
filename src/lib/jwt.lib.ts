import { IJwtData } from "../services/users/user.model";
import jwt from "jsonwebtoken";

export interface IJWTPayload {
    user: IJwtData;
  }

interface IVerifyResult {
  valid: boolean;
  expired: boolean;
  decoded: IJWTPayload | null;
}
  
  export function signJwt(
    payload: IJWTPayload,
    secretOrPublicKey: string,
    options?: jwt.SignOptions | undefined
  ): string {
    const token = jwt.sign(payload, secretOrPublicKey, {
      ...(options && options),
    });
    return token;
  }

  export function verifyJwt(
    token: string,
    secretOrPublicKey: string
  ): IVerifyResult {
    try {
      const decoded = jwt.verify(token, secretOrPublicKey) as IJWTPayload;
      return {
        valid: true,
        expired: false,
        decoded,
      };
    } catch (e) {
      const err = e as jwt.JsonWebTokenError;
  
      return {
        valid: false,
        expired: err.message === 'jwt expired',
        decoded: null,
      };
    }
  }
  
import { IJwtData } from "../services/users/user.model";
import jwt from "jsonwebtoken";

export interface IJWTPayload {
    user: IJwtData;
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
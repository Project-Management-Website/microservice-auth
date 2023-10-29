import { IJWTPayload, signJwt } from "../lib/jwt.lib";
import { IJwtData } from "../services/users/user.model";

export const appSignJWT = (jwtData: IJwtData): string => {
    const payload: IJWTPayload = {
      user: jwtData,
    };
    return signJwt(payload, process.env.JWT_SECRET as string, {
      expiresIn: '1d',
    });
  };
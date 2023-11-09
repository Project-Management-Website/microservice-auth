import { ServerUnaryCall, sendUnaryData, status } from "@grpc/grpc-js";
import { IUserServer } from "../../proto/user/user_service_grpc_pb";
import { AuthRequest, AuthResponse } from "../../proto/user/user_service_pb";
import { verifyJwt } from "../../lib/jwt.lib";
import * as dotenv from "dotenv";
import { getUser } from "./user.service";

export class UserServer implements IUserServer {
    
    [name: string]: import('@grpc/grpc-js').UntypedHandleCall;
    async auth(
        call: ServerUnaryCall<AuthRequest, AuthResponse>,
        callback: sendUnaryData<AuthResponse>
    ) {
        dotenv.config();
        try {
            const { decoded } = verifyJwt(
                call.request.getToken() as string,
                process.env.JWT_SECRET as string
            );
            if (!decoded) {
                throw new Error('Invalid token');
            }

            const user = await getUser(
                { uuid: decoded.user.uuid },
                {
                    uuid: 1,
                    username: 1,
                }
            );
            if (!user) {
                throw new Error('User not found');
            }
            const res = new AuthResponse();
            res.setUuid(user.uuid);
            res.setUsername(user.username);

            callback(null, res);

        } catch (err) {
            let message = 'Unknown Error';

            if (err instanceof Error) message = err.message;
            callback(
                {
                    code: status.INTERNAL,
                    message,
                },
                null
            );
        }
    }
}
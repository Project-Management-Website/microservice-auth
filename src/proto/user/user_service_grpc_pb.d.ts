// package: services.user.v1
// file: user/user_service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as user_user_service_pb from "../user/user_service_pb";

interface IUserService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    auth: IUserService_IAuth;
    getUser: IUserService_IgetUser;
}

interface IUserService_IAuth extends grpc.MethodDefinition<user_user_service_pb.AuthRequest, user_user_service_pb.AuthResponse> {
    path: "/services.user.v1.User/Auth";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<user_user_service_pb.AuthRequest>;
    requestDeserialize: grpc.deserialize<user_user_service_pb.AuthRequest>;
    responseSerialize: grpc.serialize<user_user_service_pb.AuthResponse>;
    responseDeserialize: grpc.deserialize<user_user_service_pb.AuthResponse>;
}
interface IUserService_IgetUser extends grpc.MethodDefinition<user_user_service_pb.GetUserRequest, user_user_service_pb.GetUserResponse> {
    path: "/services.user.v1.User/getUser";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<user_user_service_pb.GetUserRequest>;
    requestDeserialize: grpc.deserialize<user_user_service_pb.GetUserRequest>;
    responseSerialize: grpc.serialize<user_user_service_pb.GetUserResponse>;
    responseDeserialize: grpc.deserialize<user_user_service_pb.GetUserResponse>;
}

export const UserService: IUserService;

export interface IUserServer extends grpc.UntypedServiceImplementation {
    auth: grpc.handleUnaryCall<user_user_service_pb.AuthRequest, user_user_service_pb.AuthResponse>;
    getUser: grpc.handleUnaryCall<user_user_service_pb.GetUserRequest, user_user_service_pb.GetUserResponse>;
}

export interface IUserClient {
    auth(request: user_user_service_pb.AuthRequest, callback: (error: grpc.ServiceError | null, response: user_user_service_pb.AuthResponse) => void): grpc.ClientUnaryCall;
    auth(request: user_user_service_pb.AuthRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_user_service_pb.AuthResponse) => void): grpc.ClientUnaryCall;
    auth(request: user_user_service_pb.AuthRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_user_service_pb.AuthResponse) => void): grpc.ClientUnaryCall;
    getUser(request: user_user_service_pb.GetUserRequest, callback: (error: grpc.ServiceError | null, response: user_user_service_pb.GetUserResponse) => void): grpc.ClientUnaryCall;
    getUser(request: user_user_service_pb.GetUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_user_service_pb.GetUserResponse) => void): grpc.ClientUnaryCall;
    getUser(request: user_user_service_pb.GetUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_user_service_pb.GetUserResponse) => void): grpc.ClientUnaryCall;
}

export class UserClient extends grpc.Client implements IUserClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public auth(request: user_user_service_pb.AuthRequest, callback: (error: grpc.ServiceError | null, response: user_user_service_pb.AuthResponse) => void): grpc.ClientUnaryCall;
    public auth(request: user_user_service_pb.AuthRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_user_service_pb.AuthResponse) => void): grpc.ClientUnaryCall;
    public auth(request: user_user_service_pb.AuthRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_user_service_pb.AuthResponse) => void): grpc.ClientUnaryCall;
    public getUser(request: user_user_service_pb.GetUserRequest, callback: (error: grpc.ServiceError | null, response: user_user_service_pb.GetUserResponse) => void): grpc.ClientUnaryCall;
    public getUser(request: user_user_service_pb.GetUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_user_service_pb.GetUserResponse) => void): grpc.ClientUnaryCall;
    public getUser(request: user_user_service_pb.GetUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_user_service_pb.GetUserResponse) => void): grpc.ClientUnaryCall;
}

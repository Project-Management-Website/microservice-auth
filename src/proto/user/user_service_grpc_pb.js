// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var user_user_service_pb = require('../user/user_service_pb.js');

function serialize_services_user_v1_AuthRequest(arg) {
  if (!(arg instanceof user_user_service_pb.AuthRequest)) {
    throw new Error('Expected argument of type services.user.v1.AuthRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_user_v1_AuthRequest(buffer_arg) {
  return user_user_service_pb.AuthRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_services_user_v1_AuthResponse(arg) {
  if (!(arg instanceof user_user_service_pb.AuthResponse)) {
    throw new Error('Expected argument of type services.user.v1.AuthResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_user_v1_AuthResponse(buffer_arg) {
  return user_user_service_pb.AuthResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_services_user_v1_GetUserRequest(arg) {
  if (!(arg instanceof user_user_service_pb.GetUserRequest)) {
    throw new Error('Expected argument of type services.user.v1.GetUserRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_user_v1_GetUserRequest(buffer_arg) {
  return user_user_service_pb.GetUserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_services_user_v1_GetUserResponse(arg) {
  if (!(arg instanceof user_user_service_pb.GetUserResponse)) {
    throw new Error('Expected argument of type services.user.v1.GetUserResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_user_v1_GetUserResponse(buffer_arg) {
  return user_user_service_pb.GetUserResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var UserService = exports.UserService = {
  auth: {
    path: '/services.user.v1.User/Auth',
    requestStream: false,
    responseStream: false,
    requestType: user_user_service_pb.AuthRequest,
    responseType: user_user_service_pb.AuthResponse,
    requestSerialize: serialize_services_user_v1_AuthRequest,
    requestDeserialize: deserialize_services_user_v1_AuthRequest,
    responseSerialize: serialize_services_user_v1_AuthResponse,
    responseDeserialize: deserialize_services_user_v1_AuthResponse,
  },
  getUser: {
    path: '/services.user.v1.User/getUser',
    requestStream: false,
    responseStream: false,
    requestType: user_user_service_pb.GetUserRequest,
    responseType: user_user_service_pb.GetUserResponse,
    requestSerialize: serialize_services_user_v1_GetUserRequest,
    requestDeserialize: deserialize_services_user_v1_GetUserRequest,
    responseSerialize: serialize_services_user_v1_GetUserResponse,
    responseDeserialize: deserialize_services_user_v1_GetUserResponse,
  },
};

exports.UserClient = grpc.makeGenericClientConstructor(UserService);

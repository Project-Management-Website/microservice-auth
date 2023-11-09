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
};

exports.UserClient = grpc.makeGenericClientConstructor(UserService);

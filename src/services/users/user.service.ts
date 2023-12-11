import { FilterQuery, ProjectionType, QueryOptions } from "mongoose";
import userModel, { IUser, IUserModel } from "./user.model";
import createError from "http-errors";
import bcrypt from "bcrypt";
import { checkMongoErr } from "../../helpers/catchError.helper";

export async function getUser(
    conditions: FilterQuery<IUser>,
    select: ProjectionType<IUser> = {},
    options: QueryOptions = { lean: true }
): Promise<IUserModel | null> {
    const query: FilterQuery<IUser> = {
        ...conditions,
      };
    
      try {
        const user = await userModel.findOne(query, select, options);
        if (!user) {
          throw new createError.NotFound('User not found');
        }
        return user;
      } catch (err) {
        throw checkMongoErr(err as Error);
      }
}

export async function getUsers(
  conditions: FilterQuery<IUser>,
  select: ProjectionType<IUser> = {},
  options: QueryOptions = { lean: true }
): Promise<IUserModel[]> {
  const query: FilterQuery<IUser> = {
    ...conditions,
  };

  try {
    const user = await userModel.find(query, select, options);
    
    return user;
  } catch (err) {
    throw checkMongoErr(err as Error);
  }
}

export async function createUser(input: IUser): Promise<IUser> {
  try {
    input.password = bcrypt.hashSync(input.password || '', bcrypt.genSaltSync(10, 'b'));
    const newUser = await userModel.create(input);
    return newUser;
  } catch (err) {
    throw checkMongoErr(err as Error);
  }
}

export async function countUser(
  conditions: FilterQuery<IUserModel>
): Promise<number> {
  const query: FilterQuery<IUserModel> = {
    ...conditions,
  };

  try {
    const result = await userModel.countDocuments(query);
    return result || 0;
  } catch (err) {
    throw checkMongoErr(err as Error);
  }
}
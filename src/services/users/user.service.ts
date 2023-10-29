import { FilterQuery, ProjectionType, QueryOptions } from "mongoose";
import userModel, { IUser } from "./user.model";
import createHttpError from "http-errors";

export async function getUser(
    conditions: FilterQuery<IUser>,
    select: ProjectionType<IUser> = {},
    options: QueryOptions = { lean: true }
): Promise<IUser | null> {
    const query: FilterQuery<IUser> = {
        ...conditions,
      };
    
      try {
        const user = await userModel.findOne(query, select, options);
        if (!user) {
          throw new createHttpError.NotFound('User not found');
        }
        return user;
      } catch (err) {
        throw createHttpError(err as Error);
      }
}
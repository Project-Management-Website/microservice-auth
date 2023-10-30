import { NextFunction, Request } from "express";
import { GetUserInput, LoginInput, RegisterInput } from "./user.validate";
import { countUser, createUser, getUser } from "./user.service";
import createHttpError from "http-errors";
import { v4 } from "uuid"
import { IJwtData, IUser } from "./user.model";
import { appSignJWT } from "../../helpers/auth.helper";

const login = async (
    req: Request<never, never, LoginInput['body']>,
    res: any,
    next: NextFunction,
) => {
    try {
        const user = await getUser(
            { username: req.body.username },
            {
                username: 1,
                password: 1,
                uuid: 1,
            },
            { lean: false, }
        );
        if (!user) {
            throw new createHttpError.BadRequest(
                'Sorry, you have entered an invalid username and/or password'
            );
        }

        const passwordIsMatch = await user.comparePassword(req.body.password);
        if (!passwordIsMatch) {
            throw new createHttpError.BadRequest(
                'Sorry, you have entered an invalid username and/or password'
              );
        }

        const jwtData: IJwtData = {
            uuid: user.uuid,
            username: user.username,
          };
      
        const token: string = appSignJWT(jwtData)

        res.status(200).json({
            message: 'Login success',
            data: token,
        });

    } catch (err) {
        next(err);
    }
}

const register = async (
    req: Request<never, never, RegisterInput['body']>,
    res: any,
    next: NextFunction
) => {
    try {

        const checkUsername = await countUser({
            username: req.body.username,
        });
        if (checkUsername > 0) {
            throw new createHttpError.Conflict('Username already exists');
        }

        const newUserData: IUser = {
            uuid: v4(),
            ...req.body,
            created_at: new Date()
        };

        const newUser = await createUser(newUserData);

        res.status(201).json({
            message: 'success',
            data: newUser,
          });

    } catch (err) {
        next(err);
    }
}

export const info = async (
    req: Request<GetUserInput['params']>,
    res: any,
    next: NextFunction
) => {
    try {
        const user = await getUser(
            {
                uuid: req.params.id
            },
            {
                uuid: 1,
                username: 1,
                email: 1,
                created_at: 1,
            }
        )
            
    } catch (err) {
        next(err);
    }
}

export default {
    login,
    register,
    info,
}
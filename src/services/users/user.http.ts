import { NextFunction, Request } from "express";
import { LoginInput } from "./user.validate";
import { getUser } from "./user.service";
import createHttpError from "http-errors";

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
    } catch (err) {
        
    }
}
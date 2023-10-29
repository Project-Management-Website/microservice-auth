import { Expression } from "mongoose";
import userRoute from "../services/users/user.route"
import validate from "../middlewares/validate";
import { loginSchema } from "../services/users/user.validate";

export function createRoute(app: Expression) {
    app.use('/users', validate(loginSchema), userRoute)
}
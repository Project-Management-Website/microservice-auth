import { Expression } from "mongoose";
import userRoute from "../services/users/user.route"

export function createRoute(app: Expression) {
    app.use('/user', userRoute)
}
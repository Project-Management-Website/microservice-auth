import express from "express"
import userHandler from "./user.http"
import validate from "../../middlewares/validate";
import { loginSchema, registerSchema } from "./user.validate";
import { verifyToken } from "../../middlewares/verifyToken";

const router = express.Router();

router.post('/login', validate(loginSchema), userHandler.login)

router.get('/info/:id', verifyToken, userHandler.info);

router.get('/list', verifyToken, userHandler.list);

router.post('/register', [validate(registerSchema)], userHandler.register);

export = router;
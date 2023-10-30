import { Expression } from "mongoose";
import express from "express"
import { createRoute } from "./routes";

export function createServer() :Expression {
    const app = express();
    app.use(express.json())
    createRoute(app);

    return app;
}
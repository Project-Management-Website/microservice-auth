import { Expression } from "mongoose";
import express from "express"

export function createServer() :Expression {
    const app = express();
    app.use(express.json())

    
}
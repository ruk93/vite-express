import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();

const app: Express = express();

app.get("/api", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

export default app;

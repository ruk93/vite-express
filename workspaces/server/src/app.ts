import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import clientEnvironmentVariables from "./features/clientEnvironmentVariables";
import compression from "compression";

dotenv.config();

const app: Express = express();
app.use(compression());
app.get("/api", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.get("/env.js", clientEnvironmentVariables);

export default app;

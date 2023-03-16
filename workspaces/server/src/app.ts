import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import path from "path";
import proxy from "express-http-proxy";

dotenv.config();

const app: Express = express();

const devMode = process.env.NODE_ENV === "dev";
const clientPort = process.env.CLIENT_PORT ?? 5173;

app.get("/api", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

if (devMode) {
  app.use("/", proxy(`localhost:${clientPort}`));
} else {
  app.use(express.static(path.join(__dirname, "client"), { index: false }));
  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "client/index.html"));
  });
}

export default app;

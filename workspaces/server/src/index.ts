import express, { Request, Response } from "express";
import path from "path";
import proxy from "express-http-proxy";
import app from "./app";

const devMode = process.env.NODE_ENV === "dev";
const clientPort = process.env.CLIENT_PORT ?? 5173;
const port = process.env.PORT;

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

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});

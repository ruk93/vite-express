import { Request, Response } from "express";

const getRandomInt = (max:number) => {
    return Math.floor(Math.random() * max);
  }

const envJs = (count:number) => `
window.appEnv = {
    initialCount:${count}
}
`

const clientEnvironmentVariables = (req: Request, res: Response) => {
    res.set('Cache-control', 'public, max-age=300');
    res.set("Content-Type","text/javascript");
    res.send(envJs(getRandomInt(100)));
};

export default clientEnvironmentVariables;

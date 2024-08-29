import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config(); //dotenv

const app = express();
const port: number | string = 3000;

app.get("/", (req: Request, res: Response) => {
  res.send("oke");
});

app.listen(port, () => {
  console.log(`server is running at ${port}`);
});

import express, { type Request, type Response } from "express";

const app = express();

app.get("/", (req: Request, res: Response) => {
  return res.json({
    status: "success!!!",
  });
});

app.listen(4000, () => {
  console.log("Listening on port 4000!");
});

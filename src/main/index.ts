import express, { Request, Response } from "express";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());


app.get("/", (req, res) => {
  return res.json({ok: true});
});

app.listen(3333, () => {
  console.log("server is running on port 3333!");
});
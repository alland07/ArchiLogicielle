import express from "express";
import { createServer } from "http";

const app = express();
const server = createServer(app);

server.listen(3000, () => {
  console.log("Server is running on port 3000");
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

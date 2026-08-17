import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("hehe");
});

app.listen(3000, () => {
  console.log("Server run on 3000");
});

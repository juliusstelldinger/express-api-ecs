import express from "express";

const PORT = 5050;
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(PORT, () => {
  console.log(`App is listening on Port ${PORT}`);
});

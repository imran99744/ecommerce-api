const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DB is connected"))
  .catch((err) => console.log(err));

const port = process.env.PORT || 7000;

app.get("/", (req, res) => {
  res.send("welcome to never ending learning world");
});

app.listen(port, () => {
  console.log(`Server is up and running on ${port}`);
});

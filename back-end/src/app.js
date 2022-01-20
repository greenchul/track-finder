const express = require("express");
const path = require("path");
const tracksRouter = require("./routes/tracks");

const app = express();

app.use(express.json());

app.use(tracksRouter);

app.get("/", (req, res) => {
  res.status(200).send("Back end is here");
});
module.exports = app;

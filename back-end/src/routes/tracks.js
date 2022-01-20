const express = require("express");
const fs = require("fs");

const tracksRouter = express.Router();

tracksRouter.get("/tracks", (req, res) => {
  res.status(200).send("Hello from tracks");
});

tracksRouter.get("/tracks/:id", (req, res) => {
  const id = req.params.id;
  fs.readFile("tracks.json", "utf8", (err, data) => {
    if (err) {
      console.log(err);
    } else {
      let tracks = JSON.parse(data).tracks;
      const [result] = tracks.filter((track) => {
        return track.id == id;
      });
      if (result) {
        res.status(200).send(result);
      } else {
        res.status(404).send({ error: "Track not found" });
      }
    }
  });
});

tracksRouter.get("/artist/:artist", (req, res) => {
  const artist = req.params.artist;
  fs.readFile("tracks.json", "utf8", (err, data) => {
    if (err) {
      console.log(err);
    } else {
      let tracks = JSON.parse(data).tracks;
      const results = tracks.filter((track) => {
        return track.artist == artist;
      });
      if (results.length > 0) {
        res.status(200).send(results);
      } else {
        res.status(404).send({ error: "Artist not found" });
      }
    }
  });
});
module.exports = tracksRouter;

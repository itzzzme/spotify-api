// index.js
import express from "express";
import dotenv from "dotenv";
import {
  getSingleAlbum,
  getMultipleAlbumsHandler,
  getAlbumTracksHandler,
} from "../src/controllers/albums.controller.js";
import {
  getArtistHandler,
  getMultipleArtistsHandler,
  getArtistTopTracksHandler,
  getRelatedArtistHandler,
} from "../src/controllers/artists.controller.js";

dotenv.config();

const port = process.env.PORT || 6969;
const app = express();

app.get("/", (req, res) => {
  res.json({ Message: "Welcome to API" });
});

app.get("/albums/:id", getSingleAlbum);
app.get("/albums", getMultipleAlbumsHandler);
app.get("/albums/tracks/:id", getAlbumTracksHandler);
app.get("/artists/:id", getArtistHandler);
app.get("/artists", getMultipleArtistsHandler);
app.get("/artists/tracks/:id", getArtistTopTracksHandler);
app.get("/artists/relatedartists/:id", getRelatedArtistHandler);

app.get("*", (req, res) => {
  res.status(404).json({ Message: "404 not found" });
});

app.listen(port, () => {
  console.log(`Listening on https://localhost:${port}`);
});

import express from "express";
import dotenv from "dotenv";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
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
  getArtistsAlbumsHandler,
} from "../src/controllers/artists.controller.js";
import {
  getPlaylistHandler,
  getPlaylistItemHandler,
  getUserPlaylistHandler,
  getFeaturedPlaylistHandler,
  getCategoryPlaylistHandler,
  getPlaylistImageHandler,
} from "../src/controllers/playlists.controller.js";
import {
  getShowHandler,
  getMultipleShowsHandler,
  getShowsEpisodesHandler,
} from "../src/controllers/shows.controller.js";
import {
  getTrackHandler,
  getMultipleTracksHandler,
  getTracksAudioFeaturesHandler,
  getMultipleTracksAudioFeaturesHandler,
  getTracksAudioAnalysisHandler,
} from "../src/controllers/tracks.controller.js";
import { getRecommendationsHandler } from "../src/controllers/recommendation.controller.js";
import { getGenreHandler } from "../src/controllers/genre.controller.js";
import { getMarketHandler } from "../src/controllers/market.controller.js";
import { handleException } from "../src/controllers/exception.controller.js";
import { handleHomePage } from "../src/controllers/home.controller.js";

dotenv.config();

const port = process.env.PORT || 6969;
const app = express();
const __filename = fileURLToPath(import.meta.url);
const baseDir = dirname(dirname((__filename)));
app.use(express.static(join(baseDir, "public")));

const albumRoutes = express.Router();
albumRoutes.get("/:id", getSingleAlbum);
albumRoutes.get("/", getMultipleAlbumsHandler);
albumRoutes.get("/tracks/:id", getAlbumTracksHandler);

const artistRoutes = express.Router();
artistRoutes.get("/:id", getArtistHandler);
artistRoutes.get("/", getMultipleArtistsHandler);
artistRoutes.get("/tracks/:id", getArtistTopTracksHandler);
artistRoutes.get("/albums/:id", getArtistsAlbumsHandler);
artistRoutes.get("/relatedartists/:id", getRelatedArtistHandler);

const playlistRoutes = express.Router();
playlistRoutes.get("/:id", getPlaylistHandler);
playlistRoutes.get("/item/:id", getPlaylistItemHandler);
playlistRoutes.get("/user/:username", getUserPlaylistHandler);
playlistRoutes.get("/featured/:id", getFeaturedPlaylistHandler);
playlistRoutes.get("/category/:id", getCategoryPlaylistHandler);
playlistRoutes.get("/image/:id", getPlaylistImageHandler);

const showRoutes = express.Router();
showRoutes.get("/:id", getShowHandler);
showRoutes.get("/", getMultipleShowsHandler);
showRoutes.get("/episode/:id", getShowsEpisodesHandler);

const trackRoutes = express.Router();
trackRoutes.get("/:id", getTrackHandler);
trackRoutes.get("/", getMultipleTracksHandler);
trackRoutes.get("/audio-features/:id", getTracksAudioFeaturesHandler);
trackRoutes.get("/audio-features", getMultipleTracksAudioFeaturesHandler);
trackRoutes.get("/audio-analysis/:id", getTracksAudioAnalysisHandler);

app.use("/v1/albums", albumRoutes);
app.use("/v1/artists", artistRoutes);
app.use("/v1/playlists", playlistRoutes);
app.use("/v1/shows", showRoutes);
app.use("/v1/tracks", trackRoutes);

app.get("/v1/recommendations", getRecommendationsHandler);
app.get("/v1/get-genre", getGenreHandler);
app.get("/v1/market", getMarketHandler);

app.get("/", handleHomePage);

app.use("*", handleException);

app.listen(port, () => {
  // console.log(`Listening on ${port}`);
  console.log("Hola!");
});

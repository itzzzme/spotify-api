import {
  getArtist,
  getMultipleArtists,
  getArtistTopTracks,
  getArtistsAlbums,
  getRelatedArtist,
} from "../extractors/artists/getArtist.extractor.js";

const createHandler =
  (fetchFunction, paramsKey = null, queryKey = null) =>
  async (req, res) => {
    try {
      const paramsValue = paramsKey ? req.params[paramsKey] : null;
      const queryValue = queryKey ? req.query[queryKey] : null;

      if ((paramsKey && !paramsValue) || (queryKey && !queryValue)) {
        res.status(400).json({ error: `No ${paramsKey || queryKey} provided` });
        return;
      }

      const value = paramsValue
        ? encodeURIComponent(paramsValue)
        : encodeURIComponent(queryValue);
      const data = await fetchFunction(value);
      res.json({ result: data });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Failed to fetch data" });
    }
  };

export const getArtistHandler = createHandler(getArtist, "id");
export const getMultipleArtistsHandler = createHandler(
  getMultipleArtists,
  null,
  "ids"
);
export const getArtistTopTracksHandler = createHandler(
  getArtistTopTracks,
  "id"
);
export const getArtistsAlbumsHandler = createHandler(getArtistsAlbums, "id");
export const getRelatedArtistHandler = createHandler(getRelatedArtist, "id");

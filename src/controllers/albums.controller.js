import {
  getAlbum,
  getMultipleAlbums,
  getAlbumTracks,
} from "../extractors/albums/getAlbum.extractor.js";

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
      res.status(500).json({ error: "Failed to fetch data" });
    }
  };

export const getSingleAlbum = createHandler(getAlbum, "id");
export const getMultipleAlbumsHandler = createHandler(
  getMultipleAlbums,
  null,
  "ids"
);
export const getAlbumTracksHandler = createHandler(getAlbumTracks, "id");

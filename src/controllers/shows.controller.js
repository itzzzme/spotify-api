import {
  getShow,
  getMultipleShows,
  getShowsEpisodes,
} from "../extractors/shows/getshows.extractor.js";

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

export const getShowHandler = createHandler(getShow, "id");
export const getMultipleShowsHandler = createHandler(
  getMultipleShows,
  null,
  "ids"
);
export const getShowsEpisodesHandler = createHandler(getShowsEpisodes, "id");

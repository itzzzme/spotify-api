import {
  getTrack,
  getMultipleTracks,
  getTracksAudioFeatures,
  getMultipleTracksAudioFeatures,
  getTracksAudioAnalysis,
} from "../extractors/tracks/getTracks.extractor.js";

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

export const getTrackHandler = createHandler(getTrack, "id");

export const getMultipleTracksHandler = createHandler(
  getMultipleTracks,
  null,
  "ids"
);
export const getTracksAudioFeaturesHandler = createHandler(
  getTracksAudioFeatures,
  "id"
);

export const getMultipleTracksAudioFeaturesHandler = createHandler(
  getMultipleTracksAudioFeatures,
  null,
  "ids"
);

export const getTracksAudioAnalysisHandler = createHandler(
  getTracksAudioAnalysis,
  "id"
);

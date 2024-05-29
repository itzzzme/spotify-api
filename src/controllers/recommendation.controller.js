import { getRecommendation } from "../extractors/recommendation/getRecommendatoin.extractor.js";

const createSeedHandler = (fetchFunction) => async (req, res) => {
  try {
    const { seed_artists, seed_genres, seed_tracks } = req.query;
    let query = "";

    if (seed_artists)
      query += `seed_artists=${encodeURIComponent(seed_artists)}`;
    if (seed_genres)
      query += `${query ? "&" : ""}seed_genres=${encodeURIComponent(
        seed_genres
      )}`;
    if (seed_tracks)
      query += `${query ? "&" : ""}seed_tracks=${encodeURIComponent(
        seed_tracks
      )}`;

    if (!query) {
      res.status(400).json({ error: "No seed parameters provided" });
      return;
    }

    const data = await fetchFunction(query);
    res.json({ result: data });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to fetch data" });
  }
};

export const getRecommendationsHandler = createSeedHandler(getRecommendation);

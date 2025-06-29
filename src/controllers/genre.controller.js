import { getGenre } from "../extractors/genre/getGenre.extractor.js";

export const getGenreHandler = async (req, res) => {
  try {
    const data = await getGenre();
    res.json({ result: data });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch album data" });
  }
};

import { getArtist } from "../extractors/artists/getArtist.extractor.js";

export const getArtistHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await getArtist(id);
    res.json({ result: data });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch album data" });
  }
};

export const getMultipleArtistsHandler = async (req, res) => {
  const { ids } = req.query;

  if (ids) {
    try {
      const data = await getMultipleArtists(encodeURIComponent(ids));
      res.json({ result: data });
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch albums data" });
    }
  } else {
    res.status(400).json({ error: "No album IDs provided" });
  }
};

export const getArtistTopTracksHandler = async (req, res) => {
  const { id } = req.params;

  if (id) {
    try {
      const data = await getArtistTopTracks(encodeURIComponent(id));
      res.json({ result: data });
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch albums data" });
    }
  } else {
    res.status(400).json({ error: "No album IDs provided" });
  }
};
export const getRelatedArtistHandler = async (req, res) => {
    const { id } = req.params;
  
    if (id) {
      try {
        const data = await getRelatedArtistHandler(encodeURIComponent(id));
        res.json({ result: data });
      } catch (error) {
        res.status(500).json({ error: "Failed to fetch albums data" });
      }
    } else {
      res.status(400).json({ error: "No album IDs provided" });
    }
  };
  
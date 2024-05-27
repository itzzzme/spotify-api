// controllers/albumController.js
import { getAlbum, getMultipleAlbums, getAlbumTracks } from "../extractors/albums/getAlbum.extractor.js";

export const getSingleAlbum = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await getAlbum(id);
    res.json({ result: data });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch album data" });
  }
};

export const getMultipleAlbumsHandler = async (req, res) => {
  const { ids } = req.query;

  if (ids) {
    try {
      const data = await getMultipleAlbums(encodeURIComponent(ids));
      res.json({ result: data });
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch albums data" });
    }
  } else {
    res.status(400).json({ error: "No album IDs provided" });
  }
};

export const getAlbumTracksHandler = async (req, res) => {
  const { id } = req.params;

  if (id) {
    try {
      const data = await getAlbumTracks(encodeURIComponent(id));
      res.json({ result: data });
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch albums data" });
    }
  } else {
    res.status(400).json({ error: "No album IDs provided" });
  }
};

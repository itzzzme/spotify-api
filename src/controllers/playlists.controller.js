import {
  getPlaylist,
  getPlaylistItem,
  getUserPlaylist,
  getFeaturedPlaylist,
  getCategoryPlaylist,
  getPlaylistCoverImage,
} from "../extractors/playlists/getPlaylist.extractor.js";

const createHandler = (fetchFunction) => async (req, res) => {
  try {
    const { id } = req.params;
    const data = await fetchFunction(id);
    res.json({ result: data });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch data" });
  }
};

export const getPlaylistHandler = createHandler(getPlaylist);
export const getPlaylistItemHandler = createHandler(getPlaylistItem);
export const getUserPlaylistHandler = createHandler(getUserPlaylist);
export const getFeaturedPlaylistHandler = createHandler(getFeaturedPlaylist);
export const getCategoryPlaylistHandler = createHandler(getCategoryPlaylist);
export const getPlaylistImageHandler = createHandler(getPlaylistCoverImage);

import {
  basePlaylistUrl,
  baseCategoryUrl,
} from "../../configs/config.js";
import { sendRequest } from "../../helpers/makeRequest.helper.js";

export async function getPlaylist(id) {
  const url = `${basePlaylistUrl}/${id}`;
  return await sendRequest(url);
}

export async function getPlaylistItem(id) {
  const url = `${basePlaylistUrl}/${id}/tracks`;
  return await sendRequest(url);
}

export async function getUserPlaylist(user) {
  const url = `https://api.spotify.com/v1/users/${user}/playlists`;
  return await sendRequest(url);
}

export async function getFeaturedPlaylist() {
  const url = "https://api.spotify.com/v1/browse/featured-playlists";
  return await sendRequest(url);
}

export async function getCategoryPlaylist(category) {
  const url = `${baseCategoryUrl}/${category}/playlists`;
  return await sendRequest(url);
}

export async function getPlaylistCoverImage(id){
    const url=`${basePlaylistUrl}/${id}/images`
    return await sendRequest(url);
}
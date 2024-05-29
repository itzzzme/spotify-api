import { baseArtistUrl } from "../../configs/config.js";
import { sendRequest } from "../../helpers/makeRequest.helper.js";

export async function getArtist(id) {
  const url = `${baseArtistUrl}/${id}`;
  return await sendRequest(url);
}

export async function getMultipleArtists(ids) {
  const url = `${baseArtistUrl}?ids=${ids}`;
  return await sendRequest(url);
}
export async function getArtistsAlbums(id){
  const url = `${baseArtistUrl}/${id}/albums`;
  return await sendRequest(url);
}
export async function getArtistTopTracks(id) {
  const url = `${baseArtistUrl}/${id}/top-tracks`;
  return await sendRequest(url);
}

export async function getRelatedArtist(id) {
  const url = `${baseArtistUrl}/${id}/related-artists`;
  return await sendRequest(url);
}

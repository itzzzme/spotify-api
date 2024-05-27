import axios from "axios";
import { baseArtistUrl } from "../../configs/artist.baseUrl.js";
import { sendRequest } from "../../helpers/makeRequest.helpers.js";

export async function getArtist(id) {
  const url = `${baseArtistUrl}/${id}`;
  return await sendRequest(url);
}

export async function getMultipleArtists(ids) {
  const url = `${baseArtistUrl}?ids=${ids}`;
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

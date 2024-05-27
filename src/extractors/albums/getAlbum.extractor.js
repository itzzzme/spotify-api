import axios from "axios";
import { baseAlbumUrl } from "../../configs/album.baseUrl.js";
import { sendRequest } from "../../helpers/makeRequest.helpers.js";

export async function getAlbum(id) {
  const url = `${baseAlbumUrl}/${id}`;
  return await sendRequest(url);
}

export async function getMultipleAlbums(ids) {
  const url = `${baseAlbumUrl}?ids=${ids}`;
  return await sendRequest(url);
}

export async function getAlbumTracks(id) {
  const url = `${baseAlbumUrl}/${id}/tracks`;
  return await sendRequest(url);
}

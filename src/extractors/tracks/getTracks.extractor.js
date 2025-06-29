import {
  baseTrackUrl,
  baseAudioFeaturesUrl,
  baseAudioAnalysisUrl,
} from "../../configs/config.js";
import { sendRequest } from "../../helpers/makeRequest.helper.js";

export async function getTrack(id) {
  const url = `${baseTrackUrl}/${id}`;
  return await sendRequest(url);
}
export async function getMultipleTracks(ids) {
  const url = `${baseTrackUrl}?ids=${ids}`;
  return await sendRequest(url);
}
export async function getTracksAudioFeatures(id) {
  const url = `${baseAudioFeaturesUrl}/${id}`;
  return await sendRequest(url);
}
export async function getMultipleTracksAudioFeatures(ids) {
  const url = `${baseAudioFeaturesUrl}?ids=${ids}`;
  return await sendRequest(url);
}
export async function getTracksAudioAnalysis(id) {
  const url = `${baseAudioAnalysisUrl}/${id}`;
  return await sendRequest(url);
}

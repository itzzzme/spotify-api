import { baseRecommendationUrl } from "../../configs/config.js";

import { sendRequest } from "../../helpers/makeRequest.helper.js";

export async function getRecommendation(ids) {
  const url = `${baseRecommendationUrl}?${ids}`;
  return await sendRequest(url);
}

import axios from "axios";
import { accessToken, clientToken } from "../../src/parsers/token.parser.js";

export async function sendRequest(url, method = "get", params = {}) {
  const headers = {
    Authorization: "Bearer " + accessToken,
    "Client-Token": clientToken,
  };

  try {
    const response = await axios({
      url,
      method,
      headers,
      ...params,
    });
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch data");
  }
}
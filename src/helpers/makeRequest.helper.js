import axios from "axios";
import { accessToken} from "../parsers/token.parser.js";

export async function sendRequest(url, method = "get", params = {}) {
  const headers = {
    Authorization: "Bearer " + accessToken
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
    // console.log(error);
    throw new Error("Failed to fetch data");
  }
}
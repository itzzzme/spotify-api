import axios from "axios";
// import { accessToken} from "../parsers/token.parser.js";

export async function sendRequest(url, method = "get", params = {}) {

  const { data }=await axios.get("https://raw.githubusercontent.com/itzzzme/spotify-key/refs/heads/main/token.json")
  const accessToken = data.tokens?.[0]?.access_token;

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
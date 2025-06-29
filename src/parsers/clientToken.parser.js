import axios from "axios";
import { clientId } from "./client_id.parser.js";
import { client_data } from "../configs/client_data.js";

export async function getClientToken() {
  client_data.client_id=clientId;
  const headers = {
    Accept: "application/json",
  };
  try {
    const resp = await axios.post(
      "https://clienttoken.spotify.com/v1/clienttoken",
      client_data,
      { headers: headers }
    );
    return resp.data;
  } catch (error) {
    console.error("Error:", error.message);
  }
}
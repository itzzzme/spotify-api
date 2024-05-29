import axios from "axios";
import { clientId } from "./client_id.parser.js";
import { client_data } from "../configs/client_data.js";

(async function getClientToken() {
  client_data.client_id = clientId;
  const headers = {
    Accept: "application/json",
    Referer: "https://open.spotify.com/",
    "User-Agent":
      "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Mobile Safari/537.36",
  };
  try {
    const resp = await axios.post(
      "https://clienttoken.spotify.com/v1/clienttoken",
      client_data,
      { headers: headers }
    );
    console.log(resp.data);
  } catch (error) {
    console.error("Error:", error.message);
  }
})();

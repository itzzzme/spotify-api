import { getClientToken } from "./clientToken.parser.js";
import { response } from "./client_id.parser.js";

const client_token = await getClientToken();

export const clientToken = client_token.granted_token.token;
export const accessToken = response.accessToken;


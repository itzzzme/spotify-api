import { getAccessToken } from "./accessToken.parser.js";
import {generate_flow_ctx} from '../utils/ctx.js'
import {baseUrl}  from "../configs/baseUrl.js";

export const response = await getAccessToken(
  `${baseUrl}/?flow_ctx=${generate_flow_ctx()}`
);

export const clientId = response.clientId;

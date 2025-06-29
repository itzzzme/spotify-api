import axios from "axios";
import * as cheerio from "cheerio";
import { generate_random_id } from "../utils/random_id.js";
import { generate_sp_key } from "../utils/sp_key.js";
import dotenv from "dotenv";

dotenv.config();

export async function getAccessToken(link) {
  const [sp_t, sp_cid, sp_key] = await Promise.all([
    generate_random_id(32),
    generate_random_id(32),
    generate_sp_key(),
  ]); 
  const resp = await axios.get(link, {
    headers: {
      Cookie: `sp_t=${sp_t}; sp_landing=https%3A%2F%2Fopen.spotify.com%2F%3Fsp_cid=${sp_cid}&device=mobile; sp_dc=${process.env.sp_dc};sp_key=${sp_key};&browserGpcFlag=0&hosts=&landingPath=NotLandingPage&groups=s00%3A1%2Cf00%3A1%2Cm00%3A1%2Ct00%3A1%2Ci00%3A1%2Cf11%3A1%2Cm03%3A1`,
    },
  });
  const $ = cheerio.load(resp.data);
  const scriptContent = $("#session").html();
  const sessionData = JSON.parse(scriptContent);
  return sessionData;
}

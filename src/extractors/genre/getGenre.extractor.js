import { baseGenreUrl } from "../../configs/config.js";
import { sendRequest } from "../../helpers/makeRequest.helper.js";

export async function getGenre(){
    const url=baseGenreUrl;
    return await sendRequest(url);
}
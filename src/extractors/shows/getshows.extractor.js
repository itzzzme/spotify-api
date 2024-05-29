import { baseShowUrl } from "../../configs/config.js";
import { sendRequest } from "../../helpers/makeRequest.helper.js";

export async function getShow(id){
    const url=`${baseShowUrl}/${id}`;
    return await sendRequest(url);
}

export async function getMultipleShows(ids){
    const url=`${baseShowUrl}?ids=${ids}`;
    return await sendRequest(url);
}

export async function getShowsEpisodes(id){
    const url=`${baseShowUrl}/${id}/episodes`;
    return await sendRequest(url);
}
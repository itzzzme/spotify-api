import { baseMarketUrl } from "../../configs/config.js";
import { sendRequest } from "../../helpers/makeRequest.helper.js";

export async function getMarket(){
    return await sendRequest(baseMarketUrl);
}
import { getMarket } from "../extractors/markets/getMarket.extractor.js";

export const getMarketHandler = async (req, res) => {
  try {
    const data = await getMarket();
    res.json({ result: data });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch available market" });
  }
};

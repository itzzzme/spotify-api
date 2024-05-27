import { generate_random_id } from "../utils/random_id.js";

export const client_data = {
  client_data: {
    client_version: "1.2.33.0-unknown",
    js_sdk_data: {
      device_brand: "Nexus",
      device_model: "unknown",
      os: "android",
      os_version: "6.0",
      device_id: await generate_random_id(32),
      device_type: "smartphone",
    },
  },
};

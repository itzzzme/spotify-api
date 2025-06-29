import { generateRandom } from "./random.js";

export function generate_flow_ctx() {
  const sections = [8, 4, 4, 4, 12];
  const uuidSections = sections.map((section) => generateRandom(section));
  return uuidSections.join("-");
}

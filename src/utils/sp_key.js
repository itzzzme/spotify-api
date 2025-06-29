export async function generate_sp_key() {
  const characters = "0123456789abcdef";
  const getRandomCharacter = () =>
    characters[Math.floor(Math.random() * characters.length)];
  const sp_key = Array.from({ length: 36 }, (_, index) => {
    if (index === 8 || index === 13 || index === 18 || index === 23) {
      return "-";
    } else if (index === 14) {
      return "4";
    }
    return getRandomCharacter();
  }).join("");
  return sp_key;
}

export async function generate_random_id(length) {
    const characters = "abcdefghijklmnopqrstuvwxyz0123456789";
    let sp = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      sp += characters.charAt(randomIndex);
    }
    return sp;
}
type Gift = string | number | boolean;
type Workshop = Record<string, any>;
type Path = string[];

function findGiftPath(workshop: Workshop, gift: Gift): Path {
  let giftPath: Path = [];

  for (const [k, v] of Object.entries(workshop)) {
    if (v === gift && giftPath.length == 0) {
      giftPath.push(k);
      return giftPath;
    } else if (typeof v == "object") {
      giftPath = findGiftPath(v, gift);
      if (giftPath.length > 0) giftPath.unshift(k);
    }
  }
  return giftPath;
}

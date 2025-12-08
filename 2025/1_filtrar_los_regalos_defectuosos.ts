function filterGifts(gifts: string[]): string[] {
  let arr: string[] = [];
  for (let r of gifts) {
    if (!r.includes("#")) {
      arr.push(r);
    }
  }

  return arr;
}

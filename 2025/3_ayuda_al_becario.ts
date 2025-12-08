function drawGift(size: number, symbol: string): string {
  let str: string = "";
  if (size < 2) return str;
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      if (i == 0 || i == size - 1 || j == 0 || j == size - 1) {
        str += symbol;
      } else {
        str += " ";
      }
    }
    if (i != size - 1) str += "\n";
  }
  return str;
}

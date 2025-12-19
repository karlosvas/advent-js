function dropGifts(warehouse: string[][], drops: number[]): string[][] {
  let j: number = 0;
  let drop: number = drops[j];

  while (j < drops.length) {
    drop = drops[j];
    for (let i = warehouse.length - 1; i >= 0; i--) {
      if (warehouse[i][drop] == ".") {
        warehouse[i][drop] = "#";
        break;
      }
    }
    j++;
  }

  return warehouse;
}

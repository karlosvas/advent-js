function clearGifts(warehouse: string[][], drops: number[]): string[][] {
  let j: number = 0;
  let drop: number = drops[j];
  let [heigth, width]: [number, number] = [warehouse.length, warehouse[0].length];

  while (j < drops.length) {
    drop = drops[j];

    // Recorremos la primera columna
    for (let i = heigth - 1; i >= 0; i--) {
      // Si hay espacio en blanco podemos dejar el regalo
      if (warehouse[i][drop] == ".") {
        warehouse[i][drop] = "#";

        // Limpiamos, solo si todos son #
        if (warehouse[i].every((a) => a == "#")) {
          warehouse.splice(i, 1);
          warehouse.unshift(Array(width).fill("."));
        }

        break;
      }
    }

    j++;
  }

  return warehouse;
}

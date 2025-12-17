function findUnsafeGifts(warehouse: string[]): number {
  const directions = [
    // Derecha, izquierda
    [0, 1],
    [0, -1],
    // Abajo, arriba
    [1, 0],
    [-1, 0],
  ];

  // Obtenemos el maximo de ancho y alto
  let [Y, X] = [warehouse.length, warehouse[0].length];
  // No visitados
  let notVisited = 0;
  for (let i = 0; i < warehouse.length; i++) {
    for (let j = 0; j < warehouse[0].length; j++) {
      if (warehouse[i][j] == "*") {
        // Observamos si hay camaras alrededor
        let visit = false;
        for (let k = 0; k < directions.length && !visit; k++) {
          let [y, x] = [i, j];
          const [dy, dx] = directions[k];
          y += dy;
          x += dx;
          if (y >= 0 && x >= 0 && x < X && y < Y && warehouse[y][x] == "#") visit = true;
        }
        // Si no fue visitada sumamos
        if (!visit) notVisited++;
      }
    }
  }

  return notVisited;
}

function hasFourLights(board: string[][]): boolean {
  // Obtenemos altura y anchura
  const [height, width]: [number, number] = [board.length, board[0].length];

  // Si no se puede terminamos inmediatamente
  if (height < 4 && width < 4) return false;

  // Bandera de busqueda
  let finish: boolean = false;

  // Recorremos el tablero
  for (let i = 0; i < Math.max(height, width) && !finish; i++) {
    // Coincidencias
    let gH: number = 0,
      gV: number = 0,
      rH: number = 0,
      rV: number = 0;

    // Verificamos siempre que estemos en rango si se encontraron 4 coincidencias seguidas
    for (let j = 0; j < Math.max(height, width) && !finish; j++) {
      if (i < height && j < width) {
        if (board[i][j] == "R") rH++;
        else if (board[i][j] == "G") gH++;
      }

      if (j < height && i < width) {
        if (board[j][i] == "R") rV++;
        else if (height && board[j][i] == "G") gV++;
      }

      finish = rH == 4 || gH == 4 || rV == 4 || gV == 4;
    }
  }

  return finish;
}

export {};

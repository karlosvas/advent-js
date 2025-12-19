function hasFourInARow(board: string[][]): boolean {
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
      rV: number = 0,
      dH: number = 0,
      dV: number = 0,
      iH: number = 0,
      iV: number = 0;

    // Verificamos siempre que estemos en rango si se encontraron 4 coincidencias seguidas
    for (let j = 0; j < Math.max(height, width) && !finish; j++) {
      // Horizontal
      if (i < height && j < width) {
        if (board[i][j] == "R") rH++;
        else if (board[i][j] == "G") gH++;
      }

      // Vertical
      if (j < height && i < width) {
        if (board[j][i] == "R") rV++;
        else if (height && board[j][i] == "G") gV++;
      }

      // Diagonal inversa
      if (j < height && j < width) {
        if (board[j][j] == "R") dV++;
        else if (height && board[j][j] == "G") dV++;
      }

      // Diagonal inversa
      let inversed = Math.max(width - 1 - j, 0);
      if (j < height && inversed < width) {
        if (board[j][inversed] == "R") iV++;
        else if (height && board[j][inversed] == "G") iV++;
      }

      finish = rH == 4 || gH == 4 || rV == 4 || gV == 4 || dV == 4 || dH == 4 || iH == 4 || iV == 4;
    }
  }

  return finish;
}

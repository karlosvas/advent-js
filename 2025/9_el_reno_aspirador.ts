type Board = string;
type Moves = string;
type Result = "fail" | "crash" | "success";

function moveReno(board: Board, moves: Moves): Result {
  // Transfomramos a array bidimensional
  const filas = board.trim().split("\n");
  let x = -1;
  let y = -1;

  // Buscamos el renmo
  for (let i = 0; i < filas.length; i++) {
    for (let j = 0; j < filas[0].length; j++) {
      if (filas[i][j] == "@") {
        y = i;
        x = j;
        break;
      }
    }
    if (x != -1) break;
  }

  // Direcciones a las que se puede mover
  const dir: Record<string, [number, number]> = {
    L: [0, -1],
    R: [0, 1],
    U: [-1, 0],
    D: [1, 0],
  };

  for (let c of moves) {
    // Nos movemos en la direccion indicada
    const [dy, dx] = dir[c];
    x += dx;
    y += dy;

    // Verificar que este fuera de rango
    if (y >= 4 || x >= 5 || y < 0 || x < 0) return "crash";
    else if (filas[y][x] == "*") return "success";
    else if (filas[y][x] == "#") return "crash";
  }

  return "fail";
}

export {};

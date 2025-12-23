function canEscape(maze: string[][]): boolean {
  const visited: boolean[][] = maze.map(() => Array(maze[0].length).fill(false));
  const moves: number[][] = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];

  for (let i = 0; i < maze.length; i++)
    for (let j = 0; j < maze[0].length; j++) if (maze[i][j] == "S") return dfs(maze, moves, visited, i, j);

  function dfs(maze: string[][], moves: number[][], visited: boolean[][], y: number, x: number): boolean {
    for (let i = 0; i < moves.length; i++) {
      const [dy, dx] = moves[i];
      const ny = y + dy;
      const nx = x + dx;

      if (ny < 0 || ny >= maze.length || nx < 0 || nx >= maze[0].length) continue;
      else if (maze[ny][nx] == "E") return true;
      else if (!visited[ny][nx] && maze[ny][nx] !== "#") {
        visited[ny][nx] = true;
        if (dfs(maze, moves, visited, ny, nx)) return true;
      }
    }

    return false;
  }

  return false;
}

function minStepsToDeliver(map: string[][]): number {
  let g: number = 0,
    sy: number,
    sx: number;
  let visited: boolean[][] = map.map(() => Array(map[0].length).fill(false));
  let moves = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];

  for (let i = 0; i < map.length; i++)
    for (let j = 0; j < map[0].length; j++) {
      if (map[i][j] == "S") [sy, sx] = [i, j];
      else if (map[i][j] == "G") g++;
    }

  let queue: [number, number, number][] = [[sy, sx, 0]];
  visited[sy][sx] = true;
  let sol = 0,
    foundG = 0;

  while (queue.length) {
    let [y, x, depth] = queue.shift()!;
    for (let [dy, dx] of moves) {
      let [ny, nx] = [y + dy, x + dx];
      if (ny < 0 || ny >= map.length || nx < 0 || nx >= map[0].length || visited[ny][nx]) continue;
      visited[ny][nx] = true;
      if (map[ny][nx] == "G") {
        sol += depth + 1;
        foundG++;
      }
      if (map[ny][nx] != "#") queue.push([ny, nx, depth + 1]);
    }
  }

  return foundG == g ? sol : -1;
}

function revealSantaRoute(routes: string[][]): string[] {
  let mapPath = new Map();

  for (let [key, value] of routes) if (!mapPath.has(key)) mapPath.set(key, value);

  let sol: string[] = [];
  let key: string = routes[0][0];
  while (mapPath.has(key)) {
    sol.push(key);
    key = mapPath.get(key);
  }

  sol.push(key);
  return sol;
}
export {};

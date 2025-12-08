function drawTree(height: number, ornament: string, frequency: number): string {
  let l = height - 1;
  let count = 1;
  let sol = "";
  let globalCount = 0;

  for (let i = 1; i <= height; i++) {
    // Espacios
    sol += " ".repeat(l);

    // Ramas del árbol
    for (let j = 0; j < count; j++) {
      globalCount++;
      if (globalCount == frequency) {
        sol += ornament;
        globalCount = 0;
      } else {
        sol += "*";
      }
    }

    sol += "\n";
    l--;
    count += 2;
  }

  sol += " ".repeat(height - 1) + "#";
  return sol;
}

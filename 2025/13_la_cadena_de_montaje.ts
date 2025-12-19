type Factory = string[];
type Result = "completed" | "broken" | "loop";

function runFactory(factory: Factory): Result {
  const visited = new Set<string>();
  let i = 0,
    j = 0;

  while (true) {
    const key = `${i},${j}`;
    if (visited.has(key)) return "loop";
    visited.add(key);

    switch (factory[i][j]) {
      case ">":
        j++;
        break;
      case "<":
        j--;
        break;
      case "v":
        i++;
        break;
      case "^":
        i--;
        break;
      case ".":
        return "completed";
    }

    if (i < 0 || i >= factory.length || j < 0 || j >= factory[0].length) return "broken";
  }
}

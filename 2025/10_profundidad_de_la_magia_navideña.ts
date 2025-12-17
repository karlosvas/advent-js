function maxDepth(s: string): number {
  let depth = 0;
  let maxDepth = 0;

  for (let w of s) {
    if (w == "]") {
      if (depth === 0) return -1;
      depth--;
    } else {
      depth++;
      maxDepth = Math.max(depth, maxDepth);
    }
  }

  return depth !== 0 ? -1 : maxDepth;
}

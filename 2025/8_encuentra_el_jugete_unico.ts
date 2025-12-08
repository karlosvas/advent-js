function findUniqueToy(toy: string): string {
  let lowerToy = toy.toLowerCase();
  let map = new Map();

  for (let t of lowerToy) {
    let actual = map.get(t) || 0;
    map.set(t, ++actual);
  }

  for (let i = 0; i < lowerToy.length; i++) if (map.get(lowerToy[i]) == 1) return toy[i];

  return "";
}

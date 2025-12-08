type Glove = { hand: "L" | "R"; color: string };

function matchGloves(gloves: Glove[]): string[] {
  let mapColor = new Map();
  let mapHands = new Map();
  let sol = [];
  for (let g of gloves) {
    // Obtenemos la última mano
    let [left, rigth] = mapHands.get(g.color) || [0, 0];
    let color = mapColor.get(g.color) || 0;

    // Si hay aun par lo eliminamos
    if (g.hand == "L" && rigth > 0) {
      mapColor.set(g.color, Math.max(color - 1, 0));
      mapHands.set(g.color, [left, Math.max(--rigth, 0)]);
      sol.push(g.color);
    } else if (g.hand == "R" && left > 0) {
      mapColor.set(g.color, Math.max(color - 1, 0));
      mapHands.set(g.color, [Math.max(--left, 0), rigth]);
      sol.push(g.color);
      // Si no, significa que no hay par
    } else {
      g.hand == "L" ? mapHands.set(g.color, [++left, rigth]) : mapHands.set(g.color, [left, ++rigth]);
    }
  }

  return sol;
}

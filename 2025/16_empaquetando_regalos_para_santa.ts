type Gifts = number[];
type MaxWeight = number;
type Result = number | null;

function packGifts(gifts: Gifts, maxWeight: MaxWeight): Result {
  let aux: number = 0;
  let count: number = 0;

  for (let gift of gifts) {
    if (gift + aux < maxWeight) aux += gift;
    else if (gift > maxWeight) return null;
    else if (gift + aux >= maxWeight) {
      count += gift + aux == maxWeight ? 1 : 2;
      aux = 0;
    }
  }

  return aux != 0 ? count + 1 : count;
}

export {};

function manufactureGifts(giftsToProduce: Array<{ toy: string; quantity: number }>): string[] {
  let arr = [];

  for (let pair of giftsToProduce) if (pair.quantity > 0) for (let i = 0; i < pair.quantity; i++) arr.push(pair.toy);

  return arr;
}

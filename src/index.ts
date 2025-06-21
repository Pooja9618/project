export type Item = 'Apple' | 'Banana' | 'Melon' | 'Lime';

const PRICES: Record<Item, number> = {
  Apple: 35,
  Banana: 20,
  Melon: 50,
  Lime: 15,
};

export function calculateTotal(items: Item[]): number {
  const counts: Record<Item, number> = {
    Apple: 0,
    Banana: 0,
    Melon: 0,
    Lime: 0,
  };

  for (const item of items) {
    counts[item]++;
  }

  let total = 0;

  // Apples: 35p each
  total += counts.Apple * PRICES.Apple;

  // Bananas: 20p each
  total += counts.Banana * PRICES.Banana;

  // Melons: 50p each, buy one get one free
  total += Math.ceil(counts.Melon / 2) * PRICES.Melon;

  // Limes: 15p each, three for the price of two
  total += (Math.floor(counts.Lime / 3) * 2 + (counts.Lime % 3)) * PRICES.Lime;

  return total;
}
import { calculateTotal, Item } from './';

const basket: Item[] = ['Apple', 'Banana', 'Melon', 'Melon', 'Lime', 'Lime', 'Lime'];
const total = calculateTotal(basket);

console.log(`Total: ${total}p`);
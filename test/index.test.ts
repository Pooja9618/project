import { expect } from 'chai';
import { calculateTotal } from '../src';

describe('calculateTotal', () => {
  it('calculates total for empty basket', () => {
    expect(calculateTotal([])).to.equal(0);
  });

  it('calculates total for apples and bananas', () => {
    expect(calculateTotal(['Apple', 'Banana', 'Apple'])).to.equal(35 + 20 + 35);
  });

  it('applies melon BOGOF offer', () => {
    expect(calculateTotal(['Melon', 'Melon'])).to.equal(50);
    expect(calculateTotal(['Melon', 'Melon', 'Melon'])).to.equal(100);
  });

  it('applies lime 3-for-2 offer', () => {
    expect(calculateTotal(['Lime', 'Lime', 'Lime'])).to.equal(30);
    expect(calculateTotal(['Lime', 'Lime', 'Lime', 'Lime'])).to.equal(45);
  });

  it('calculates mixed basket', () => {
    expect(
      calculateTotal(['Apple', 'Melon', 'Melon', 'Lime', 'Lime', 'Lime', 'Banana'])
    ).to.equal(35 + 50 + 30 + 20);
  });
});
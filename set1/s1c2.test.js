import {fixedXor} from './s1c2';

describe('fixed xor', () => {
  it('throws when hex strings are different lengths', () => {
    const testStringA = '1c0111001f010100061a024b535350';
    const testStringB = '686974207468652062756c6c277320657965';
    const unevenStrings = () => fixedXor(testStringA, testStringB);

    expect(unevenStrings).toThrow();
  });

  it('solves the challenge', () => {
    const testStringA = '1c0111001f010100061a024b53535009181c';
    const testStringB = '686974207468652062756c6c277320657965';
    const expected = '746865206b696420646f6e277420706c6179';

    expect(fixedXor(testStringA, testStringB)).toBe(expected);
  });
});
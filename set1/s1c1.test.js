import {hexToB64} from './s1c1';

describe('set 1, challenge 1 solution', () => {

  describe('rejects malformed hex strings', () => {
    it('throws on non-even length strings', () => {
      const oddString = () => hexToB64('12ab34a');
        
      expect(oddString).toThrow();
    });

    it('throws on invalid hex characters', () => {
      const invalidCharString = () => hexToB64('12ab34z');
        
      expect(invalidCharString).toThrow();
    });
  });
  
  describe('converts hex strings to b64', () => {
    it('converts a trivial string', () => {
      const testString = '12ab34';
      const expectedString = 'Eqs0';

      expect(hexToB64(testString)).toBe(expectedString);
    });

    it('converts the challenge string', () => {
      const testString = '49276d206b696c6c696e6720796f757220627261696e206c696b65206120706f69736f6e6f757320' +
          '6d757368726f6f6d';
      const expectedString = 'SSdtIGtpbGxpbmcgeW91ciBicmFpbiBsaWtlIGEgcG9pc29ub3VzIG11c2hyb29t';

      expect(hexToB64(testString)).toBe(expectedString);
    });
  });
});
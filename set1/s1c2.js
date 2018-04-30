import * as utils from '../common/utils';

export const fixedXor = (stringA, stringB) => {
  'takes hex strings of equal length and xors them'

  if(stringA.length !== stringB.length) {
    throw new Error('strings to be XOR\'d must be equal length!');
  }

  const bytesA = utils.hexToByteArray(stringA);
  const bytesB = utils.hexToByteArray(stringB);
  
  const combined = bytesA.map((x, i) => x ^ bytesB[i]);
  
  return utils.byteArrayToHex(combined);
}
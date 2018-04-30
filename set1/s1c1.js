import * as utils from '../common/utils';

export const hexToB64 = (inputString) => {
  const bytes = utils.hexToByteArray(inputString);
  return utils.byteArrayToB64(bytes);
}
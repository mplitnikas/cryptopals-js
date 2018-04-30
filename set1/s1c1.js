import ByteBuffer from 'bytebuffer';

export const hexToB64 = (inputString) => {
  const bb = ByteBuffer.fromHex(inputString);
  return bb.toBase64();
}
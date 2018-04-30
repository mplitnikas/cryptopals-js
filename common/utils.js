import ByteBuffer from 'bytebuffer';

export const hexToByteArray = (inputString) => {
  const bytes = ByteBuffer.fromHex(inputString);

  return new Int8Array(bytes.toArrayBuffer());
}

export const byteArrayToHex = (inputArray) => {
  return new ByteBuffer
              .fromBinary(inputArray)
              .toHex();
}

export const B64ToByteArray = (inputString) => {
  const bytes = ByteBuffer.fromBase64(inputString);

  return new Int8Array(bytes.toArrayBuffer());
}

export const byteArrayToB64 = (inputArray) => {
  return new ByteBuffer
              .fromBinary(inputArray)
              .toBase64();
}

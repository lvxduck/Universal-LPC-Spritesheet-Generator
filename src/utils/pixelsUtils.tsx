export const getTile = ({ tileX, tileY, imageData }: { tileX: number, tileY: number, imageData: ImageData }) => {
  let size = 64;
  let pixelData = new Uint8ClampedArray(size * size * 4);
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size * 4; j++) {
      pixelData[i * size * 4 + j] = imageData.data[(i + tileY * size) * imageData.width * 4 + j + tileX * size * 4];
    }
  }
  return new ImageData(pixelData, size, size)
};

export const cropImage = (
  { x, y, width, height, imageData }
  : { x: number, y: number, width: number, height: number, imageData: ImageData }
) => {
  let pixelData = new Uint8ClampedArray(width * height * 4);
  for (let i = 0; i < height * 4; i++) {
    for (let j = 0; j < width * 4; j++) {
      pixelData[i * width * 4 + j] = imageData.data[(i + y) * imageData.width * 4 + j + x * 4];
    }
  }
  return new ImageData(pixelData, width, height)
};

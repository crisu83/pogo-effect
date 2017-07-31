import { PixelRatio, Dimensions } from 'react-native'

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

export const capitalize = (text) => text.toUpperCase()[0] + text.substr(1);

export const alphaSort = (prop) => (a, b) => {
  if (b[prop] < a[prop]) {
    return 1;
  } else if (b[prop] > a[prop]) {
    return -1;
  } else {
    return 0;
  }
};

export const normalizeSize = (size) => {
  const getScaleFactor = (pixelRatio) => {
    if (pixelRatio === 3) {
      return 0.24;
    } else {
      return 0.45;
    }
  };

  const pixelRatio = PixelRatio.get();
  const aspectRatio = (((screenWidth * pixelRatio) / 320) + ((screenHeight * pixelRatio) / 640)) / 2;
  return Math.round(aspectRatio * size) * getScaleFactor(pixelRatio);
};

export const calculateWidth = (percent) => Math.round(screenWidth * (percent / 100));

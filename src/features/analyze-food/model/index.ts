import './analyze-food'

import * as cameraRef from './camera-ref'
import * as captureFood from './capture-food'

export const captureFoodModel = {
  ...cameraRef,
  ...captureFood,
}

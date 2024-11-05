import {attach, sample} from 'effector'
import * as ImageManipulator from 'expo-image-manipulator'
import {handleErrorFx} from 'shared/lib'
import {$cameraRef} from './camera-ref'

const captureFoodFx = attach({
  source: $cameraRef,
  async effect(cameraRef) {
    if (!cameraRef.current) {
      throw new Error('No camera ref')
    }

    const photo = await cameraRef.current.takePictureAsync()

    if (!photo) {
      throw new Error('No photo')
    }

    const manipulatedImage = await ImageManipulator.manipulateAsync(
      photo.uri,
      [{resize: {width: 1092, height: 1092}}],
      {compress: 1, format: ImageManipulator.SaveFormat.JPEG},
    )

    return manipulatedImage
  },
})

captureFoodFx.doneData.watch((s) => console.log('captureFoodFx.doneData', s))

sample({
  clock: captureFoodFx.failData,
  fn: (error) => ({error, context: {source: 'captureFoodFx'}}),
  target: handleErrorFx,
})

export {captureFoodFx}

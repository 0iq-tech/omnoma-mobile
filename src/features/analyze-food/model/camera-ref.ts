import {createStore} from 'effector'
import {CameraView} from 'expo-camera'
import {createRef} from 'react'

const $cameraRef = createStore<React.RefObject<CameraView>>(
  createRef<CameraView>(),
)

export {$cameraRef}

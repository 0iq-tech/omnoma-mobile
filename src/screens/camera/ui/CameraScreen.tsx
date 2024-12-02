import {variant} from '@effector/reflect'
import {FoodCameraView} from 'features/analyze-food'
import {SafeAreaView} from 'react-native-safe-area-context'
import {$permission} from '../model'
import CameraPermissionsRequestScreen from './CameraPermissionsRequestScreen'

function CameraScreen() {
  return (
    <SafeAreaView className="flex-1">
      <FoodCameraView />
    </SafeAreaView>
  )
}

export default variant({
  if: $permission.map((p) => p?.granted ?? false),
  then: CameraScreen,
  else: CameraPermissionsRequestScreen,
})

import {reflect} from '@effector/reflect'
import {useCameraPermissions} from 'expo-camera'
import {FoodCameraView} from 'features/analyze-food'
import {Button, Text, View} from 'react-native'
import {SafeAreaView} from 'react-native-safe-area-context'

function CameraScreen() {
  const [permission, requestPermission] = useCameraPermissions()

  if (!permission) {
    return (
      <View className="flex-1 items-center justify-center">
        <Text className="text-black">No permission</Text>
      </View>
    )
  }

  if (!permission.granted) {
    return (
      <View className="flex-1 items-center justify-center">
        <Text className="text-center pb-2.5 text-black">
          We need your permission to show the camera
        </Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    )
  }

  return (
    <SafeAreaView className="flex-1">
      <FoodCameraView />
    </SafeAreaView>
  )
}

export default reflect({
  view: CameraScreen,
  bind: {},
})

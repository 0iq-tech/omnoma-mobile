import {reflect} from '@effector/reflect'
import React from 'react'
import {Text, TouchableOpacity, View} from 'react-native'
import {SafeAreaView} from 'react-native-safe-area-context'
import {navigation, routeNames} from 'shared/navigation'

interface Props {
  onOpenCameraPress: () => void
}

function HomeScreen({onOpenCameraPress}: Props) {
  return (
    <SafeAreaView className="flex-1">
      <View className="flex-1 bg-white items-center justify-center">
        <Text className="text-black">
          Open up App.tsx to start working on your app!
        </Text>
        <TouchableOpacity
          className="mt-4 border rounded-full p-4"
          onPress={onOpenCameraPress}
        >
          <Text className="text-blue-500">Open Camera</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default reflect({
  view: HomeScreen,
  bind: {
    onOpenCameraPress: () => navigation.navigate(routeNames.camera),
  },
})

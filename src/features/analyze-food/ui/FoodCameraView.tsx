import {reflect} from '@effector/reflect'
import {CameraView} from 'expo-camera'
import React from 'react'
import {Text, TouchableOpacity, View} from 'react-native'
import {captureFoodModel} from '../model'

interface Props {
  cameraRef: React.RefObject<CameraView>
  onTakePhotoPress: () => void
}

function FoodCameraView({cameraRef, onTakePhotoPress}: Props) {
  return (
    <CameraView className="flex-1" ref={cameraRef} facing="back">
      <View className="flex-1 flex-row bg-transparent mx-16">
        <TouchableOpacity
          onPress={onTakePhotoPress}
          className="flex-1 self-end items-center">
          <Text className="text-2xl font-bold text-white">
            Take Photo of Your Food
          </Text>
        </TouchableOpacity>
      </View>
    </CameraView>
  )
}

export default reflect({
  view: FoodCameraView,
  bind: {
    cameraRef: captureFoodModel.$cameraRef,
    onTakePhotoPress: captureFoodModel.captureFoodFx,
  },
})

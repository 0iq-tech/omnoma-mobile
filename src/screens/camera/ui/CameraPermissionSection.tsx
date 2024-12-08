import {reflect} from '@effector/reflect'
import React from 'react'
import {Text, View} from 'react-native'

interface Props {
  containerStyle?: string
  icon: React.ReactNode
  title: string
  description: string
}

function CameraPermissionSection({
  containerStyle,
  icon,
  title,
  description,
}: Props) {
  return (
    <View className={`flex-row items-start ${containerStyle}`}>
      <View className="w-24 h-24 items-center justify-center">{icon}</View>
      <View className="flex-1 ml-16">
        <Text className="text-text-secondary font-semibold text-lg mb-2">
          {title}
        </Text>
        <Text className="text-text-tertiary text-base leading-6">
          {description}
        </Text>
      </View>
    </View>
  )
}

export default reflect({
  view: CameraPermissionSection,
  bind: {},
})

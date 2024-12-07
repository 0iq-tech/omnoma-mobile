import {reflect} from '@effector/reflect'
import React from 'react'
import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native'
import {i18n} from 'shared/i18n'

interface Props {
  title: string
  howToUseTitle: string
  howToUseDescription: string
  howWeUseTitle: string
  howWeUseDescription: string
  settingsTitle: string
  settingsDescription: string
  continueText: string
}

function CameraPermissionsRequestScreen({
  title,
  howToUseTitle,
  howToUseDescription,
  howWeUseTitle,
  howWeUseDescription,
  settingsTitle,
  settingsDescription,
  continueText,
}: Props) {
  return (
    <SafeAreaView className="flex-1 bg-black px-4">
      <View className="flex-1 justify-center">
        {/* Icon Container */}
        <View className="items-center mb-8">
          <View className="bg-zinc-900 p-6 rounded-2xl">
            <View className="relative">
              <View className="w-16 h-16 border-2 border-white rounded-lg items-center justify-center">
                {/* <Camera className="w-8 h-8" color="white" /> */}
              </View>
              <View className="absolute -right-2 -top-2">
                {/* <Mic className="w-6 h-6" color="#ec4899" /> */}
              </View>
              <View className="absolute -left-2 -top-2">
                <View className="w-4 h-4 bg-yellow-400 rounded-full" />
              </View>
            </View>
          </View>
        </View>

        {/* Title */}
        <Text className="text-white text-2xl font-semibold text-center mb-8">
          {title}
        </Text>

        {/* Sections */}
        <View className="space-y-6 mb-8">
          <View className="flex-row">
            <View className="w-8 h-8 items-center">
              {/* <Camera className="w-6 h-6" color="white" /> */}
            </View>
            <View className="flex-1 ml-2">
              <Text className="text-white font-semibold mb-1">
                {howToUseTitle}
              </Text>
              <Text className="text-gray-400">{howToUseDescription}</Text>
            </View>
          </View>

          <View className="flex-row">
            <View className="w-8 h-8 items-center">
              <Text className="text-white text-2xl">?</Text>
            </View>
            <View className="flex-1 ml-2">
              <Text className="text-white font-semibold mb-1">
                {howWeUseTitle}
              </Text>
              <Text className="text-gray-400">{howWeUseDescription}</Text>
            </View>
          </View>

          <View className="flex-row">
            <View className="w-8 h-8 items-center">
              <View className="w-6 h-6 border-2 border-white rounded-full" />
            </View>
            <View className="flex-1 ml-2">
              <Text className="text-white font-semibold mb-1">
                {settingsTitle}
              </Text>
              <Text className="text-gray-400">{settingsDescription}</Text>
            </View>
          </View>
        </View>
      </View>

      {/* Bottom Button */}
      <View className="pb-8">
        <TouchableOpacity className="rounded-xl">
          <Text className="text-white font-semibold text-lg">
            {continueText}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default reflect({
  view: CameraPermissionsRequestScreen,
  bind: {
    title: i18n.translated('screen:camera:permissions:title'),
    howToUseTitle: i18n.translated(
      'screen:camera:permissions:sections:how_to_use:title',
    ),
    howToUseDescription: i18n.translated(
      'screen:camera:permissions:sections:how_to_use:description',
    ),
    howWeUseTitle: i18n.translated(
      'screen:camera:permissions:sections:how_we_use:title',
    ),
    howWeUseDescription: i18n.translated(
      'screen:camera:permissions:sections:how_we_use:description',
    ),
    settingsTitle: i18n.translated('permissions:sections:settings:title'),
    settingsDescription: i18n.translated(
      'screen:camera:permissions:sections:settings:description',
    ),
    continueText: i18n.translated('screen:camera:permissions:actions:continue'),
  },
})

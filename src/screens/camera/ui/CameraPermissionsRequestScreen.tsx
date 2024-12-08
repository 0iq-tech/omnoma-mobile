import {reflect} from '@effector/reflect'
import {Ionicons, MaterialCommunityIcons} from '@expo/vector-icons'
import React from 'react'
import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native'
import {i18n} from 'shared/i18n'
import CameraPermissionSection from './CameraPermissionSection'

interface Props {
  title: string
  howToUseTitle: string
  howToUseDescription: string
  howWeUseTitle: string
  howWeUseDescription: string
  settingsTitle: string
  settingsDescription: string
  continueText: string
  onContinue?: () => void
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
  onContinue,
}: Props) {
  return (
    <SafeAreaView className="flex-1 bg-surface">
      <View className="flex-1 px-24 pt-24">
        <View className="items-center mb-24">
          <View className="bg-purple-50 rounded-full p-16">
            <MaterialCommunityIcons
              name="camera-iris"
              size={36}
              className="color-purple"
            />
          </View>
        </View>
        <Text className="text-gray-800 text-3xl font-bold text-center leading-10 mb-40">
          {title}
        </Text>

        <CameraPermissionSection
          containerStyle="mb-24"
          icon={
            <MaterialCommunityIcons
              name="image-multiple"
              size={24}
              className="color-gray-800"
            />
          }
          title={howToUseTitle}
          description={howToUseDescription}
        />
        <CameraPermissionSection
          containerStyle="mb-24"
          description={howWeUseDescription}
          icon={
            <Ionicons
              name="shield-checkmark"
              size={24}
              className="color-gray-800"
            />
          }
          title={howWeUseTitle}
        />
        <CameraPermissionSection
          containerStyle="mb-24"
          description={settingsDescription}
          icon={
            <Ionicons name="settings" size={24} className="color-gray-800" />
          }
          title={settingsTitle}
        />
      </View>
      <View className="px-24 pb-24 pt-8 bg-surface">
        <TouchableOpacity
          className="bg-sea py-16 px-24 rounded-lg flex-row justify-center items-center active:bg-green-700"
          onPress={onContinue}
        >
          <Text className="text-text-inverse font-semibold text-lg text-center mr-8">
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
    title: i18n.translated('screen.camera.permissions.title'),
    howToUseTitle: i18n.translated(
      'screen.camera.permissions.sections.how_to_use.title',
    ),
    howToUseDescription: i18n.translated(
      'screen.camera.permissions.sections.how_to_use.description',
    ),
    howWeUseTitle: i18n.translated(
      'screen.camera.permissions.sections.how_we_use.title',
    ),
    howWeUseDescription: i18n.translated(
      'screen.camera.permissions.sections.how_we_use.description',
    ),
    settingsTitle: i18n.translated(
      'screen.camera.permissions.sections.settings.title',
    ),
    settingsDescription: i18n.translated(
      'screen.camera.permissions.sections.settings.description',
    ),
    continueText: i18n.translated('screen.camera.permissions.actions.continue'),
  },
})

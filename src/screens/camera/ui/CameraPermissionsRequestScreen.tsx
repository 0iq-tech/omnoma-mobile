import {reflect} from '@effector/reflect'
import {Ionicons, MaterialCommunityIcons} from '@expo/vector-icons'
import React from 'react'
import {Text, TouchableOpacity, View} from 'react-native'
import {SafeAreaView} from 'react-native-safe-area-context'
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
    <SafeAreaView className="flex-1 bg-surface dark:bg-dark-surface">
      <View className={`flex-1 px-24`}>
        <View className="items-center mb-24">
          <View className="bg-purple-50 dark:bg-dark-primary-opacity-10 rounded-full p-16">
            <MaterialCommunityIcons
              name="camera-iris"
              size={36}
              className="color-purple-600 dark:color-dark-primary"
            />
          </View>
        </View>
        <Text className="text-text-primary dark:text-dark-text-primary text-3xl font-bold text-center leading-10 mb-32">
          {title}
        </Text>
        <CameraPermissionSection
          containerStyle="mb-24"
          icon={
            <MaterialCommunityIcons
              name="image-multiple"
              size={24}
              className="color-gray-800 dark:color-dark-text-primary"
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
              className="color-gray-800 dark:color-dark-text-primary"
            />
          }
          title={howWeUseTitle}
        />
        <CameraPermissionSection
          containerStyle="mb-24"
          description={settingsDescription}
          icon={
            <Ionicons
              name="settings"
              size={24}
              className="color-gray-800 dark:color-dark-text-primary"
            />
          }
          title={settingsTitle}
        />
      </View>
      <View className="px-24 py-16 bg-surface dark:bg-dark-surface border-gray-200 dark:border-dark-border">
        <TouchableOpacity
          className="bg-purple-800 py-16 px-24 rounded-lg flex-row justify-center items-center"
          onPress={onContinue}
        >
          <Text className="text-text-inverse dark:text-dark-text-primary font-semibold text-lg text-center">
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

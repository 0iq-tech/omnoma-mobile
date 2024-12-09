import {reflect} from '@effector/reflect'

import {Ionicons} from '@expo/vector-icons'

import React from 'react'

import {View} from 'react-native'

import {PressableOpacity} from 'shared/ui'

import {themeSwitcherModel} from '../model'

interface Props {
  activeTheme?: 'light' | 'system' | 'dark'

  containerStyle?: string

  onDarkThemePress: () => void

  onLightThemePress: () => void

  onSystemThemePress: () => void
}

function ThemeSwitcher({
  activeTheme = 'system',

  containerStyle,

  onDarkThemePress,

  onLightThemePress,

  onSystemThemePress,
}: Props) {
  return (
    <View
      className={`flex-row items-center bg-surface-secondary rounded-full px-2 py-2 ${containerStyle}`}
    >
      <PressableOpacity
        onPress={onLightThemePress}
        className={`p-12 rounded-full ${activeTheme === 'light' ? 'bg-accent-yellow' : ''}`}
      >
        <Ionicons
          name="sunny"
          size={20}
          color={activeTheme === 'light' ? '#FFFFFF' : '#000505'}
        />
      </PressableOpacity>

      <PressableOpacity
        onPress={onSystemThemePress}
        className={`p-12 rounded-full mx-1 ${activeTheme === 'system' ? 'bg-accent-yellow' : ''}`}
      >
        <Ionicons
          name="options"
          size={20}
          color={activeTheme === 'system' ? '#FFFFFF' : '#000505'}
        />
      </PressableOpacity>

      <PressableOpacity
        onPress={onDarkThemePress}
        className={`p-12 rounded-full ${activeTheme === 'dark' ? 'bg-accent-yellow' : ''}`}
      >
        <Ionicons
          name="moon"
          size={20}
          color={activeTheme === 'dark' ? '#FFFFFF' : '#000505'}
        />
      </PressableOpacity>
    </View>
  )
}

export default reflect({
  view: ThemeSwitcher,

  bind: {
    activeTheme: themeSwitcherModel.$activeTheme,

    onDarkThemePress: () => themeSwitcherModel.changeActiveTheme('dark'),

    onLightThemePress: () => themeSwitcherModel.changeActiveTheme('light'),

    onSystemThemePress: () => themeSwitcherModel.changeActiveTheme('system'),
  },
})

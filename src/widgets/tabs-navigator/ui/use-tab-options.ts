import {BottomTabNavigationOptions} from '@react-navigation/bottom-tabs'
import {useMemo} from 'react'
import {Platform} from 'react-native'

interface ThemeColors {
  active: string
  inactive: string
  background: string
  border: string
  shadow: string
}

const THEME_COLORS = {
  light: {
    active: '#5C7B8B', // muted slate
    inactive: '#B9C5CD', // gray.400
    background: '#FFFFFF', // colors.surface.DEFAULT
    border: '#E3E9ED', // colors.gray.200
    shadow: '#000505', // colors.black.DEFAULT
  },
  dark: {
    active: '#7297AB', // brightened slate
    inactive: '#6A7B8E', // gray.700
    background: '#1E1E1E', // colors.dark.surface.DEFAULT
    border: '#2C2C2C', // colors.dark.surface.secondary
    shadow: '#000505', // colors.black.DEFAULT
  },
} as const

export const useTabOptions = ({isDark}: {isDark: boolean}) => {
  return useMemo((): BottomTabNavigationOptions => {
    const currentTheme: ThemeColors = isDark
      ? THEME_COLORS.dark
      : THEME_COLORS.light

    return {
      headerShown: false,
      tabBarShowLabel: false,
      tabBarActiveTintColor: currentTheme.active,
      tabBarInactiveTintColor: currentTheme.inactive,
      tabBarStyle: {
        backgroundColor: currentTheme.background,
        borderTopWidth: 1,
        borderTopColor: currentTheme.border,
        paddingTop: 12,
        ...Platform.select({
          ios: {
            shadowColor: currentTheme.shadow,
            shadowOffset: {width: 0, height: -2},
            shadowOpacity: isDark ? 0.1 : 0.05,
            shadowRadius: 4,
          },
          android: {
            elevation: 8,
          },
        }),
      },
    }
  }, [isDark])
}

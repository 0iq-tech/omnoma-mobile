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
    active: '#6B7CBC', // colors.sea.DEFAULT
    inactive: '#9EADB8', // colors.gray.500
    background: '#FFFFFF', // colors.surface.DEFAULT
    border: '#F1F4F6', // colors.surface.secondary
    shadow: '#000505', // colors.black.DEFAULT
  },
  dark: {
    active: '#E787BF', // colors.dark.primary.DEFAULT
    inactive: '#9EADB8', // colors.gray.500
    background: '#1E1E1E', // colors.dark.surface.DEFAULT
    border: '#2C2C2C', // colors.dark.surface.secondary
    shadow: '#000000', // direct black, not in config
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
            shadowOpacity: isDark ? 0.2 : 0.05,
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

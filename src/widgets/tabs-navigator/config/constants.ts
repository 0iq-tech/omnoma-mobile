import {BottomTabNavigationOptions} from '@react-navigation/bottom-tabs'
import {Platform} from 'react-native'

export const BASE_SCREEN_OPTIONS: BottomTabNavigationOptions = {
  headerShown: false,
  tabBarShowLabel: false,
  tabBarActiveTintColor: '#6B7CBC',
  tabBarInactiveTintColor: '#9EADB8',
  tabBarStyle: {
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#F1F4F6',
    height: Platform.select({ios: 88, android: 64}),
    paddingBottom: Platform.select({ios: 28, android: 12}),
    paddingTop: 12,
    ...Platform.select({
      ios: {
        shadowColor: '#000505',
        shadowOffset: {width: 0, height: -2},
        shadowOpacity: 0.05,
        shadowRadius: 4,
      },
      android: {
        elevation: 8,
      },
    }),
  },
}

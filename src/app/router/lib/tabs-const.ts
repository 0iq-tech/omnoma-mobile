import {FontAwesome} from '@expo/vector-icons'
import {BottomTabNavigationOptions} from '@react-navigation/bottom-tabs'
import {CameraScreen} from 'screens/camera'
import {HomeScreen} from 'screens/home'
import {tabNames, TabPapamList} from 'shared/navigation'

export const BASE_SCREEN_OPTIONS: BottomTabNavigationOptions = {
  headerShown: false,
  tabBarShowLabel: false,
  tabBarActiveTintColor: '#FBBA00',
  tabBarInactiveTintColor: 'gray',
}

export const SCREEN_COMPONENTS = {
  [tabNames.feed]: HomeScreen,
  [tabNames.camera]: CameraScreen,
  [tabNames.analytics]: CameraScreen,
} as const

export const SCREENS = Object.keys(SCREEN_COMPONENTS) as Array<
  keyof TabPapamList
>

export const TAB_ICONS: Record<
  keyof TabPapamList,
  keyof (typeof FontAwesome)['glyphMap']
> = {
  [tabNames.feed]: 'feed',
  [tabNames.camera]: 'camera',
  [tabNames.analytics]: 'bar-chart',
} as const

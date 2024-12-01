import {FontAwesome} from '@expo/vector-icons'
import {BottomTabNavigationOptions} from '@react-navigation/bottom-tabs'
import {AnalyticsScreen} from 'screens/analytics'
import {CameraScreen} from 'screens/camera'
import {FeedScreen} from 'screens/feed'
import {tabNames, TabPapamList} from 'shared/navigation'

export const BASE_SCREEN_OPTIONS: BottomTabNavigationOptions = {
  headerShown: false,
  tabBarShowLabel: false,
  tabBarActiveTintColor: '#FBBA00',
  tabBarInactiveTintColor: 'gray',
}

export const SCREEN_COMPONENTS = {
  [tabNames.feed]: FeedScreen,
  [tabNames.camera]: CameraScreen,
  [tabNames.analytics]: AnalyticsScreen,
} as const

export const SCREENS = Object.keys(SCREEN_COMPONENTS) as (keyof TabPapamList)[]

export const TAB_ICONS: Record<
  keyof TabPapamList,
  keyof (typeof FontAwesome)['glyphMap']
> = {
  [tabNames.feed]: 'feed',
  [tabNames.camera]: 'camera',
  [tabNames.analytics]: 'bar-chart',
} as const

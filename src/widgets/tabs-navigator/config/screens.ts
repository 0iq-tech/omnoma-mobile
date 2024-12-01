import {AnalyticsScreen} from 'screens/analytics'
import {CameraScreen} from 'screens/camera'
import {FeedScreen} from 'screens/feed'
import {tabNames, TabPapamList} from 'shared/navigation'

export const SCREEN_COMPONENTS = {
  [tabNames.feed]: FeedScreen,
  [tabNames.camera]: CameraScreen,
  [tabNames.analytics]: AnalyticsScreen,
} as const

export const SCREENS = Object.keys(SCREEN_COMPONENTS) as (keyof TabPapamList)[]

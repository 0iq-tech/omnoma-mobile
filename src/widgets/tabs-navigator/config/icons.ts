import {FontAwesome} from '@expo/vector-icons'
import {tabNames, TabPapamList} from 'shared/navigation'

export const TAB_ICONS: Record<
  keyof TabPapamList,
  keyof (typeof FontAwesome)['glyphMap']
> = {
  [tabNames.feed]: 'feed',
  [tabNames.camera]: 'camera',
  [tabNames.analytics]: 'bar-chart',
} as const

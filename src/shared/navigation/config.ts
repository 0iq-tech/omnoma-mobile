export const tabNames = {
  feed: 'feed',
  camera: 'camera',
  analytics: 'analytics',
} as const

export type TabPapamList = {
  [tabNames.feed]: undefined
  [tabNames.camera]: undefined
  [tabNames.analytics]: undefined
}

export type NavigationParamList = TabPapamList

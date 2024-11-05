export const routeNames = {
  home: 'home',
  camera: 'camera',
} as const

export type StackParamList = {
  [routeNames.home]: undefined
  [routeNames.camera]: undefined
}

export type NavigationParamList = StackParamList

export const routeNames = {
  home: 'home',
} as const

export type StackParamList = {
  [routeNames.home]: undefined
}

export type NavigationParamList = StackParamList

import {StackActions} from '@react-navigation/native'
import {NavigationParamList} from './config'
import {$isReady, onReady} from './is-ready'
import {ref} from './ref'
import {$state, onStateChange} from './state'
import {theme} from './theme'

export const navigation = {
  $isReady,
  $state,
  onReady,
  onStateChange,
  ref,
  theme,
  replace: <RouteName extends keyof NavigationParamList>(
    route: RouteName,
    params: NavigationParamList[RouteName],
  ) => {
    ref.dispatch(StackActions.replace(route, params))
  },
  push: <RouteName extends keyof NavigationParamList>(
    route: RouteName,
    params: NavigationParamList[RouteName],
  ) => {
    ref.dispatch(StackActions.push(route, params))
  },
  ...ref,
}

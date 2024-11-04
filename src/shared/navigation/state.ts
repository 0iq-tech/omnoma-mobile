import {InitialState, NavigationState} from '@react-navigation/native'
import {createEvent, createStore} from 'effector'
import {routeNames} from './config'

const $state = createStore<InitialState | null>({
  index: 0,
  routes: [{name: routeNames.home}],
})

const onStateChange = createEvent<NavigationState | undefined>()

export {$state, onStateChange}

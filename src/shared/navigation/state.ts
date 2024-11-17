import {InitialState, NavigationState} from '@react-navigation/native'
import {createEvent, createStore} from 'effector'
import {tabNames} from './config'

const $state = createStore<InitialState | null>({
  index: 0,
  routes: [{name: tabNames.feed}],
})

const onStateChange = createEvent<NavigationState | undefined>()

export {$state, onStateChange}

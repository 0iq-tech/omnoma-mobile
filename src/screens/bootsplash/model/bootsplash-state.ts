import {createEvent, createStore, sample} from 'effector'
import {navigation} from 'shared/navigation'
import {BootSplashState} from '../api'

const $state = createStore<BootSplashState>(BootSplashState.VISIBLE)

const setState = createEvent<BootSplashState>()

sample({
  clock: setState,
  target: $state,
})

sample({
  clock: navigation.onReady,
  fn: () => BootSplashState.HIDING,
  target: $state,
})

export {$state, setState}

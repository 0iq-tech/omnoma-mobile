import {combine, createEvent, createStore, sample} from 'effector'
import {i18n} from 'shared/i18n'
import {navigation} from 'shared/navigation'
import {BootSplashState} from '../api'

const $state = createStore<BootSplashState>(BootSplashState.VISIBLE)

const setState = createEvent<BootSplashState>()

sample({
  clock: setState,
  target: $state,
})

sample({
  clock: combine(navigation.$isReady, i18n.$isReady),
  filter: ([navigationReady, i18nReady]) => navigationReady && i18nReady,
  fn: () => BootSplashState.HIDING,
  target: $state,
})

export {$state, setState}

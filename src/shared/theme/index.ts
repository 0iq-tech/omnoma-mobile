import {persist} from '@effector-storage/react-native-async-storage'
import {attach, createEffect, createEvent, createStore, sample} from 'effector'
import {colorScheme} from 'nativewind'
import {Appearance} from 'react-native'
import {handleErrorFx, LEVELS} from '../lib/handle-error'
import {DEFAULT_COLOR_SCHEME} from './const'
import {NativeWindScheme} from './types'

const $colorScheme = createStore<NativeWindScheme | null>(null)

persist({store: $colorScheme, key: '$colorScheme'})

const getInitialColorSchemeFx = attach({
  source: $colorScheme,
  effect: (scheme) =>
    scheme ?? Appearance.getColorScheme() ?? DEFAULT_COLOR_SCHEME,
})

sample({
  clock: getInitialColorSchemeFx.failData,
  fn: (error) => ({
    error,
    level: LEVELS.ERROR,
    context: {
      source: 'getInitialColorSchemeFx',
    },
  }),
  target: handleErrorFx,
})

const setColorSchemeFx = createEffect((scheme: NativeWindScheme) => {
  requestAnimationFrame(() => {
    colorScheme.set(scheme)
  })
  return scheme
})

sample({
  clock: getInitialColorSchemeFx.doneData,
  target: setColorSchemeFx,
})

sample({
  source: setColorSchemeFx.doneData,
  target: $colorScheme,
})

sample({
  clock: setColorSchemeFx.failData,
  fn: (error) => ({
    error,
    level: LEVELS.ERROR,
    context: {
      source: 'setColorSchemeFx',
    },
  }),
  target: handleErrorFx,
})

const onToggleTheme = createEvent()

sample({
  clock: onToggleTheme,
  source: $colorScheme,
  fn: (scheme) => (scheme === 'dark' ? 'light' : 'dark'),
  target: setColorSchemeFx,
})

const $isDark = $colorScheme.map((schema) => schema === 'dark')

export const theme = {
  getInitialColorSchemeFx,
  onToggleTheme,
  $isDark,
} as const

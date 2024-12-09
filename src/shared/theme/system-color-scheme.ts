import {createEffect, createEvent, createStore, sample} from 'effector'

import {Appearance, ColorSchemeName} from 'react-native'

const $systemColorScheme = createStore<NonNullable<ColorSchemeName> | null>(
  null,
)

const getSystemColorSchemeFx = createEffect(() => {
  return Appearance.getColorScheme() ?? null
})

sample({
  clock: getSystemColorSchemeFx.doneData,

  target: $systemColorScheme,
})

const setSystemColorScheme = createEvent<NonNullable<ColorSchemeName>>()

sample({
  source: setSystemColorScheme,

  target: $systemColorScheme,
})

export {$systemColorScheme, getSystemColorSchemeFx, setSystemColorScheme}

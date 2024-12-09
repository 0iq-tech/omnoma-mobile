import {createEvent, createStore, sample} from 'effector'

import {theme, ThemeScheme} from 'shared/theme'

const $activeTheme = createStore<ThemeScheme>('system')

const changeActiveTheme = createEvent<ThemeScheme>()

sample({
  clock: changeActiveTheme,

  target: $activeTheme,
})

sample({
  clock: theme.getInitialColorSchemeFx.doneData,

  target: $activeTheme,
})

sample({
  clock: $activeTheme,

  target: theme.setColorSchemeFx,
})

export {$activeTheme, changeActiveTheme}

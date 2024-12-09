import {
  getInitialColorSchemeFx,
  setColorScheme,
  setColorSchemeFx,
} from './color-scheme'

import {$isDark} from './is-dark'

import {
  getSystemColorSchemeFx,
  setSystemColorScheme,
} from './system-color-scheme'
import {useIsDark} from './use-is-dark'

export {SystemThemeSync} from './SystemThemeSync'

export {ThemeScheme} from './types'

export const theme = {
  useIsDark,
  $isDark,

  getInitialColorSchemeFx,

  getSystemColorSchemeFx,

  setColorScheme,

  setColorSchemeFx,

  setSystemColorScheme,
} as const

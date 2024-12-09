import {combine} from 'effector'
import {$colorScheme} from './color-scheme'
import {$systemColorScheme} from './system-color-scheme'

const $isDark = combine($colorScheme, $systemColorScheme).map(
  ([scheme, systemScheme]) => {
    if (scheme === 'system') return systemScheme === 'dark'

    return scheme === 'dark'
  },
)

export {$isDark}

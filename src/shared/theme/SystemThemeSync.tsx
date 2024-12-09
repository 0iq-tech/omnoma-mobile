import {useUnit} from 'effector-react'

import {useEffect} from 'react'

import {useColorScheme, InteractionManager} from 'react-native'

import {setSystemColorScheme} from './system-color-scheme'

export function SystemThemeSync() {
  const [setSystemColorSchemeX] = useUnit([setSystemColorScheme])

  const systemColorScheme = useColorScheme()

  useEffect(() => {
    InteractionManager.runAfterInteractions(() => {
      if (systemColorScheme) setSystemColorSchemeX(systemColorScheme)
    })

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [systemColorScheme])

  return null
}

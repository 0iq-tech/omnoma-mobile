import {useUnit} from 'effector-react'
import React, {useEffect} from 'react'
import {SystemBars} from 'react-native-edge-to-edge'
import {
  BootSplashScreen,
  bootsplashScreenModel,
  BootSplashState,
} from 'screens/bootsplash'
import {app} from 'shared/lib'
import 'shared/lib/style-interop'
import {Measurements} from 'shared/measurements'
import {SystemThemeSync, theme} from 'shared/theme'
import '../../global.css'
import './i18n'
import {withProviders} from './providers'
import './storage'
import './theme'

import {Router} from './router'

function App() {
  const [appStarted, isDark] = useUnit([app.started, theme.$isDark])

  const [bootSplashState] = useUnit([bootsplashScreenModel.$state])

  useEffect(() => {
    appStarted()
  }, [])

  return (
    <>
      <SystemThemeSync />

      <Measurements />

      <SystemBars style={`${isDark ? 'light' : 'dark'}`} />

      <Router />

      {bootSplashState === BootSplashState.HIDING && <BootSplashScreen />}
    </>
  )
}

export default withProviders(App)

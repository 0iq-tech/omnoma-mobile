import 'shared/lib/style-interop'
import '../../global.css'
import './i18n'

import {useUnit} from 'effector-react'
import React, {useEffect} from 'react'
import {SystemBars} from 'react-native-edge-to-edge'
import {
  BootSplashScreen,
  bootsplashScreenModel,
  BootSplashState,
} from 'screens/bootsplash'
import {app} from 'shared/lib'
import {Measurements} from 'shared/measurements'
import {withProviders} from './providers'
import {Router} from './router'

function App() {
  const [appStarted] = useUnit([app.started])
  const [bootSplashState] = useUnit([bootsplashScreenModel.$state])

  useEffect(() => {
    appStarted()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <Measurements />
      <SystemBars style="dark" />
      <Router />
      {bootSplashState === BootSplashState.HIDING && <BootSplashScreen />}
    </>
  )
}

export default withProviders(App)

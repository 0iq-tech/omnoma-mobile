import 'shared/lib/style-interop'
import '../../global.css'

import {useUnit} from 'effector-react'
import React, {useEffect} from 'react'
import {
  AnimatedBootSplashScreen,
  bootsplashScreenModel,
  BootSplashState,
} from 'screens/bootsplash'
import {app} from 'shared/lib'
import {withProviders} from './providers'
import {Router} from './router'

function App() {
  const [appStarted] = useUnit([app.started])
  const [bootSplashState] = useUnit([bootsplashScreenModel.$state])

  useEffect(() => {
    appStarted()
  }, [])

  return (
    <>
      <Router />
      {bootSplashState === BootSplashState.HIDING && (
        <AnimatedBootSplashScreen />
      )}
    </>
  )
}

export default withProviders(App)

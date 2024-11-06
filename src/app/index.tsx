import 'shared/lib/style-interop'
import '../../global.css'

import {useUnit} from 'effector-react'
import React, {useEffect} from 'react'
import {app} from 'shared/lib'
import {withProviders} from './providers'
import {Router} from './router'

function App() {
  const [appStarted] = useUnit([app.started])

  useEffect(() => {
    appStarted()
  }, [])

  return (
    <>
      <Router />
    </>
  )
}

export default withProviders(App)

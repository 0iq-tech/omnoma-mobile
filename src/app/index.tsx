import 'shared/lib/style-interop'
import '../../global.css'

import React from 'react'
import {appModel} from './model'
import {withProviders} from './providers'
import {Router} from './router'

appModel.appStarted()

function App() {
  return (
    <>
      <Router />
    </>
  )
}

export default withProviders(App)

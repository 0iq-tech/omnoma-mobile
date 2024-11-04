import 'shared/lib/style-interop'
import '../../global.css'

import React from 'react'
import {withProviders} from './providers'
import {Router} from './router'

function App() {
  return (
    <>
      <Router />
    </>
  )
}

export default withProviders(App)

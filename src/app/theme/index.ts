import {combine, sample} from 'effector'

import {app} from 'shared/lib'

import {storage} from 'shared/storage'

import {theme} from 'shared/theme'

sample({
  source: combine(app.$isStarted, storage.$isReady),

  filter: ([appStarted, storageReady]) => appStarted && storageReady,

  target: [theme.getInitialColorSchemeFx, theme.getSystemColorSchemeFx],
})

import {sample} from 'effector'
import {i18n} from 'shared/i18n'
import {app} from 'shared/lib'

sample({
  clock: app.started,
  target: i18n.setup,
})

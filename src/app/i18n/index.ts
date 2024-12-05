import {sample} from 'effector'
import {cameraTranslations} from 'screens/camera'
import {i18n} from 'shared/i18n'
import {app} from 'shared/lib'

i18n.addResources(cameraTranslations)

sample({
  clock: app.started,
  target: i18n.setup,
})

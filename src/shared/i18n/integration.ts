import {createI18nextIntegration} from '@withease/i18next'
import {createEffect, sample} from 'effector'
import i18next from 'i18next'
import 'intl-pluralrules'
import {app, handleErrorFx} from 'shared/lib'
import {I18N_INIT_CONFIG} from './const'

const createI18nextFx = createEffect(async () => {
  await i18next.init(I18N_INIT_CONFIG)
  return i18next
})

const integration = createI18nextIntegration({
  instance: createI18nextFx,
  setup: app.started,
})

// handle errors

sample({
  clock: createI18nextFx.failData,
  fn: (error) => ({error, context: {source: 'createI18nextFx'}}),
  target: handleErrorFx,
})

export const {changeLanguageFx, $language, $t, $isReady, reporting} =
  integration

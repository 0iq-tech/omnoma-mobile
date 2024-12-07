import {createI18nextIntegration} from '@withease/i18next'
import {createEffect, createEvent, sample} from 'effector'
import i18next, {i18n, InitOptions} from 'i18next'
import 'intl-pluralrules'
import {handleErrorFx} from 'shared/lib'

export const createI18n = ({config}: {config: InitOptions}) => {
  const setup = createEvent()

  const createI18nextFx = createEffect<void, i18n>(async () => {
    const instance = i18next.createInstance()
    await instance.init(config)
    return instance
  })

  sample({
    clock: createI18nextFx.failData,
    fn: (error) => ({error, context: {source: 'createI18nextFx'}}),
    target: handleErrorFx,
  })

  const integration = createI18nextIntegration({
    instance: createI18nextFx,
    setup,
  })

  return {
    ...integration,
    setup,
  }
}

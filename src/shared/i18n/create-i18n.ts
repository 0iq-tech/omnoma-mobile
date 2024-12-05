import {createI18nextIntegration} from '@withease/i18next'
import {createEffect, createEvent, createStore, sample} from 'effector'
import i18next, {i18n} from 'i18next'
import 'intl-pluralrules'
import {handleErrorFx} from 'shared/lib'

export const createI18n = () => {
  const setup = createEvent()

  const $resources = createStore<Record<string, any>>({})
  const addResourcesEvent = createEvent<Record<string, any>>()

  sample({
    source: $resources,
    clock: addResourcesEvent,
    fn: (currentResources, newResources) => ({
      ...currentResources,
      ...newResources,
    }),
    target: $resources,
  })

  const createI18nextFx = createEffect<void, i18n>(async () => {
    const instance = i18next.createInstance()

    // While using getState() is generally an anti-pattern in Effector,
    // it's acceptable here since createI18nextFx is called only once during initialization
    // and we need synchronous access to resources at the exact moment of i18next initialization
    const resources = $resources.getState()

    await instance.init({
      lng: 'en',
      fallbackLng: 'en',
      interpolation: {
        escapeValue: false,
      },
      resources,
    })

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
    addResources: (resources: Record<string, any>) => {
      addResourcesEvent(resources)
    },
  }
}

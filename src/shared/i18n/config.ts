import {InitOptions} from 'i18next'
import {translations} from './translations'

export const I18N_INIT_CONFIG: InitOptions = {
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
  lng: 'en',
  resources: translations,
} as const

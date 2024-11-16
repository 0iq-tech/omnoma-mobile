import {InitOptions} from 'i18next'
import {translations} from './translations'

export const I18N_INIT_CONFIG: InitOptions = {
  resources: translations,
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
} as const

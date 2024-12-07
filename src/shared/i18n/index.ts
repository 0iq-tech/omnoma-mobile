import {I18N_INIT_CONFIG} from './config'
import {createI18n} from './create-i18n'
type Translations = typeof import('./translations').translations

export const i18n = createI18n<Translations>({config: I18N_INIT_CONFIG})

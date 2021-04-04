import * as Localization from 'expo-localization';
import I18n from 'i18n-js'

import en from './en-US'
import pt from './pt-BR'

I18n.translations = { en, pt }
I18n.locale = Localization.locale;
I18n.fallbacks = true;

export const translate = key => I18n.t(key)
export const language = Localization.locale
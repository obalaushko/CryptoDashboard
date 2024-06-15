import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpBackend from 'i18next-http-backend';
import { i18nextPlugin } from 'translation-check';
import { LOCALS } from './constants.ts';

i18n.use(HttpBackend)
	.use(LanguageDetector)
	.use(initReactI18next)
	.use(i18nextPlugin)
	.init({
		fallbackLng: LOCALS.EN,
		debug: true,
		supportedLngs: [LOCALS.EN, LOCALS.UK],
		interpolation: {
			escapeValue: false,
		},
		backend: {
			loadPath: '/locales/{{lng}}/{{ns}}.json',
		},
	});

export default i18n;

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: { translation: { welcome: "Welcome!", switchLang: "Switch Language" } },
  ru: { translation: { welcome: "Добро пожаловать!", switchLang: "Сменить язык" } },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en', // Дефолтный язык (можно заменить на 'ru')
  fallbackLng: 'en',
  interpolation: { escapeValue: false },
});

export default i18n;
